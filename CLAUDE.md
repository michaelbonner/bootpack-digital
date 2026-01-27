# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bootpack Digital website - a SvelteKit 5 static site using Tailwind CSS v4, TypeScript, and deployed on Vercel. This is a marketing website with static prerendering enabled.

## Commands

### Development
```bash
bun dev          # Start development server
bun run build    # Build for production
bun run preview  # Preview production build locally
```

### Code Quality
```bash
bun run check          # Run svelte-check for type checking
bun run check:watch    # Run svelte-check in watch mode
bun run lint           # Run prettier and eslint checks
bun run format         # Format code with prettier
```

### Testing
```bash
bun test              # Run all tests (alias for test:e2e)
bun run test:e2e      # Run Playwright end-to-end tests
```

### Dependencies
```bash
bun run out           # Check for outdated packages
bun run up            # Update all dependencies
```

## Architecture

### Framework Setup
- **SvelteKit 5** with adapter-vercel for static deployment
- **Prerendering**: Site is fully prerendered (set in `+layout.server.ts`)
- **Svelte 5**: Uses modern Svelte 5 syntax including `$props()`, `$derived`, and `{@render}` blocks
- **TypeScript**: Full TypeScript support with strict checking enabled

### Routing Structure
- Standard SvelteKit file-based routing in `src/routes/`
- Main pages: Home (`/`), Work (`/work`), About (`/about`), Open-source (`/open-source`), Contact (`/contact`)
- Policies section with Termageddon integration for legal pages
- All pages are prerendered at build time

### Layout System
- Root layout (`+layout.svelte`) includes:
  - Global styles and font imports (Figtree Variable)
  - PostHog analytics integration (can be disabled via env)
  - Google Tag Manager via Partytown (web worker isolation)
  - View Transitions API for smooth page navigation
  - Structured data (JSON-LD) for SEO
  - Global Header, Footer, and FictiveRedirectModal components

### Styling
- **Tailwind CSS v4** with custom color palette (blue, navy, orange)
- Custom `@theme` configuration in `src/app.css`
- Tailwind Typography plugin for prose content
- Figtree Variable font as default font family

### Third-Party Integrations

#### Analytics
- **PostHog**: Client-side analytics with proxied API calls through `/ingest/*` (configured in `vercel.json`)
- Controlled by `PUBLIC_POSTHOG_ENABLED` env variable
- Custom pageview/pageleave tracking on navigation

#### Partytown
- Google Tag Manager runs in a web worker via Partytown
- Scripts proxied through `/proxytown/*` endpoints (configured in `vercel.json`)
- Prevents blocking main thread execution

#### Termageddon
- Legal policies (privacy, terms, cookies) fetched from Termageddon API
- Implementation in `src/functions/getTermageddonPolicyContent.ts`
- Policies loaded at build time via `+page.ts` load functions

### Security Headers
- Configured in `src/hooks.server.ts`
- Sets CSP, X-Frame-Options, X-Content-Type-Options, X-XSS-Protection headers

### Environment Variables
- `PUBLIC_POSTHOG_ENABLED`: Toggle PostHog analytics (default: enabled)
- `PUBLIC_TEST_CONTACT_FORM`: Used for contact form testing

### Image Handling
- `@sveltejs/enhanced-img` for optimized image delivery
- Images stored in `src/images/` (processed) and `static/` (static assets)
- Work portfolio images in `src/images/work/`

### Component Architecture
- Reusable components in `src/components/`
- Key components: Header (with mobile nav), Footer, ContactForm, ContactBanner, SEO, WorkItem
- `topo-bg.svelte`: Large inline SVG for topographic background pattern
- Navigation links centralized in `src/lib/nav-links.ts` using typed RouteId

### Redirects and Rewrites
- Configured in `vercel.json`
- Handles domain redirects (fictiveweb.com → bootpackdigital.com)
- Proxies for analytics and tag manager
- Legacy route redirects (e.g., `/blog` → `/about`)

## Development Notes

### SvelteKit 5 Syntax
- Use `$props()` for component props instead of `export let`
- Use `{@render children()}` for slot content
- Reactive values with `$derived` instead of `$:`

### Type Safety
- Run `bun run check` before committing to catch type errors
- SvelteKit auto-generates `$types` for type-safe routing

### Testing
- Playwright tests in `e2e/` directory
- Tests run against production build (builds then previews)
- Output in `playwright-report/` and `test-results/`

### Deployment
- Auto-deployed to Vercel on push
- Static site generation (all routes prerendered)
- Edge network distribution
