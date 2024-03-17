import { z } from 'zod'

export const heardFromOptions = [
  'FROM_A_FRIEND',
  'INSTAGRAM',
  'FACEBOOK',
  'TIKTOK',
  'CAMPUS_TALK',
  'OTHER',
] as const

export const heardFromValues: Record<(typeof heardFromOptions)[number], string> = {
  CAMPUS_TALK: 'Charla en el auditorio',
  FACEBOOK: 'Facebook',
  FROM_A_FRIEND: 'Un amigo me dijo',
  INSTAGRAM: 'Instagram',
  OTHER: 'Otro',
  TIKTOK: 'TikTok',
}

const heardFromZodEnum = z.enum(heardFromOptions)

export const commonDataSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email().min(1).max(50),
  majorIn: z.string().min(1).max(120),
  semester: z.number().int().min(1).max(10),
  whatToExpect: z.string().min(10).max(500),
  firstTimer: z.boolean().default(true),
  heardFrom: heardFromZodEnum,
})

const fromBuapSchema = z.object({
  fromBuap: z.literal(true),
})

const notFromBuapSchema = z.object({
  fromBuap: z.literal(false),
  schoolOfOrigin: z.string().min(2).max(100),
})

export const preRegisterSchema = z.discriminatedUnion('fromBuap', [
  commonDataSchema.merge(fromBuapSchema),
  commonDataSchema.merge(notFromBuapSchema),
])

export type PreregisterData = z.infer<typeof preRegisterSchema>