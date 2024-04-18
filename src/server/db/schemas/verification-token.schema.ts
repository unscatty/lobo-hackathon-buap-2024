import type { Static } from '@sinclair/typebox'
import { pgTable, primaryKey, text, timestamp } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox'

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
)

export const insertVerificationTokenSchema = createInsertSchema(verificationTokens)
export const selectVerificationTokenSchema = createSelectSchema(verificationTokens)

export type VerificationTokenInsert = Static<typeof insertVerificationTokenSchema>
export type VerificationToken = Static<typeof selectVerificationTokenSchema>
