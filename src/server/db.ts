import { createDrizzle } from '@server/db/create-drizzle'

export const { db, client: pgDatabase } = await createDrizzle(import.meta.env.DRIZZLE_DB_URL)

export type Database = typeof db
