import { Type, type Static } from '@sinclair/typebox'
import { relations } from 'drizzle-orm'
import { index, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { createSelectSchema } from 'drizzle-typebox'
import { users } from './user.schema'

export const teams = pgTable(
  'team',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    invitationCode: text('invitation_code').notNull(),
    creatorId: text('creator_id').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (teams) => {
    return {
      codeIndex: index('invitation_code_index').on(teams.invitationCode),
    }
  }
)

export const teamsRelations = relations(teams, ({ many, one }) => ({
  members: many(users),
  creator: one(users, {
    fields: [teams.creatorId],
    references: [users.id],
  }),
}))

export const insertTeamSchema = Type.Object({
  name: Type.String({ minLength: 3, maxLength: 80, error: 'Debe tener entre 3 y 80 caracteres' }),
  description: Type.Optional(
    Type.Union([
      Type.String({ maxLength: 500, error: 'No deber tener más de 500 caracteres' }),
      Type.Null(),
    ])
  ),
})

export const selectTeamSchema = createSelectSchema(teams)

export type TeamInsert = Static<typeof insertTeamSchema>
export type Team = Static<typeof selectTeamSchema>

// export const validateUserInsert =
