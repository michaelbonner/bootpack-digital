# syntax=docker/dockerfile:1

# =====================================================================
# Production image for Bootpack Digital.
#
# Built in GitHub Actions (see .github/workflows/deploy.yml) and pushed to
# GHCR; Dokploy only pulls and runs it. Previously Dokploy built this on the
# production box with nixpacks, which pinned the CPU for the length of every
# `vite build` and made deploys compete with the live site for RAM.
#
# The build needs NO database and NO real secrets. Everything private is read
# through `$env/dynamic/private` (i.e. process.env at container start), so none
# of it is inlined into the bundle. Only the `$env/static/public` values below
# are needed at build time, and those ship to every browser anyway.
# =====================================================================
FROM oven/bun:1 AS build
WORKDIR /app

# Install dependencies first so this layer caches unless the lockfile moves.
# devDependencies are needed both for the build (vite, svelte, tailwind) and at
# runtime (drizzle-kit runs the migrations on start), so this is deliberately
# not a --production install.
#
# --ignore-scripts: nothing here needs a postinstall, and it also skips the root
# `prepare` (`svelte-kit sync` plus `lefthook install`, which has no git repo to
# install into here). The SvelteKit Vite plugin re-runs the sync during build.
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --ignore-scripts

COPY . .

# `$env/static/public` values — inlined into the client bundle at build time, so
# they must be present now rather than at container start. All three are public:
# two feature flags and the Turnstile *site* key. Preview builds pass
# Cloudflare's always-passes test site key instead of the live one.
ARG PUBLIC_TEST_CONTACT_FORM
ARG PUBLIC_POSTHOG_ENABLED
ARG PUBLIC_TURNSTILE_SITE_KEY
ENV PUBLIC_TEST_CONTACT_FORM=$PUBLIC_TEST_CONTACT_FORM \
    PUBLIC_POSTHOG_ENABLED=$PUBLIC_POSTHOG_ENABLED \
    PUBLIC_TURNSTILE_SITE_KEY=$PUBLIC_TURNSTILE_SITE_KEY

# SvelteKit's build imports every server route once to read its page options, so
# any module doing work at import time has to be satisfiable. These placeholders
# are scoped to this RUN, so they never reach the image's ENV — and every module
# that reads them uses `$env/dynamic/private`, so the running container sees the
# real Dokploy values. Nothing connects during the build and nothing is
# prerendered against a database.
RUN DATABASE_URL=postgres://build:build@127.0.0.1:5432/build \
    BETTER_AUTH_SECRET=build_time_placeholder_not_used_at_runtime \
    bun run build

# =====================================================================
# Runtime — stays on the same Bun base as the build stage so the native
# binaries resolved during install are still the right ones.
#
# The whole /app tree is carried over rather than just build/: SvelteKit
# externalizes dependencies from the server bundle (so build/server still
# imports from node_modules at runtime), and `drizzle-kit migrate` needs
# drizzle/, drizzle.config.ts and the schema — with drizzle-kit itself being a
# devDependency.
# =====================================================================
FROM oven/bun:1 AS runtime
WORKDIR /app

# HOST/PORT are what svelte-adapter-bun's server reads to bind.
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

COPY --from=build /app ./

EXPOSE 3000

# Runtime config (DATABASE_URL, TELEGRAM_*, TURNSTILE_SECRET_KEY, ...) is
# injected by Dokploy as container env vars.
#
# `start` = `bun run db:migrate && bun ./server.js`, exactly as before. A failed
# migration exits non-zero before the server binds, so the new container never
# becomes healthy and Dokploy keeps the previous one serving.
CMD ["bun", "run", "start"]
