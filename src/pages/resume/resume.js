import React, { useState, useEffect } from 'react';
import './resume.scss';
import { fetchContentfulEntries, fetchContentfulAsset } from '../../services/contentfulAPI';
import ResumeItem from '../../components/resume-item';

const Resume = (props) => {

  const [resumeData, setResumeData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [resumePdfData, setResumePdfData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const formatDate = (dateString) => {
    if(!dateString){ return 'PRESENT' }
    const date = new Date(dateString);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[monthIndex];
    return `${monthName} ${year}`;
  };
  
  return (
    <article className="resume container container-sm">

      <section className="art__stagger-in art__stagger-out d-flex align-items-center justify-content-center">
        <a className='btn' href={resumePdfData?.fields?.file?.url} target="_blank">
          Download the PDF  
        </a>
      </section>

      <section className="art__stagger-in art__stagger-out">
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
