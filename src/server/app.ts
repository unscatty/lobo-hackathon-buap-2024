import { Elysia } from 'elysia'
import { httpError } from 'elysia-http-error'
import { teamsRoutes, userRoutes } from './routes'

export const app = new Elysia({ prefix: '/api' })
  .use(httpError())
  .onError(({ error, code, set }) => {
    switch (code) {
      case 'VALIDATION':
        // TODO: format from validation errors
        return {
          status: error.status,
          formErrors: error.all,
        }

      case 'ELYSIA_HTTP_ERROR':
        set.status = error.statusCode

        return error

      default:
        return error
    }
  })
  .use(userRoutes)
  .use(teamsRoutes)
  .compile()

export type ServerApp = typeof app
