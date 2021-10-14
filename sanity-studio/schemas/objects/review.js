const review = {
  name: 'review',
  title: 'Review',
  type: 'object',
  fields: [
    {
      title: 'Customer Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Customer Review',
      name: 'review',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default review;
