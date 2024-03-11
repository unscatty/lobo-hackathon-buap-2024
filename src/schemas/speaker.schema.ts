import { z, type ImageFunction } from 'astro:content'

const socialSchema = z.object({
  url: z.string(),
  name: z.string().optional(),
  icon: z.string().optional(),
  alias: z.string().optional(),
})

export type SpeakerSocial = z.infer<typeof socialSchema>

const spakerUnrevealedSchema = z.object({
  isRevealed: z.literal(false),
})

const speakerCollectionInfoSchema = (image: ImageFunction) =>
  z.object({
    name: z.string(),
    occupation: z.string(),
    alias: z.string().optional(),
    description: z.string(),
    image: image(),
    socials: z.array(socialSchema).optional(),
  })

const speakerCollectionRevealedSchema = (image: ImageFunction) =>
  z.object({
    isRevealed: z.literal(true),
    info: speakerCollectionInfoSchema(image),
  })

const extraInfoSchema = z.object({
  revealDate: z.date().transform((str) => new Date(str)),
})

export const speakerCollectionSchema = ({ image }: { image: ImageFunction }) =>
  z.discriminatedUnion('isRevealed', [
    spakerUnrevealedSchema.merge(extraInfoSchema),
    speakerCollectionRevealedSchema(image).merge(extraInfoSchema),
  ])

export type SpeakerCollectionInfo = z.infer<ReturnType<typeof speakerCollectionInfoSchema>>
export type SpeakerCollection = z.infer<ReturnType<typeof speakerCollectionSchema>>

// Types with imageUrl
const speakerImageUrlSchema = z.object({
  imageUrl: z.string(),
})

const speakerInfoSchema = (image: ImageFunction) =>
  speakerCollectionInfoSchema(image).merge(speakerImageUrlSchema)

const speakerRevealedSchema = (image: ImageFunction) =>
  speakerCollectionRevealedSchema(image)
    .omit({ info: true })
    .merge(z.object({ info: speakerInfoSchema(image) }))

export const speakerSchema = ({ image }: { image: ImageFunction }) =>
  z.discriminatedUnion('isRevealed', [
    spakerUnrevealedSchema.merge(extraInfoSchema),
    speakerRevealedSchema(image).merge(extraInfoSchema),
  ])

export type SpeakerInfo = z.infer<ReturnType<typeof speakerInfoSchema>>
export type Speaker = z.infer<ReturnType<typeof speakerSchema>>
