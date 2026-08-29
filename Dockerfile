# =====================================================================
# Runtime image for Bootpack Digital.
#
# This image is NOT where the app is built. `bun install` and `vite build` run
# on the GitHub runner (see .github/actions/build-image), so the build context
# arriving here is a tree that has already been installed and built, and this
# file only lays it into a Bun image and drops privileges.
#
# The reason is cache lifetime. About 90s of every cold build was
# @sveltejs/enhanced-img re-encoding ~300 avif/webp variants; vite-imagetools
# caches those in node_modules/.cache/imagetools, and that cache can only be
# carried between CI runs by actions/cache, which has nothing to hook into
# inside a build layer. Building on the runner also removes the need for
# `cache-to: type=gha,mode=max`, which was spending 51s exporting layers to buy
# back a single ~11s `bun install`.
#
# The trade is that node_modules is copied in rather than resolved here, so the
# machine that builds the context and this image have to be the same platform.
# Both are linux/amd64 (ubuntu-latest runners, oven/bun:1), and the workflow
# passes --platform linux/amd64 to keep it that way.
#
# Override the base to pin an exact image:
#   docker build --build-arg BUN_IMAGE=oven/bun:1@sha256:<digest> .
# =====================================================================
ARG BUN_IMAGE=oven/bun:1
FROM ${BUN_IMAGE}
WORKDIR /app

# HOST/PORT are what svelte-adapter-bun's server reads to bind.
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

# The whole tree comes over rather than just build/: SvelteKit externalizes
# dependencies from the server bundle (so build/server still imports from
# node_modules at runtime), and `drizzle-kit migrate` needs drizzle/,
# drizzle.config.ts and the schema — with drizzle-kit itself a devDependency.
# .dockerignore is what keeps the build-only files (source images, the
# .svelte-kit intermediates, the imagetools cache) out.
#
# The base image ships an unprivileged `bun` user (uid/gid 1000) but still
# defaults to root. Copy the tree with that ownership and drop to it, so neither
# the drizzle-kit migration nor the server runs as root inside the container.
# Ownership matters as well as the USER: bun writes into node_modules/.cache.
COPY --chown=bun:bun . ./
USER bun

EXPOSE 3000

# Runtime config (DATABASE_URL, TELEGRAM_*, TURNSTILE_SECRET_KEY, ...) is
# injected by Dokploy as container env vars and read through
# `$env/dynamic/private`, so none of it is needed to produce this image.
#
# `start` = `bun run db:migrate && bun ./server.js`. A failed migration exits
# non-zero before the server binds, so the new container never becomes healthy
# and Dokploy keeps the previous one serving.
CMD ["bun", "run", "start"]
