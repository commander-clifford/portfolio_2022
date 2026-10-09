import React, { useEffect, useState } from 'react';
import { fetchContentfulEntries } from '../../services/contentfulAPI';
import { buildComponents } from '../../services/buildComponents';

const DesignSystem = (props) => {

  const [pageData, setPageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {

        const contentfulPageEntries = await fetchContentfulEntries('page');
        const pageDataResponse = contentfulPageEntries.items.find(obj => obj.fields.slug === 'design-system');
        setPageData(pageDataResponse);
        setLoading(false);

      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      } finally {
        // it's about time
      }
    };

    fetchData();
    
  }, []);

  const components = pageData ? buildComponents(pageData) : null;

  if (loading) return <article className='design-system' data-transition-ready="false">Loading...</article>;
  if (error) return <article className='design-system' data-transition-ready="true">Error loading design system.</article>;

  return (<article className='design-system' data-transition-ready="true">{components}</article>);
  
}

export default DesignSystem;
