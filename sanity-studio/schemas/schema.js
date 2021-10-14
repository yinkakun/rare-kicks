/* eslint-disable import/no-unresolved */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document types
import siteSettings from './documents/site-settings';
import homepage from './documents/home-page';
import products from './documents/products';
import brands from './documents/brands';

// object types
import blockContent from './objects/block-content';
import figure from './objects/figure';
import imageGallery from './objects/image-gallery';
import link from './objects/link';
import review from './objects/review';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    homepage,
    products,
    brands,
    siteSettings,

    blockContent,
    figure,
    imageGallery,
    review,
    link,
  ]),
});
