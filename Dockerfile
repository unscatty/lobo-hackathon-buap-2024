ARG SITE_URL=http://localhost:3000
ARG PORT=3000
ARG PUBLIC_PREREGISTER_API_ENDPOINT

FROM oven/bun:1.0.20-debian as base

WORKDIR /app

COPY package.json .
COPY bun.lockb .
# Patches
COPY patches patches

# Production dependencies
FROM base as prod-deps
RUN bun install --frozen-lockfile --production
# Patch dependencies
RUN bun run patch-deps

# Development dependencies
FROM base as dev-deps
RUN bun install --frozen-lockfile
# Patch dependencies
RUN bun run patch-deps

# Build the app
FROM dev-deps as build
ARG SITE_URL
ARG PORT
ARG PUBLIC_PREREGISTER_API_ENDPOINT

ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT ${PORT}
ENV SITE_URL ${SITE_URL}
ENV PUBLIC_PREREGISTER_API_ENDPOINT ${PUBLIC_PREREGISTER_API_ENDPOINT}

COPY . .
RUN bun run build


FROM oven/bun:1.1-alpine as release
ARG PORT

WORKDIR /app

COPY --from=prod-deps /app/node_modules node_modules
COPY --from=build /app/dist ./dist

COPY tsconfig.json .
COPY public public

EXPOSE ${PORT}

CMD ["bun", "run", "./dist/server/entry.mjs"]
