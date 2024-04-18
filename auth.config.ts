import type { Adapter } from '@auth/core/adapters'
import GitHub from '@auth/core/providers/github'
import Google from '@auth/core/providers/google'
import Discord from '@auth/core/providers/discord'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from '@server/db'
import { defineConfig } from 'auth-astro'

export default defineConfig({
  debug: import.meta.env.MODE === 'development',
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    GitHub({
      clientId: import.meta.env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.AUTH_GITHUB_CLIENT_SECRET,
    }),
    // Google({
    //   clientId: import.meta.env.AUTH_GOOGLE_CLIENT_ID,
    //   clientSecret: import.meta.env.AUTH_GOOGLE_CLIENT_SECRET,
    // }),
    Discord({
      clientId: import.meta.env.AUTH_DISCORD_CLIENT_ID,
      clientSecret: import.meta.env.AUTH_DISCORD_CLIENT_SECRET,
    }),
  ],
})
