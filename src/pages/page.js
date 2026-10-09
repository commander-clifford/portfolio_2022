import React, { useEffect, useState } from 'react';
import { fetchContentfulEntries } from '../services/contentfulAPI';
import { buildComponents } from '../services/buildComponents';
// import './page.scss';

const Page = ({ slug }) => {
  const [pageData, setPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageDataResponse = await fetchContentfulEntries('page');
        const specificPageDataResponse = pageDataResponse.items.find(obj => obj.fields.slug === slug);
        setPageData(specificPageDataResponse);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const components = buildComponents(pageData);

  return (
    <article className={`page-${slug}`} data-transition-ready={isLoading ? 'false' : 'true'}>
      {components}
    </article>
  );
};

export default Page;
