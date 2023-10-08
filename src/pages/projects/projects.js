import React, { useState, useEffect } from 'react';
import { fetchContentfulEntries } from '../../services/contentfulAPI';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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

      {projectsData.map((data, i) => {
        // TODO data. ...build data structure for spotlight
        return (
          // TODO call spotlight component here
          <section key={i} id={data?.fields?.slug} className="container project-item panel spotlight">

            <div className="project-item__display">
              <Link tabindex="-1" to={"/projects/" + data?.fields?.slug}>
                <img alt="placeholder" src={data?.fields?.heroImage?.fields?.file?.url} />
              </Link>
            </div>

            <div className='project-item__details'>

              <div className="project-item__copy">
                  <h2 className="headline">{data?.fields?.title}</h2>
                  <h5 className="subheadline">{data?.fields?.subtitle}</h5>
                  {documentToReactComponents(data?.fields?.briefDescription)}  
                  {data?.fields?.projectTags}
              </div>
              
              <Link className="btn btn-secondary btn-md" to={"/projects/" + data?.fields?.slug}>See More</Link>

            </div>
            
          </section>
        );
      }).reverse()}

    </article>
  );

}

export default Projects;