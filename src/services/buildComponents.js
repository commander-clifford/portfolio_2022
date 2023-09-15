import React from 'react';
import Band from '../components/band/band';
import Cover from '../components/cover/cover';
import Button from '../components/button/button';
import Spotlight from '../components/spotlight/spotlight';
import Card from '../components/card/card';
import Poster from '../components/poster/poster';
import Text from '../components/text/text';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const buildComponents = (pageData) => {

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
                  <Text key={j} data={item?.fields}>
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