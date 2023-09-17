import React, { useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Link } from 'react-router-dom';
import FormatDate from '../../components/date';
import './project.scss';

const ProjectDetails = (props) => {

  useEffect(() => {
    console.log("ProjectDetails", props.project?.fields)
  }, [props.project?.fields]);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <img 
            src={node.data.target.fields.file.url} 
            alt={node.data.target.fields.description || ""}
            style={{ maxWidth: '100%' }} 
          />
        );
      },
    },
  };
  
  return (

    <section className='project container'>

      <header className='project-header'>

        <nav className='project-nav'>
          <Link className={'btn btn-secondary btn-sm'} to="/projects">All Projects</Link>
          {props.previousProject?.fields?.slug ? <Link className={'back btn btn-secondary btn-sm'} to={'/projects/' + props.previousProject?.fields?.slug}>{props.previousProject?.fields?.title}</Link>: null }
          {props.nextProject?.fields?.slug ? <Link className={'next btn btn-secondary btn-sm'} to={'/projects/' + props.nextProject?.fields?.slug} >{props.nextProject?.fields?.title}</Link>: null }
        </nav>

        <div className='headline'>
          <h1>{props.project?.fields?.title}</h1>
          <h5>{props.project?.fields?.subtitle}</h5>
          <FormatDate date={props.project?.fields?.originalCreationDate}/>
        </div>

      </header>

      <main>

        <img alt={props.project?.fields?.heroImage?.fields?.title} src={props.project?.fields?.heroImage?.fields?.file?.url} />

        
        
        <div>
          {documentToReactComponents(props.project?.fields?.briefDescription, options)}
          <p>{props.project?.fields?.projectTags}</p>
        </div>

        <div>        
          {props.project?.fields?.liveUrl ? 
            <a className="btn btn-secondary btn-md" href={props.project?.fields?.liveUrl} target="_blank" rel="noopener noreferrer">Visit</a> 
          : null }
        
          {props.project?.fields?.codePenUrl ? 
            <a className="btn btn-secondary btn-md" href={props.project?.fields?.codePenUrl} target="_blank" rel="noopener noreferrer">CodePen</a> 
          : null }
        
          {props.project?.fields?.githubUrl ? 
            <a className="btn btn-secondary btn-md" href={props.project?.fields?.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a> 
          : null }
        </div>
        
        {props.project?.fields?.sections?.map((section, i) => (
          <div key={i}>
            <h2>{section?.fields?.title}</h2>
            {documentToReactComponents(section?.fields?.content, options)}
            <img alt="placeholder" src={section?.fields?.img?.fields?.file?.url} />
          </div>
        ))}

      </main>

      <footer>
        <nav className='project-nav'>
          <Link className={'btn btn-secondary btn-sm'} to="/projects">All Projects</Link>
          {props.previousProject?.fields?.slug ? <Link className={'back btn btn-secondary btn-sm'} to={'/projects/' + props.previousProject?.fields?.slug}>{props.previousProject?.fields?.title}</Link>: null }
          {props.nextProject?.fields?.slug ? <Link className={'next btn btn-secondary btn-sm'} to={'/projects/' + props.nextProject?.fields?.slug} >{props.nextProject?.fields?.title}</Link>: null }
        </nav>
      </footer>
      
    </section>

  );

}

export default ProjectDetails;