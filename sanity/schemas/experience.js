export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'dateStart',
      title: 'DateStart',
      type: 'date',
    },
    {
      name: 'dateEnd',
      title: 'DateEnd',
      type: 'date',
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean',
    },

    {
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
    },

    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ]
};
