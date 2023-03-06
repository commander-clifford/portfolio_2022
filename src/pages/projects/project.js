import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'react-router-dom';
import './project.scss';

const ProjectDetails = (props) => {


  useEffect(() => {
    console.log("ProjectDetails sections", props.project?.fields?.sections)
  }, []);
  
  return (

    <section className='container'>


      
      <h1>{props.project?.fields?.title}</h1>
      <p>{props.project?.fields?.subtitle}&nbsp;<i>{props.project?.fields?.originalCreationDate}</i></p>

      <div>
        <img src={props.project?.fields?.heroImage?.fields?.file?.url} />
        <img src={props.project?.fields?.hero?.fields?.file?.url} />
      </div>
      
      
      

      <div>{documentToReactComponents(props.project?.fields?.briefDescription)}</div>
      <p>{props.project?.fields?.projectTags}</p>



      <p>
        {}
        {props.project?.fields?.liveUrl ? 
          <a href={props.project?.fields?.liveUrl} target="_blank" rel="noopener noreferrer">Visit</a> 
        : null }
      </p>
      <p>
        {}
        {props.project?.fields?.codePenUrl ? 
          <a href={props.project?.fields?.codePenUrl} target="_blank" rel="noopener noreferrer">CodePen</a> 
        : null }
      </p>
      <p>
        {}
        {props.project?.fields?.githubUrl ? 
          <a href={props.project?.fields?.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a> 
        : null }
      </p>
      

      {/* <p>{props.project?.fields?.sections}</p> */}

      <nav className='project-nav'>
        {props.previousProject?.fields?.slug ? 
          <Link to={'/projects/' + props.previousProject?.fields?.slug}>Previous: {props.previousProject?.fields?.title}</Link>
        : <span>Previous</span> }
        <Link to="/projects">All Projects</Link>
        {props.nextProject?.fields?.slug ? 
          <Link to={'/projects/' + props.nextProject?.fields?.slug}>Next: {props.nextProject?.fields?.title}</Link> 
        : <span>Next</span> }
      </nav>
      
    </section>

  );

}

export default ProjectDetails;
