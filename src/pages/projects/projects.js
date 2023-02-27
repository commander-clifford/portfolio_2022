import React, { useState, useEffect } from 'react';
import { fetchContentfulEntries } from '../../contentfulAPI';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import FormatDate from '../../components/date';
const Projects = () => {

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const positionsResponse = await fetchContentfulEntries('project', 'fields.originalCreationDate');
        setProjectsData(positionsResponse.items);

      } catch (error) {
        console.error(error);
      } finally {

      }
    };
  
    fetchData();
  }, []);

  return (
    <article className="resume projects container container-sm">

      <section className="art__stagger-in art__stagger-out">
        <h1 className="w-border ">Projects</h1>
      </section>

      <section>
        {projectsData.map((data, i) => {
          return (
            <div key={i} className="resume-item art__stagger-in art__stagger-out">
              
              <div className="resume-item__headline-block">
                <h2 className="headline">{data?.fields?.title}</h2>
                <FormatDate date={data?.fields?.originalCreationDate}/>
              </div>
              
              <div className="d-flex align-items-center">
                <h5 className="headline">{data?.fields?.subtitle}</h5>
              </div>
              
              <div className="resume-item__description p-indent">
                {documentToReactComponents(data?.fields?.briefDescription)}
                {(data?.fields?.projectTags)}
              </div>

              {data?.fields?.liveUrl ?
                <a href={data.fields.liveUrl} target="_blank">Visit Demo</a> :
                null
              }
            
            </div>
          );
        }).reverse()}
      </section>

    </article>
  );

}

export default Projects;
