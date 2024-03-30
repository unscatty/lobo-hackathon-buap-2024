import { z, type ImageFunction } from 'astro:content'

const socialSchema = z.object({
  url: z.string(),
  name: z.string().optional(),
  icon: z.string().optional(),
  alias: z.string().optional(),
})

export type SpeakerSocial = z.infer<typeof socialSchema>

export const speakerCollectionSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    name: z.string(),
    occupation: z.string(),
    alias: z.string().optional(),
    description: z.string(),
    image: image(),
    socials: z.array(socialSchema).optional(),
    revealDate: z.coerce.date().optional(),
    isShown: z.boolean().optional(),
    showCountdown: z.boolean().optional().default(true),
  })

export type SpeakerCollection = z.infer<ReturnType<typeof speakerCollectionSchema>>

// Types with imageUrl
const speakerImageUrlSchema = z.object({
  imageUrl: z.string(),
})

export const speakerSchema = ({ image }: { image: ImageFunction }) =>
  speakerCollectionSchema({ image }).merge(speakerImageUrlSchema)

export type Speaker = z.infer<ReturnType<typeof speakerSchema>>
