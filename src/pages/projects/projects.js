import React, { useState, useEffect } from 'react';
import { fetchContentfulEntries } from '../../contentfulAPI';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import FormatDate from '../../components/date';
import { Link } from 'react-router-dom';
import './projects.scss';
const Projects = () => {

  const [projectsData, setProjectsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let navDots = [];
  let oldSlide = 0;
  let activeSlide = 0;
  let dur = 0.6;

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

      // console.log("projectsData", projectsData);

      const projectsContainer = document.getElementById("projects-container");
      const projectItems = document.querySelectorAll("section.project-item");
      let dots = document.querySelector(".project-dots");



      // gsap.registerPlugin(ScrollTrigger);


      // const goToSection = (i, anim) => {
      //   let yAxis = parseInt(i*window.innerHeight);
      //   console.log("yAxis", yAxis)
      //   gsap.to(window, {
      //     scrollTo: {y: yAxis, autoKill: false},
      //     duration: 1
      //   });
        
      //   if(anim) {
      //     anim.restart();
      //   }
      // }
      
      // gsap.utils.toArray(".panel").forEach((panel, i) => {
      //   ScrollTrigger.create({
      //     trigger: panel,
      //     onEnter: () => goToSection(i)
      //   });
        
      //   ScrollTrigger.create({
      //     trigger: panel,
      //     start: "bottom bottom",
      //     onEnterBack: () => goToSection(i),
      //   });
      // });
      
      


      


      // for (let i = 0; i < projectItems.length; i++) {
      //   let tl = gsap.timeline({paused:true, reversed:true});
      //   let newDot = document.createElement("a");
      //   newDot.className = "project-dot";
      //   newDot.href = "#"+projectsData[i]?.fields?.slug;
      //   newDot.index = i;
      //   navDots.push(newDot);
      //   newDot.addEventListener("click", (e) => {slideAnim(e)});
      //   // newDot.addEventListener("mouseenter", dotHover);
      //   // newDot.addEventListener("mouseleave", dotHover);
      //   dots.appendChild(newDot);
      // }

      // window.addEventListener("wheel", (e) => {slideAnim(e)});


    }
  }, [isLoaded]);

  const slideAnim = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  const renderDots = () => {
    return projectsData.map((project, index) => (
      <a
        key={index}
        className="project-dot"
        href={`#${project.fields.slug}`}
        onClick={(event) => slideAnim(event, project.fields.slug)}
      />
    )).reverse();
  };

  

  return (
    <article className="projects">

      <div className="project-dots">
        {renderDots()}
      </div>

      <div id='projects-container' className='projects-container container'>

        {projectsData.map((data, i) => {
          return (
            <section key={i} id={data?.fields?.slug} className="project-item panel art__stagger-in art__stagger-out">

              <div>
                <div className="project-item__headline-block">
                  <h2 className="headline">{data?.fields?.title}</h2>
                  <div className='d-flex flex-row'><p>#{i+1}</p><FormatDate date={data?.fields?.originalCreationDate}/></div>
                </div>
                
                <div className="d-flex align-items-center">
                  <h5 className="headline">{data?.fields?.subtitle}</h5>
                </div>
                
                <div className="project-item__description p-indent">
                  {documentToReactComponents(data?.fields?.briefDescription)}
                  {data?.fields?.projectTags}
                </div>
                
                <div>
                  {data?.fields?.liveUrl ? <a href={data.fields.liveUrl} target="_blank">Visit Demo</a> : null }
                  <br/>
                  <Link to={"/projects/" + data?.fields?.slug}>See More</Link>
                </div>

              </div>
              
              <div>
                <img src={data?.fields?.heroImage?.fields?.file?.url} />
                <img src={data?.fields?.hero?.fields?.file?.url} />
              </div>

            </section>
          );
        }).reverse()}

      </div>
    </article>
  );

}

export default Projects;
