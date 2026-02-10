import { defineType, defineField } from 'sanity'
import { Briefcase } from 'lucide-react'

export default defineType({
  name: 'vacancy',
  title: 'ვაკანსიები (Vacancies)',
  type: 'document',
  icon: Briefcase,
  fields: [
    defineField({
      name: 'title',
      title: 'სათაური (Title)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'კატეგორია (Category)',
      type: 'string',
      options: {
        list: [
          { title: 'ძიძა (Nanny)', value: 'nanny' },
          { title: 'მომვლელი (Caregiver)', value: 'caregiver' },
          { title: 'დალაგება (Cleaning)', value: 'cleaning' },
          { title: 'დროებითი (Temporary)', value: 'temporary' },
          { title: 'CDL მძღოლი (CDL Driver)', value: 'cdl-driver' },
          { title: 'დისპეჩერი (Dispatcher)', value: 'dispatcher' },
          { title: 'ავტორემონტი (Auto)', value: 'auto' },
          { title: 'დაცვა (Security)', value: 'security' },
          { title: 'მშენებლობა (Construction)', value: 'construction' },
          { title: 'განათლება (Education)', value: 'education' },
          { title: 'ქარხნები (Factory)', value: 'factory' },
          { title: 'ფინანსები (Finance)', value: 'finance' },
          { title: 'სტილისტი (Beauty)', value: 'beauty' },
          { title: 'ოფისი (Office)', value: 'office' },
          { title: 'მიმტანი (Waiter)', value: 'waiter' },
          { title: 'სხვა (Other)', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'ლოკაცია (Location)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'ტიპი (Type)',
      type: 'string',
      options: {
        list: [
          { title: 'სრული განაკვეთი (Full Time)', value: 'სრული განაკვეთი' },
          { title: 'ნახევარი განაკვეთი (Part Time)', value: 'ნახევარი განაკვეთი' },
          { title: 'დროებითი (Temporary)', value: 'დროებითი' },
          { title: 'კონტრაქტი (Contract)', value: 'კონტრაქტი' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'salary',
      title: 'ხელფასი (Salary)',
      type: 'string',
      description: 'მაგ: $20-25/საათი ან $1,200-1,800/კვირა',
    }),
    defineField({
      name: 'description',
      title: 'აღწერა (Short Description)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'fullDescription',
      title: 'სრული აღწერა (Full Description)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'დეტალური აღწერა ვაკანსიის გვერდისთვის',
    }),
    defineField({
      name: 'requirements',
      title: 'მოთხოვნები (Requirements)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'ჩამოთვალეთ მოთხოვნები',
    }),
    defineField({
      name: 'responsibilities',
      title: 'პასუხისმგებლობები (Responsibilities)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'ჩამოთვალეთ პასუხისმგებლობები',
    }),
    defineField({
      name: 'benefits',
      title: 'უპირატესობები (Benefits)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'ჩამოთვალეთ უპირატესობები',
    }),
    defineField({
      name: 'publishedAt',
      title: 'გამოქვეყნების თარიღი (Published Date)',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'active',
      title: 'აქტიური (Active)',
      type: 'boolean',
      initialValue: true,
      description: 'არის თუ არა ეს ვაკანსია აქტიური',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      location: 'location',
      active: 'active',
    },
    prepare({ title, category, location, active }) {
      return {
        title: title,
        subtitle: `${category} - ${location}${active ? ' ✓' : ' ✗'}`,
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
