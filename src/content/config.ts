import { speakerCollectionSchema } from '@/schemas'
import { defineCollection } from 'astro:content'

const speakersCollection = defineCollection({
  type: 'data',
  schema: speakerCollectionSchema,
})

export const collections = {
  speakers: speakersCollection,
}
