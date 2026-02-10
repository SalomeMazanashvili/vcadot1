export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

export interface Vacancy {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  category: string
  location: string
  type: string
  salary?: string
  description: string
  fullDescription?: any[]
  requirements?: string[]
  responsibilities?: string[]
  benefits?: string[]
  publishedAt: string
  active: boolean
}

export interface News {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  category: string
  coverImage?: SanityImage
  content?: any[]
  author?: string
  publishedAt: string
  featured: boolean
}
