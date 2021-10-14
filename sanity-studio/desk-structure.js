import S from '@sanity/desk-tool/structure-builder';
import { VscSettingsGear, VscHome } from 'react-icons/vsc';

const hiddenDocTypes = (listItem) =>
  !['siteSettings', 'homepage'].includes(listItem.getId());

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .child(S.document().schemaType('homepage').documentId('homepage'))
        .icon(VscHome),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
        .title('Site Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings'),
        )
        .icon(VscSettingsGear),
    ]);
