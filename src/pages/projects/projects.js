import React, { useState, useEffect } from 'react';
import { fetchContentfulEntries } from '../../services/contentfulAPI';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import FormatDate from '../../components/date';
import { Link } from 'react-router-dom';
import './projects.scss';

const Projects = () => {

  const [projectsData, setProjectsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {

        const positionsResponse = await fetchContentfulEntries('project', 'fields.originalCreationDate');
        setProjectsData(positionsResponse.items);

        setIsLoaded(true);

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
    
    document.documentElement.classList.add('projects');

    return function cleanup() {
      document.documentElement.classList.remove('projects');
      setProjectsData([]);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {

    }
  }, [isLoaded]);

  return (
    <article className="projects">

      <div id='projects-container' className='projects-container container'>

        {projectsData.map((data, i) => {
          // TODO data. ...build data structure for spotlight
          return (
            // TODO call spotlight component here
            <section key={i} id={data?.fields?.slug} className="project-item panel spotlight">

              <div className="project-item__display">
                <img alt="placeholder" src={data?.fields?.heroImage?.fields?.file?.url} />
              </div>

              <div className='project-item__details'>

                <div className="project-item__headline-block">
                  <div>
                    <h2 className="headline">{data?.fields?.title}</h2>
                    <div className='d-flex flex-row'><FormatDate date={data?.fields?.originalCreationDate}/></div>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <h5 className="headline">{data?.fields?.subtitle}</h5>
                </div>
                
                <div className="project-item__description p-indent">
                  {documentToReactComponents(data?.fields?.briefDescription)}  
                  {data?.fields?.projectTags}
                </div>
                
                <Link to={"/projects/" + data?.fields?.slug}>See More</Link>

              </div>
              
            </section>
          );
        }).reverse()}

      </div>
    </article>
  );

}

export default Projects;
