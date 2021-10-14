import { VscTag } from 'react-icons/vsc';

const brands = {
  title: 'Brands',
  name: 'brands',
  type: 'document',
  icon: VscTag,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

export default brands;
