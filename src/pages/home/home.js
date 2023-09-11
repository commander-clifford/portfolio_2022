import React, { useEffect, useState } from 'react';
import { fetchContentfulEntries, buildContentfulComponents } from '../../services/contentfulAPI';
import './home.scss';

const Home = (props) => {

  const [pageData, setPageData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {

        const contentfulPageEntries = await fetchContentfulEntries('page');
        const pageDataResponse = contentfulPageEntries.items.find(obj => obj.fields.slug === 'home');
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
    <article className='home'>

      {components}
      
    </article>
  );
}

export default Home;