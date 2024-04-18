// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL: string

  // Public env variables to be used in the client
  readonly PUBLIC_PREREGISTER_API_ENDPOINT: string
  readonly PUBLIC_API_ENDPOINT: string

  // Sqids
  readonly SQIDS_ALPHABET: string
  readonly USER_SQID_SALT: string

  // Database
  readonly DRIZZLE_DB_URL: string

  // Authentication
  readonly AUTH_SECRET: string

  // GitHub
  readonly AUTH_GITHUB_CLIENT_ID: string
  readonly AUTH_GITHUB_CLIENT_SECRET: string
  readonly AUTH_GITHUB_CALLBACK_URL: string

  // Google
  readonly AUTH_GOOGLE_CLIENT_ID: string
  readonly AUTH_GOOGLE_CLIENT_SECRET: string
  readonly AUTH_GOOGLE_CALLBACK_URL: string

  // Discord
  readonly AUTH_DISCORD_CLIENT_ID: string
  readonly AUTH_DISCORD_CLIENT_SECRET: string
  readonly AUTH_DISCORD_CALLBACK_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
