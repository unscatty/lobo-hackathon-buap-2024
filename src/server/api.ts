import { edenTreaty } from '@elysiajs/eden'
import type { ServerApp } from './app'

export const { api } = edenTreaty<ServerApp>(import.meta.env.PUBLIC_API_ENDPOINT)
