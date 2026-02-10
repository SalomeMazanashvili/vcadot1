import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Initialize Sanity client
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-02-11', // use current date (YYYY-MM-DD) to target the latest API version
})

// Set up the image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
