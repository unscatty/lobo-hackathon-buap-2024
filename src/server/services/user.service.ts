import type { Session } from '@auth/core/types'
import { HttpError } from 'elysia-http-error'
import type { Database } from '../db'
import type { User } from '../db/schema'
import Sqids from 'sqids'
import { numbersToUuid, uuidToNumbers } from '@/utils/uuid.util'

export type UserWithSqid = Omit<User, 'id'> & { sqid: string }
export type UserAndSqid = User & { sqid: string }

export const userSqids = new Sqids({
  alphabet: import.meta.env.SQIDS_ALPHABET,
})

export const USER_SQID_SALT = parseInt(import.meta.env.USER_SQID_SALT)

export const getUserSqid = (user: User): string => {
  return userSqids.encode([USER_SQID_SALT, ...uuidToNumbers(user.id)])
}

export const getUserIdFromSqid = (sqid: string): string => {
  const numbers = userSqids.decode(sqid)

  return numbersToUuid(numbers.slice(1))
}

export const isValidUserSqid = (sqid: string): boolean => {
  const numbers = userSqids.decode(sqid)

  const reencodedSqid = userSqids.encode([USER_SQID_SALT, ...numbers.slice(1)])

  return reencodedSqid === sqid
}

export const getCurrentUser = async (
  session: Session,
  db: Database,
  httpError?: typeof HttpError
): Promise<User | undefined> => {
  const { user } = session

  if (!user) {
    if (httpError) {
      throw httpError.Unauthorized('No user found in session')
    } else {
      return undefined
    }
  }

  const { email } = user

  if (!email) {
    if (httpError) {
      throw httpError.Unauthorized('No email found in session')
    } else {
      return undefined
    }
  }

  const currentUser = await db.query.users.findFirst({
    where(users, { eq }) {
      return eq(users.email, email)
    },
  })

  return currentUser
}

export const getCurrentUserWithSqid = async (
  session: Session,
  db: Database,
  httpError?: typeof HttpError
): Promise<UserWithSqid | undefined> => {
  const user = await getCurrentUser(session, db, httpError)

  if (!user) {
    return undefined
  }

  const userSqid = getUserSqid(user)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...rest } = user

  return { ...rest, sqid: userSqid }
}

export const getCurrentUserAndSqid = async (
  session: Session,
  db: Database,
  httpError?: typeof HttpError
): Promise<UserAndSqid | undefined> => {
  const user = await getCurrentUser(session, db, httpError)

  if (!user) {
    return undefined
  }

  const userSqid = getUserSqid(user)

  return { ...user, sqid: userSqid }
}
