import React, { useEffect, useState } from 'react';
import { fetchContentfulEntries, getContentfulComponents } from '../../services/contentfulAPI';
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

  const components = getContentfulComponents(pageData);

  return (
    <article className='home container'>

      {components}
      
    </article>
  );
}

export default Home;