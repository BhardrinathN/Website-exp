export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Location Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Full Address',
      type: 'text',
      rows: 3,
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Factory', value: 'factory' },
          { title: 'Office', value: 'office' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
    },
  },
};
