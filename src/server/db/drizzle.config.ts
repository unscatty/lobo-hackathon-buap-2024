import { defineConfig } from 'drizzle-kit'
import { loadEnv } from 'vite'
import { join } from 'node:path'

const { DRIZZLE_DB_URL } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '')

if (!DRIZZLE_DB_URL) {
  throw new Error('DRIZZLE_DB_URL not found')
}

const serverPath = join('.', 'src', 'server')

export default defineConfig({
  schema: join(serverPath, 'db', 'schema.ts'),
  out: join(serverPath, 'db', 'migrations'),
  driver: 'pg',
  dbCredentials: {
    connectionString: DRIZZLE_DB_URL,
  },
  verbose: true,
  strict: true,
})
