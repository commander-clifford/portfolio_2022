import React, { useState, useEffect } from 'react';
import { fetchContentfulEntries } from '../../services/contentfulAPI';
import { buildComponents } from '../../services/buildComponents';

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

  const components = buildComponents(pageData);

  return (
    <article className="about">
      {components}
    </article>
  );
}

export default About;