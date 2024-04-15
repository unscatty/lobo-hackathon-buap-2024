ARG SITE_URL=http://localhost:3000
ARG PORT=3000
ARG PUBLIC_PREREGISTER_API_ENDPOINT

FROM node:20.10.0 as base

WORKDIR /app

# Env vars for pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
# Patches
COPY patches patches

# Production dependencies
FROM base as prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod=true --frozen-lockfile

# Build the app
FROM base as build

ARG SITE_URL
ARG PORT
ARG PUBLIC_PREREGISTER_API_ENDPOINT

ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT ${PORT}
ENV SITE_URL ${SITE_URL}
ENV PUBLIC_PREREGISTER_API_ENDPOINT ${PUBLIC_PREREGISTER_API_ENDPOINT}

# Install all dependencies
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod=false --frozen-lockfile

COPY . .
RUN pnpm run build


FROM node:20.10.0-alpine as release
ARG PORT

WORKDIR /app

COPY --from=prod-deps /app/node_modules node_modules
COPY --from=build /app/dist ./dist

COPY tsconfig.json .
COPY public public

EXPOSE ${PORT}

CMD ["node", "./dist/server/entry.mjs"]
