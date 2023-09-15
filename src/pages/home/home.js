import React, { useEffect, useState } from 'react';
import { fetchContentfulEntries } from '../../services/contentfulAPI';
import { buildComponents } from '../../services/buildComponents';
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

  const components = buildComponents(pageData);

  return (
    <article className='home'>

      {components}
      
    </article>
  );
}

export default Home;