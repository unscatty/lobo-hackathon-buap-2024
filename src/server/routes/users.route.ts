import { Elysia, t } from 'elysia'
import { httpErrorDecorator } from 'elysia-http-error'
import dbDecorator from '../decorators/db.dec'
import { userSessionSchema } from '../models/session.model'

export const userRoutes = new Elysia()
  .use(dbDecorator)
  .use(httpErrorDecorator)
  .group('/users', (app) =>
    app.post(
      '/me',
      async ({ body: { session }, db, HttpError }) => {
        const { email } = session.user

        if (!email) throw HttpError.Unauthorized('No email found in session')

        const me = await db.query.users.findFirst({
          where(users, { eq }) {
            return eq(users.email, email)
          },
        })

        return { me }
      },
      {
        body: t.Object({
          session: userSessionSchema,
        }),
      }
    )
  )
