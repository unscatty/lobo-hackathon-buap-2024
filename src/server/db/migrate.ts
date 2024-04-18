import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { join } from 'node:path'
import { createDrizzle } from './create-drizzle'

const { DRIZZLE_DB_URL } =
  process.env.NODE_ENV === 'production'
    ? process.env
    : await import('vite').then((vite) =>
        vite.loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '')
      )

if (!DRIZZLE_DB_URL) {
  throw new Error('DRIZZLE_DB_URL not found')
}

const { db, client: sql } = await createDrizzle(DRIZZLE_DB_URL)

await migrate(db, { migrationsFolder: join(process.cwd(), 'src', 'server', 'db', 'migrations') })

await sql.end()
