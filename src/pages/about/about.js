import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { fetchContentfulEntries, fetchContentfulAsset } from '../../contentfulAPI';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const About = (props) => {

  const [aboutData, setAboutData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const fetchData = async () => {
      try {

        const aboutDataResponse = await fetchContentfulEntries('aboutPage');
        setAboutData(aboutDataResponse.items);

        setIsLoaded(true);

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);

    useEffect(() => {
    if (isLoaded) {
      console.log("AboutPage", aboutData);
    }
  }, [isLoaded]);

  return (
    <article className="about container container-sm">

      <section className="art__stagger-in art__stagger-out">
        <h1 className="w-border ">About Me</h1>
      </section>

      {aboutData.map((item, i) => 
        <section className="art__stagger-in art__stagger-out" key={i}>{documentToReactComponents(item?.fields?.description)}</section>
      )}

    </article>
  );
}

export default About;
