import { VscHome } from 'react-icons/vsc';

const homepage = {
  title: 'Homepage',
  name: 'homepage',
  type: 'document',
  icon: VscHome,
  __experimental_actions: ['create', 'update', 'publish'],
  fields: [
    {
      title: 'Hero Title',
      name: 'title',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'New Ins',
      name: 'newIns',
      description: 'Collection of latest products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'products' }],
        },
      ],
      validation: (Rule) => Rule.min(3),
    },
    {
      title: 'Brands',
      name: 'brands',
      description: 'Collection of product brands',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'brands' }],
        },
      ],
      validation: (Rule) => Rule.min(3),
    },
    {
      title: 'Customer Reviews',
      name: 'reviews',
      type: 'array',
      of: [
        {
          type: 'review',
        },
      ],
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'imageGallery',
    },
  ],

  preview: {
    select: {},
    prepare: () => ({
      title: 'Homepage',
    }),
  },
};

export default homepage;
