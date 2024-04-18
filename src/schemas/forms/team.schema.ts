import { teams } from '@server/db/schema'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

export const insertTeamZodSchema = createInsertSchema(teams, {
  name: z.string().min(3).max(80),
  description: z.string().max(500).optional(),
}).pick({
  name: true,
  description: true,
})

export const selectTeamZodSchema = createSelectSchema(teams)

export type TeamInsertZod = z.infer<typeof insertTeamZodSchema>
export type TeamZod = z.infer<typeof selectTeamZodSchema>
