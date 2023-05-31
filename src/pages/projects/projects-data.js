import React, { useState, useEffect } from 'react';
import { fetchContentfulEntries } from '../../services/contentfulAPI';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import FormatDate from '../../components/date';
import { Link } from 'react-router-dom';
import './projects.scss';

const ProjectsData = () => {

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
    
    document.documentElement.classList.add('projects');

    return function cleanup() {
      document.documentElement.classList.remove('projects');
      setProjectsData([]);
    };
  }, []);

  // const history = useHistory();
  // const HandleLinkClick = (event, path, target) => {
  //   event.preventDefault();
  //   if(target === "_blank" || target === "blank"){
  //     window.open(path, '_blank');
  //   } else {
  //     history.push(path);
  //   }
  // };

  return (
    <article className="projects-data">

      <ul className='container'>

        {projectsData.map((data, i) => {
          return (
            <li key={i} id={data?.fields?.slug} className="project-data-item">
              
              <p>#{i+1} <b className="headline">{data?.fields?.title}</b></p>

              <img alt="placeholder" width="100" height="auto" src={data?.fields?.heroImage?.fields?.file?.url} />

              <br/>

              <ul>
                <li><FormatDate date={data?.fields?.originalCreationDate}/></li>
                <li>{data?.fields?.subtitle}</li>
                <li>{data?.fields?.slug}</li>
                {data?.fields?.liveUrl ? <li><a target="_blank" rel="noreferrer" href={data?.fields?.liveUrl}>{data?.fields?.liveUrl}</a></li> : null}
                {data?.fields?.githubUrl ? <li><a target="_blank" rel="noreferrer" href={data?.fields?.githubUrl}>{data?.fields?.githubUrl}</a></li> : null}
                {data?.fields?.codepenUrl ? <li><a target="_blank" rel="noreferrer" href={data?.fields?.codepenUrl}>{data?.fields?.codepenUrl}</a></li> : null}
                <li>{documentToReactComponents(data?.fields?.briefDescription)}</li>
                {data?.fields?.projectTags ? <li>{data?.fields?.projectTags}</li> : null}
                <li><Link to={"/projects/" + data?.fields?.slug}>Details Page</Link></li>
              </ul>

              <br/>
              <br/>
              <br/>
              
            </li>
            
          );
        }).reverse()}

      </ul>
    </article>
  );

}

export default ProjectsData;
