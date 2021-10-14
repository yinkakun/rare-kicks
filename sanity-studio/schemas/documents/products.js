import { VscArchive } from 'react-icons/vsc';

const product = {
  title: 'Products',
  name: 'products',
  type: 'document',
  icon: VscArchive,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'The name of this product',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'The slug for the dedicated product page',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      description: 'The price of this product in USD',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      title: 'Product images',
      name: 'productImages',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
      description: 'The manufacturer photos for this product.',
      options: {
        crop: true,
        hotspot: true,
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The description for this product',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Brand',
      name: 'brand',
      description: 'Brand of this product',
      type: 'reference',
      to: { type: 'brands' },
    },
  ],
};

export default product;
