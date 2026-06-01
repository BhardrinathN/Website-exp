export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 6,
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., Package, Warehouse, Truck, Shield)',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      description: 'Brief description for card display (max 120 chars)',
      validation: (Rule) => Rule.max(200),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'shortDescription',
    },
  },
};
