import React, { useEffect, useState } from 'react';
import { fetchContentfulEntries, getContentfulComponents } from '../services/contentfulAPI';
// import './page.scss';

const Page = ({ slug }) => {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageDataResponse = await fetchContentfulEntries('page');
        const specificPageDataResponse = pageDataResponse.items.find(obj => obj.fields.slug === slug);
        setPageData(specificPageDataResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [slug]);

  const components = getContentfulComponents(pageData);

  return (
    <article className={`page-${slug}`}>
      {components}
    </article>
  );
};

export default Page;