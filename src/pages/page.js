import React, { useEffect, useState } from 'react';
import { fetchContentfulEntries, buildContentfulComponents } from '../services/contentfulAPI';
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

  const components = buildContentfulComponents(pageData);

  return (
    <article className={`page-${slug}`}>
      {components}
    </article>
  );
};

export default Page;