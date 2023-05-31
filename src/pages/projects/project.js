import React, { useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'react-router-dom';
import './project.scss';

const ProjectDetails = (props) => {


  useEffect(() => {
    console.log("ProjectDetails", props.project?.fields)
  }, [props.project?.fields]);
  
  return (

    <section className='project container'>

      <header className='project-header'>
        <div>
          <h1>{props.project?.fields?.title}</h1>
          <p>{props.project?.fields?.subtitle}&nbsp;<i>{props.project?.fields?.originalCreationDate}</i></p>
        </div>



{/* TODO: this is it's own component */}
        <nav className='project-nav'>

          <Link to="/projects">All Projects</Link>

          &nbsp;
          &nbsp;
          &nbsp;

          {props.previousProject?.fields?.slug ? 
            <Link className={'back'} to={'/projects/' + props.previousProject?.fields?.slug}>PREV {props.previousProject?.fields?.title}</Link>
          : null }

          &nbsp;
          &nbsp;
          &nbsp;

          {props.nextProject?.fields?.slug ? 
            <Link to={'/projects/' + props.nextProject?.fields?.slug} className={'next'}>{props.nextProject?.fields?.title} NEXT</Link> 
          : null }


        </nav>




      </header>

      <div>
        <img alt="placeholder" src={props.project?.fields?.heroImage?.fields?.file?.url} />
        <img alt="placeholder" src={props.project?.fields?.hero?.fields?.file?.url} />
      </div>
      
      <div>{documentToReactComponents(props.project?.fields?.briefDescription)}</div>

      <p>{props.project?.fields?.projectTags}</p>

      <p>
        {props.project?.fields?.liveUrl ? 
          <a href={props.project?.fields?.liveUrl} target="_blank" rel="noopener noreferrer">Visit</a> 
        : null }
      </p>

      <p>
        {props.project?.fields?.codePenUrl ? 
          <a href={props.project?.fields?.codePenUrl} target="_blank" rel="noopener noreferrer">CodePen</a> 
        : null }
      </p>

      <p>
        {props.project?.fields?.githubUrl ? 
          <a href={props.project?.fields?.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a> 
        : null }
      </p>
      

      {props.project?.fields?.sections?.map((section, i) => (
        <div key={i}>
          <h2>{section?.fields?.title}</h2>
          {documentToReactComponents(section?.fields?.content)}
          <img alt="placeholder" src={section?.fields?.img?.fields?.file?.url} />
        </div>
      ))}

      <footer>
        {/* TODO: this is it's own component */}
        <nav className='project-nav'>

          <Link to="/projects">All Projects</Link>

          &nbsp;
          &nbsp;
          &nbsp;

          {props.previousProject?.fields?.slug ? 
            <Link className={'back'} to={'/projects/' + props.previousProject?.fields?.slug}>PREV {props.previousProject?.fields?.title}</Link>
          : null }

          &nbsp;
          &nbsp;
          &nbsp;

          {props.nextProject?.fields?.slug ? 
            <Link to={'/projects/' + props.nextProject?.fields?.slug} className={'next'}>{props.nextProject?.fields?.title} NEXT</Link> 
          : null }


        </nav>
      </footer>
      
    </section>

  );

}

export default ProjectDetails;
