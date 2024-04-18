import { random } from '@/utils/random.util'
import type { Session } from '@auth/core/types'
import { eq } from 'drizzle-orm'
import { Elysia, t } from 'elysia'
import { httpErrorDecorator } from 'elysia-http-error'
import { users } from '../db/schema'
import { insertTeamSchema, teams } from '../db/schemas/team.schema'
import dbDecorator from '../decorators/db.dec'
import { userSessionSchema } from '../models/session.model'
import { getCurrentUser } from '../services/user.service'

export const teamsRoutes = new Elysia()
  .use(dbDecorator)
  .use(httpErrorDecorator)
  .decorate('random', random)
  .group('/teams', (app) =>
    app
      .post(
        '/create',
        async ({ body: { team, session }, db, HttpError, random }) => {
          const currentUser = await getCurrentUser(session as Session, db, HttpError)

          if (!currentUser) throw HttpError.Unauthorized('Could not find current user')

          if (currentUser.teamId) throw HttpError.Conflict('User already has a team')

          // Insert team
          const createdTeam = (
            await db
              .insert(teams)
              .values({
                ...team,
                creatorId: currentUser.id,
                invitationCode: random.string(32),
              })
              .returning()
          )[0]

          // Update current user's teamId
          await db
            .update(users)
            .set({ teamId: createdTeam.id })
            .where(eq(users.email, currentUser.email))

          return createdTeam
        },
        {
          body: t.Object({
            team: insertTeamSchema,
            session: userSessionSchema,
          }),
        }
      )
      .post(
        '/join',
        async ({ body: { invitationCode, session }, db, HttpError }) => {
          const currentUser = await getCurrentUser(session as Session, db, HttpError)

          if (!currentUser) throw HttpError.Unauthorized('Could not find current user')

          if (currentUser.teamId) throw HttpError.Conflict('User already has a team')

          const team = await db.query.teams.findFirst({
            where: (teams) => eq(teams.invitationCode, invitationCode),
          })

          if (!team) throw HttpError.NotFound('Team not found')

          // Update current user's teamId
          const updatedUser = await db
            .update(users)
            .set({ teamId: team.id })
            .where(eq(users.email, currentUser.email))
            .returning()

          return updatedUser
        },
        {
          body: t.Object({
            invitationCode: t.String(),
            session: userSessionSchema,
          }),
        }
      )
      .post(
        '/my-team',
        async ({ body: { session }, db, HttpError }) => {
          const currentUser = await getCurrentUser(session as Session, db, HttpError)

          if (!currentUser) throw HttpError.Unauthorized('Could not find current user')

          if (!currentUser.teamId) throw HttpError.NotFound('User does not have a team')

          const team = await db.query.teams.findFirst({
            where: (teams) => eq(teams.id, currentUser.teamId!),
            with: {
              members: {
                columns: {
                  id: true,
                  name: true,
                  image: true,
                },
              },
              creator: {
                columns: {
                  id: true,
                  name: true,
                  image: true,
                },
              },
            },
          })

          if (!team) throw HttpError.NotFound('Team not found')

          const filteredMembers = team.members
            .filter((member) => member.id !== team.creator.id)
            .map((member) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { id, ...rest } = member

              return rest
            })

          return {
            ...team,
            members: filteredMembers,
          }
        },
        {
          body: t.Object({
            session: userSessionSchema,
          }),
        }
      )
  )
