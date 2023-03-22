import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/wrapper';
import Cover from '../../components/cover/cover';
import Card from '../../components/card/card';
import { fetchContentfulEntries } from '../../services/contentfulAPI';
import './home.scss';

const Home = (props) => {

  const [pageData, setPageData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {

        const pageDataResponse = await fetchContentfulEntries('page');
        const homePageDataResponse = pageDataResponse.items.find(obj => obj.fields.slug === 'home');
        setPageData(homePageDataResponse);
      
      } catch (error) {
        console.error(error);
      } finally {

      }
    };

    fetchData();
    
  }, []);

  const components = getComponents(pageData);

  return (
    <article className='home'>
      {components}
    </article>
  );
}

export default Home;

export const getComponents = (pageData) => {
  return pageData.fields?.sections.map((section, i) => {

    const componentType = section?.sys?.contentType?.sys?.id;

    if (componentType === "cover") {
      return <Cover key={i} data={section} />;
    } else if (componentType === "wrapper") {
      return (
        <Wrapper key={i}>
          {section?.fields?.sections.map((subSection, j) => (
            <Card key={j} data={subSection.fields} />
          ))}
        </Wrapper>
      );
    } else {
      return null;
    }
  });
};
