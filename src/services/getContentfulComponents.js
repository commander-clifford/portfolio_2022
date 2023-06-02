// getContentfulComponents.js
import Band from '../components/band/band';
import Cover from '../components/cover/cover';
import Button from '../components/button/button';
import Spotlight from '../components/spotlight/spotlight';
import Card from '../components/card/card';
import Poster from '../components/poster/poster';
import Text from '../components/text/text';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const componentMapper = {
  "cover": Cover,
  "band": Band,
  "button": Button,
  "spotlight": Spotlight,
  "card": Card,
  "poster": Poster,
  "text": ({ children, ...props }) => <Text {...props}>{documentToReactComponents(children)}</Text>,
};

export const getContentfulComponents = (pageData) => {
  return pageData.fields?.sections.map((section, i) => {
    const Component = componentMapper[section?.sys?.contentType?.sys?.id];
    if (Component) {
      return (
        <section className='container'>
          <Component key={i} data={section.fields}>
            {section?.fields?.sections.map((item, j) => {
              const InnerComponent = componentMapper[item?.sys?.contentType?.sys?.id];
              return InnerComponent ? <InnerComponent key={j} data={item.fields} /> : null;
            })}
          </Component>
        </section>
      );
    } else {
      return (
        <p>{section?.sys?.contentType?.sys?.id} did not load</p>
      );
    }
  });
};
