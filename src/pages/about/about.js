import React, { useState, useEffect } from 'react';
import { fetchContentfulEntries, buildContentfulComponents } from '../../services/contentfulAPI';


const About = (props) => {

  const [pageData, setPageData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {

        const contentfulPageEntries = await fetchContentfulEntries('page');
        const pageDataResponse = contentfulPageEntries.items.find(obj => obj.fields.slug === 'about');
        setPageData(pageDataResponse);

      } catch (error) {
        console.error(error);
      } finally {

      }
    };
  
    fetchData();

  }, []);

  const components = buildContentfulComponents(pageData);

  return (
    <article className="about">
      {components}
    </article>
  );
}

export default About;