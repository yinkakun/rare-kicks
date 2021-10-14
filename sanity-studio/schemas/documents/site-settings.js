import { VscSettingsGear } from 'react-icons/vsc';

const siteSettings = {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'document',
  icon: VscSettingsGear,
  __experimental_actions: ['create', 'update', 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      rows: '3',
      title: 'Description',
      description: 'Describe your website for search engines and social media.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description:
        'Add keywords for search engines that describes your website.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      description:
        'Your website logo, whether this is displayed can be controlled by feature flags in gatsby-theme-catalyst-core.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Default Social Sharing Image',
      name: 'seoImage',
      type: 'image',
      options: {
        crop: true,
        hotspot: true,
      },
      description:
        'The default sharing image for places like Twitter and Facebook when sharing a link to your website.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'siteUrl',
      type: 'url',
      title: 'Site URL',
      description: 'The root url of your website, e.g. https://www.google.com',
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default siteSettings;
