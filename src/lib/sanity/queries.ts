import { client } from './client'
import type { Vacancy, News } from './types'

// Vacancy Queries
export async function getAllVacancies(): Promise<Vacancy[]> {
  return client.fetch(
    `*[_type == "vacancy" && active == true] | order(publishedAt desc) {
      _id,
      _createdAt,
      _updatedAt,
      title,
      category,
      location,
      type,
      salary,
      description,
      fullDescription,
      requirements,
      responsibilities,
      benefits,
      publishedAt,
      active
    }`
  )
}

export async function getVacanciesByCategory(category: string): Promise<Vacancy[]> {
  return client.fetch(
    `*[_type == "vacancy" && active == true && category == $category] | order(publishedAt desc) {
      _id,
      _createdAt,
      _updatedAt,
      title,
      category,
      location,
      type,
      salary,
      description,
      fullDescription,
      requirements,
      responsibilities,
      benefits,
      publishedAt,
      active
    }`,
    { category }
  )
}

export async function getVacancyById(id: string): Promise<Vacancy | null> {
  return client.fetch(
    `*[_type == "vacancy" && _id == $id][0] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      category,
      location,
      type,
      salary,
      description,
      fullDescription,
      requirements,
      responsibilities,
      benefits,
      publishedAt,
      active
    }`,
    { id }
  )
}

// News Queries
export async function getAllNews(): Promise<News[]> {
  return client.fetch(
    `*[_type == "news"] | order(publishedAt desc) {
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      excerpt,
      category,
      coverImage,
      content,
      author,
      publishedAt,
      featured
    }`
  )
}

export async function getFeaturedNews(): Promise<News | null> {
  return client.fetch(
    `*[_type == "news" && featured == true] | order(publishedAt desc)[0] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      excerpt,
      category,
      coverImage,
      content,
      author,
      publishedAt,
      featured
    }`
  )
}

export async function getNewsById(id: string): Promise<News | null> {
  return client.fetch(
    `*[_type == "news" && _id == $id][0] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      excerpt,
      category,
      coverImage,
      content,
      author,
      publishedAt,
      featured
    }`,
    { id }
  )
}

export async function getNewsBySlug(slug: string): Promise<News | null> {
  return client.fetch(
    `*[_type == "news" && slug.current == $slug][0] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      excerpt,
      category,
      coverImage,
      content,
      author,
      publishedAt,
      featured
    }`,
    { slug }
  )
}
