# syntax=docker/dockerfile:1.7
# ============================================================================
# Component showcase deploy. ui-kit is a library (no server), so this image
# builds the static showcase SPA (showcase/) and serves it. The showcase
# imports components straight from ../src — no published package needed.
# No BuildKit cache mounts (Railway's Metal builder rejects them).
# ============================================================================

FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run showcase:build

# ----------------------------------------------------------------------------
# Runtime — static file server with SPA fallback
# ----------------------------------------------------------------------------
FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    PORT=8080

RUN apk add --no-cache curl && npm i -g serve@14

COPY --from=build /app/showcase-dist ./showcase-dist

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -fsS http://127.0.0.1:${PORT:-8080}/ -o /dev/null || exit 1

CMD ["sh", "-c", "serve -s showcase-dist -l ${PORT:-8080}"]
