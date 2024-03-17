/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL: string
  readonly PUBLIC_PREREGISTER_API_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
