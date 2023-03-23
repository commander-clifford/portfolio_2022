import { createClient } from 'contentful';
import Band from '../components/band/band';
import Cover from '../components/cover/cover';
import Card from '../components/card/card';

import CONFIG from './config';

const client = createClient({
  space: CONFIG.space, // This is the space ID. A space is like a project folder in Contentful terms
  accessToken: CONFIG.accessToken // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
});

export function fetchContentfulEntries(content_type, order_by, limit) {
  const entries = client.getEntries({
    content_type: content_type,
    order: order_by,
    limit: limit ? limit : 9,
    include: 2
  });
  return entries;
}

export function fetchContentfulAsset(id) {
  const asset = client.getAsset(id);
  return asset;
}

export const getContentfulComponents = (pageData) => {
  return pageData.fields?.sections.map((section, i) => {

    const componentType = section?.sys?.contentType?.sys?.id;

    if (componentType === "cover") {

      // COVER COMPONENT
      return (
        <section className='container'>
          <Cover key={i} data={section} />
        </section>
      );

    } else if (componentType === "band") {

      // BAND COMPONENT 
      return (
        <section className='container'>
          {section?.fields?.gridColumns}
          <Band key={i}>
            {section?.fields?.sections.map((subSection, j) => (
              <Card key={j} data={subSection.fields} />
            ))}
          </Band>
        </section>
      );

    } else {

      // ERROR - NO COMPONENT MATCH
      return (
        <p>{componentType}</p>
      );

    }
  });
};
