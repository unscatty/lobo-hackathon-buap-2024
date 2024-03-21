import { speakerCollectionSchema, sponsorCollectionSchema } from '@/schemas'
import { defineCollection } from 'astro:content'

const speakersCollection = defineCollection({
  type: 'data',
  schema: speakerCollectionSchema,
})

const sponsorsCollection = defineCollection({
  type: 'data',
  schema: sponsorCollectionSchema,
})

export const collections = {
  speakers: speakersCollection,
  sponsors: sponsorsCollection,
}
