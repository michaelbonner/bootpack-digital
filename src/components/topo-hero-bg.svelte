<script lang="ts">
	import { onMount } from 'svelte';

	// Tile size must match the 600px repeat of /images/blue-topo.svg
	const TILE = 600;
	// How far (px) from the cursor the glow and the line warp reach
	const RADIUS = 250;
	// Max distance (px) a line point is pulled toward the cursor
	const MAX_SHIFT = 6;
	// Higher = the glow chases the cursor faster (1/s)
	const POSITION_RATE = 10;
	// Higher = the glow fades in/out faster (1/s)
	const STRENGTH_RATE = 5;
	// Distance (px) between precomputed points along each line
	const SAMPLE_STEP = 5;
	const BASE_COLOR = '#e9f3f8'; // blue-100, matches the static SVG fill
	const HIGHLIGHT_COLOR = '#2787b7'; // blue-500

	type LineGeometry = {
		pts: Float32Array;
		minX: number;
		minY: number;
		maxX: number;
		maxY: number;
		closed: boolean;
	};

	let host: HTMLDivElement;
	let svgEl = $state<SVGSVGElement>();
	let lines = $state<string[]>([]);
	let ready = $state(false);
	let width = $state(0);
	let height = $state(0);

	const tilesX = $derived(Math.max(1, Math.ceil(width / TILE)));
	const tilesY = $derived(Math.max(1, Math.ceil(height / TILE)));
	const tiles = $derived(
		Array.from({ length: tilesX * tilesY }, (_, i) => ({
			x: (i % tilesX) * TILE,
			y: Math.floor(i / tilesX) * TILE
		}))
	);

	let geometry: LineGeometry[] | undefined;
	let basePaths: SVGPathElement[] = [];
	let gradientEls: SVGRadialGradientElement[] = [];
	let warped = new Uint8Array(0);

	let pointerX = 0;
	let pointerY = 0;
	let pointerSeen = false;
	let glowX = 0;
	let glowY = 0;
	let strength = 0;
	let frameId = 0;
	let lastTime = 0;

	function sampleGeometry(tilePaths: SVGPathElement[]) {
		return tilePaths.map((el) => {
			const length = el.getTotalLength();
			const count = Math.max(16, Math.min(600, Math.round(length / SAMPLE_STEP)));
			const pts = new Float32Array(count * 2);
			let minX = Infinity;
			let minY = Infinity;
			let maxX = -Infinity;
			let maxY = -Infinity;
			for (let i = 0; i < count; i++) {
				const p = el.getPointAtLength((length * i) / (count - 1));
				pts[i * 2] = p.x;
				pts[i * 2 + 1] = p.y;
				if (p.x < minX) minX = p.x;
				if (p.y < minY) minY = p.y;
				if (p.x > maxX) maxX = p.x;
				if (p.y > maxY) maxY = p.y;
			}
			const closed = /z$/i.test(el.getAttribute('d') ?? '');
			return { pts, minX, minY, maxX, maxY, closed };
		});
	}

	// Rebuild a line as a polyline with every point pulled toward the cursor,
	// falling off with distance, so the warp is continuous along the line and
	// across tile seams. Returns null when no point moves visibly.
	function warpedPath(geo: LineGeometry, cx: number, cy: number) {
		const pts = geo.pts;
		let moved = false;
		let d = '';
		for (let i = 0; i < pts.length; i += 2) {
			let x = pts[i];
			let y = pts[i + 1];
			const dx = cx - x;
			const dy = cy - y;
			const dist = Math.sqrt(dx * dx + dy * dy);
			if (dist < RADIUS && dist > 0.01) {
				const falloff = (1 - dist / RADIUS) ** 2;
				// Soften the pull right under the cursor so lines don't jitter
				const pull = MAX_SHIFT * falloff * strength * Math.min(dist / 24, 1);
				if (pull > 0.05) {
					x += (dx / dist) * pull;
					y += (dy / dist) * pull;
					moved = true;
				}
			}
			d += `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`;
		}
		if (!moved) return null;
		return geo.closed ? `${d}Z` : d;
	}

	function restore(index: number) {
		if (!warped[index]) return;
		warped[index] = 0;
		const lineCount = geometry?.length ?? 0;
		basePaths[index]?.setAttribute('d', lines[index % lineCount]);
	}

	function frame(time: number) {
		frameId = 0;
		if (!svgEl || !geometry) return;
		const dt = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0.016;
		lastTime = time;

		const rect = host.getBoundingClientRect();
		const mx = pointerX - rect.left;
		const my = pointerY - rect.top;
		const inHero = pointerSeen && mx > 0 && my > 0 && mx < rect.width && my < rect.height;
		const target = inHero ? 1 : 0;

		if (strength < 0.004 && target) {
			// Waking up: start the glow at the cursor instead of sweeping in
			glowX = mx;
			glowY = my;
		}
		const positionEase = 1 - Math.exp(-POSITION_RATE * dt);
		const strengthEase = 1 - Math.exp(-STRENGTH_RATE * dt);
		if (inHero) {
			glowX += (mx - glowX) * positionEase;
			glowY += (my - glowY) * positionEase;
			// Snap once converged so the loop can stop instead of easing forever
			if (Math.abs(mx - glowX) < 0.1 && Math.abs(my - glowY) < 0.1) {
				glowX = mx;
				glowY = my;
			}
		}
		strength += (target - strength) * strengthEase;
		if (Math.abs(target - strength) < 0.002) strength = target;
		const settled = strength === target && (!inHero || (glowX === mx && glowY === my));

		if (!target && !strength) {
			for (let i = 0; i < warped.length; i++) restore(i);
			svgEl.style.setProperty('--topo-strength', '0');
			lastTime = 0;
			return;
		}

		svgEl.style.setProperty('--topo-strength', strength.toFixed(3));

		const lineCount = geometry.length;
		for (let t = 0; t < tiles.length; t++) {
			const lx = glowX - tiles[t].x;
			const ly = glowY - tiles[t].y;
			gradientEls[t]?.setAttribute('cx', lx.toFixed(2));
			gradientEls[t]?.setAttribute('cy', ly.toFixed(2));
			for (let l = 0; l < lineCount; l++) {
				const index = t * lineCount + l;
				const geo = geometry[l];
				if (
					lx < geo.minX - RADIUS ||
					ly < geo.minY - RADIUS ||
					lx > geo.maxX + RADIUS ||
					ly > geo.maxY + RADIUS
				) {
					restore(index);
					continue;
				}
				const d = warpedPath(geo, lx, ly);
				if (d) {
					basePaths[index]?.setAttribute('d', d);
					warped[index] = 1;
				} else {
					restore(index);
				}
			}
		}

		if (settled) {
			// Fully converged; pointermove/scroll restarts the loop
			lastTime = 0;
			return;
		}
		frameId = requestAnimationFrame(frame);
	}

	function ensureLoop() {
		if (!frameId && geometry) frameId = requestAnimationFrame(frame);
	}

	$effect(() => {
		if (!svgEl || !lines.length || !tiles.length) return;
		const paths = Array.from(svgEl.querySelectorAll('path'));
		if (!geometry) geometry = sampleGeometry(paths.slice(0, lines.length));
		basePaths = paths;
		gradientEls = Array.from(svgEl.querySelectorAll('radialGradient'));
		warped = new Uint8Array(paths.length);
		ready = true;
	});

	onMount(() => {
		if (
			!window.matchMedia('(pointer: fine)').matches ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			return;
		}

		let disposed = false;
		const observer = new ResizeObserver(([entry]) => {
			width = entry.contentRect.width;
			height = entry.contentRect.height;
		});
		observer.observe(host);

		const onPointerMove = (event: PointerEvent) => {
			pointerX = event.clientX;
			pointerY = event.clientY;
			pointerSeen = true;
			ensureLoop();
		};
		const onPointerGone = () => {
			pointerSeen = false;
			ensureLoop();
		};
		const onScroll = () => ensureLoop();
		window.addEventListener('pointermove', onPointerMove, { passive: true });
		window.addEventListener('scroll', onScroll, { passive: true });
		document.documentElement.addEventListener('mouseleave', onPointerGone);
		window.addEventListener('blur', onPointerGone);

		const idle =
			typeof requestIdleCallback === 'function'
				? requestIdleCallback
				: (cb: () => void) => setTimeout(cb, 200);
		idle(async () => {
			if (disposed) return;
			try {
				const { topoLines } = await import('$lib/data/topo-lines');
				if (!disposed) lines = topoLines;
			} catch (error) {
				// The static tiled background stays visible, so just log
				console.error('Failed to load topo line data', error);
			}
		});

		return () => {
			disposed = true;
			observer.disconnect();
			window.removeEventListener('pointermove', onPointerMove);
			window.removeEventListener('scroll', onScroll);
			document.documentElement.removeEventListener('mouseleave', onPointerGone);
			window.removeEventListener('blur', onPointerGone);
			if (frameId) cancelAnimationFrame(frameId);
		};
	});
</script>

<div bind:this={host} class="overflow-hidden absolute inset-0" aria-hidden="true">
	<div
		class="absolute inset-0 transition-opacity duration-700"
		style="background-image: url('/images/blue-topo.svg'); background-size: 600px 600px; background-repeat: repeat;"
		style:opacity={ready ? 0 : 1}
	></div>
	{#if lines.length}
		<svg
			bind:this={svgEl}
			class="absolute inset-0 transition-opacity duration-700"
			style:opacity={ready ? 1 : 0}
			{width}
			{height}
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				{#each tiles as tile, t (`${tile.x}-${tile.y}`)}
					<radialGradient id="topo-glow-{t}" gradientUnits="userSpaceOnUse" r={RADIUS}>
						<stop offset="0" stop-color={HIGHLIGHT_COLOR} stop-opacity="0.45" />
						<stop offset="0.3" stop-color={HIGHLIGHT_COLOR} stop-opacity="0.3" />
						<stop offset="0.6" stop-color={HIGHLIGHT_COLOR} stop-opacity="0.13" />
						<stop offset="0.85" stop-color={HIGHLIGHT_COLOR} stop-opacity="0.04" />
						<stop offset="1" stop-color={HIGHLIGHT_COLOR} stop-opacity="0" />
					</radialGradient>
				{/each}
			</defs>
			{#each tiles as tile, t (`${tile.x}-${tile.y}`)}
				<g transform="translate({tile.x} {tile.y})">
					<g stroke={BASE_COLOR} stroke-width="1" fill="none">
						{#each lines as d, i (i)}
							<path id="topo-line-{t}-{i}" {d} />
						{/each}
					</g>
					<g
						class="topo-glow-layer"
						stroke="url(#topo-glow-{t})"
						stroke-width="1.6"
						fill="none"
					>
						{#each lines as _, i (i)}
							<use href="#topo-line-{t}-{i}" />
						{/each}
					</g>
				</g>
			{/each}
		</svg>
	{/if}
</div>

<style>
	.topo-glow-layer {
		opacity: var(--topo-strength, 0);
	}
</style>
