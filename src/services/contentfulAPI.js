import { createClient } from 'contentful';
import Band from '../components/band/band';
import Cover from '../components/cover/cover';
import Button from '../components/button/button';
import Spotlight from '../components/spotlight/spotlight';
import Card from '../components/card/card';
import Poster from '../components/poster/poster';
import Text from '../components/text/text';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { CONFIG } from './config.js';


const client = createClient({
  space: CONFIG.space, // This is the space ID. A space is like a project folder in Contentful terms
  accessToken: CONFIG.accessToken // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
});

export function fetchContentfulEntries(content_type, order_by, limit) {
  const entries = client.getEntries({
    content_type: content_type,
    order: order_by,
    limit: limit ? limit : 99,
    include: 3
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

    /*
      Define Page Level Components
      Cover (Stand Alone Component)
      Band (Wrapper Component)
    */

    // COVER COMPONENT
    if (componentType === "cover") {
      return (
        <section className='container'>
          <Cover key={i} data={section} />
        </section>
      );
    } 
    
    // BAND COMPONENT 
    else if (componentType === "band") {
      return (
        <section className='container'>

          <Band key={i} data={section?.fields}>
            {section?.fields?.sections.map((item, j) => {

              const componentType = item?.sys?.contentType?.sys?.id;

              if (componentType === "text") {
                return (
                  <Text key={j}>
                    {documentToReactComponents(item?.fields?.copy)}
                  </Text>
                );
              } else 
              
              if (componentType === "card") {
                return (
                  <Card key={j} data={item?.fields} />
                );
              } else
              
              if (componentType === "poster") {
                return (
                  <Poster key={j} data={item?.fields} />
                );
              } else
              
              if (componentType === "button") {
                return (
                  <Button key={j} data={item?.fields} />
                );
              } else
              
              if (componentType === "spotlight") {
                return (
                  <Spotlight key={j} data={item?.fields} />
                );
              } else
              
              {
                return null; // or render some other component for unknown component types
              }
              
            })}
          </Band>
        </section>
      );
      
    }
    
    // ERROR - NO COMPONENT MATCH
    else {
      return (
        <p>{componentType} did not load</p>
      );
    }
  });
};
