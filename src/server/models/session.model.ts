import { Elysia, t, type Static } from 'elysia'

export const userSessionSchema = t.Object({
  user: t.Object({
    id: t.Optional(t.Nullable(t.String())),
    name: t.Optional(t.Nullable(t.String())),
    email: t.Optional(t.Nullable(t.String())),
    image: t.Optional(t.Nullable(t.String())),
  }),
  expires: t.String(),
})

export type UserSession = Static<typeof userSessionSchema>

export const UserSessionModel = new Elysia({ name: 'Model.Session' }).model({
  'auth.session': userSessionSchema,
})
