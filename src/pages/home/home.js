import React, { useEffect, useState } from 'react';
import { getContentfulComponents } from '../../services/getContentfulComponents';
import './home.scss';

const Home = ({ homePageData }) => {
  const [components, setComponents] = useState(null);

  useEffect(() => {
    if (homePageData) {
      const pageComponents = getContentfulComponents(homePageData);
      setComponents(pageComponents);
    }
  }, [homePageData]);

  return (
    <article className='home container'>
      {components}
    </article>
  );
}

export default Home;
