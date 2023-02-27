import React, { useState, useEffect } from 'react';

const ProjectDetails = (props) => {


  useEffect(() => {
    console.log("ProjectDetails props", props)
  }, []);
  
  return (

    <section className='card nav-card'>
      <p>ProjectDetails </p>
      {props?.fields?.slug}
    </section>

  );

}

export default ProjectDetails;
