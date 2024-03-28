import { z, type ImageFunction } from 'astro:content'

export const sponsorCollectionSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    name: z.string(),
    description: z.string().optional(),
    image: image(),
    url: z.string(),
    tier: z.string().optional(),
  })

export const sponsorSchema = (image: ImageFunction) =>
  sponsorCollectionSchema({ image }).merge(z.object({ imageUrl: z.string() }))

export type SponsorCollection = z.infer<ReturnType<typeof sponsorCollectionSchema>>
export type Sponsor = z.infer<ReturnType<typeof sponsorSchema>>
