import React, { useState, useEffect } from 'react';
import './resume.scss';
import { fetchContentfulEntries, fetchContentfulAsset } from '../../services/contentfulAPI';
import ResumeItem from './resume-item';

const Resume = (props) => {

  const [resumeData, setResumeData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [resumePdfData, setResumePdfData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const buttonData = {
    classNames: 'btn btn-lg',  // replace with your custom class name
    link: resumePdfData?.fields?.file?.url,  // replace with your custom link
    copy: 'Download',  // replace with your button text
  };

  useEffect(() => {
    const fetchData = async () => {
      try {

        const positionsResponse = await fetchContentfulEntries('positions', 'fields.startDate');
        setResumeData(positionsResponse.items);
  
        const educationResponse = await fetchContentfulEntries('education', 'fields.startDate');
        setEducationData(educationResponse.items);
  
        const assetResponse = await fetchContentfulAsset('NC86MeyVtmEq2sQkgQTlc');
        setResumePdfData(assetResponse);

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

    }
  }, [isLoaded]);
  
  return (
    <article className="resume container">

      <section className="container d-flex align-items-end justify-content-end">
        <a className='btn btn-secondary btn-md' href={resumePdfData?.fields?.file?.url} target="_blank" rel="noreferrer" role="button">
          Download resume&nbsp;<span className="material-symbols-outlined">download</span>
        </a>
      </section>

      <section className="">
        <h1 className='w-border'>Professional Experience</h1>
      </section>

      {resumeData.map((item,i) =>
        <ResumeItem key={i} item={item.fields} />
      ).reverse()}

      <section className="">
        <h1 className='w-border'>Education</h1>
      </section>

      {educationData.map((item,i) =>
        <ResumeItem key={i} item={item.fields} />
      )}

    </article>
  );

};

export default Resume;
