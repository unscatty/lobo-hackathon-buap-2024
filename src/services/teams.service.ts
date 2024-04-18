import type { TeamInsertZod } from '@/schemas/forms/team.schema'
import { api } from '@server/api'
import type { UserSession } from '@server/models/session.model'

const teamsApi = api.teams

export const create = async (session: UserSession, team: TeamInsertZod) => {
  return teamsApi.create.post({
    session,
    team,
  })
}

export const join = async (session: UserSession, invitationCode: string) => {
  return teamsApi.join.post({
    invitationCode,
    session,
  })
}

export const myTeam = async (session: UserSession) => {
  return teamsApi['my-team'].post({
    session,
  })
}
