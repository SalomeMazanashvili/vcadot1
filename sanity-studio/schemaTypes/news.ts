import { defineType, defineField } from 'sanity'
import { Newspaper } from 'lucide-react'

export default defineType({
  name: 'news',
  title: 'ახალი ამბები (News)',
  type: 'document',
  icon: Newspaper,
  fields: [
    defineField({
      name: 'title',
      title: 'სათაური (Title)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'მოკლე აღწერა (Excerpt)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'category',
      title: 'კატეგორია (Category)',
      type: 'string',
      options: {
        list: [
          { title: 'იმიგრაცია (Immigration)', value: 'იმიგრაცია' },
          { title: 'საზოგადოება (Community)', value: 'საზოგადოება' },
          { title: 'ფინანსები (Finance)', value: 'ფინანსები' },
          { title: 'სიახლე (News)', value: 'სიახლე' },
          { title: 'განათლება (Education)', value: 'განათლება' },
          { title: 'სამუშაო (Jobs)', value: 'სამუშაო' },
          { title: 'სხვა (Other)', value: 'სხვა' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'მთავარი სურათი (Cover Image)',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'შინაარსი (Content)',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'author',
      title: 'ავტორი (Author)',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'გამოქვეყნების თარიღი (Published Date)',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'featured',
      title: 'გამორჩეული (Featured)',
      type: 'boolean',
      initialValue: false,
      description: 'გამოჩნდეს თუ არა მთავარ გვერდზე',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'coverImage',
      featured: 'featured',
    },
    prepare({ title, category, media, featured }) {
      return {
        title: title,
        subtitle: `${category}${featured ? ' ⭐ Featured' : ''}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'ახალი პირველი (Newest First)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'ძველი პირველი (Oldest First)',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
  ],
})
