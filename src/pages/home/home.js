import React, { useEffect, useState } from 'react';
import { fetchContentfulEntries, getContentfulComponents } from '../../services/contentfulAPI';
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

  const components = getContentfulComponents(pageData);

  return (
    <article className='home'>
      {components}
    </article>
  );
}

export default Home;