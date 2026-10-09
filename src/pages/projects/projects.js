import React from 'react';
import { Link } from 'react-router-dom';
import { featuredWork, selectedWorkCopy } from '../../content/publicCopy';
import '../home/home.scss';
import './projects.scss';

const Projects = ({ projectsData = [], isLoaded = false }) => (
  <article className="projects portfolio-projects" data-transition-ready={isLoaded ? 'true' : 'false'}>
    <section className="container" aria-labelledby="projects-title">
      <header className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h1 id="projects-title">Tools and experiences built around real workflows.</h1>
        <p>{selectedWorkCopy}</p>
      </header>

      <div className="work-grid">
        {featuredWork.map((work, index) => {
          const project = projectsData.find(item => item.fields?.slug === work.slug);
          const image = project?.fields?.heroImage?.fields?.file?.url;

          return (
            <article className="work-card art__stagger-in" key={work.slug}>
              <Link className="work-card__link" to={`/work/${work.slug}`} aria-label={`Read the ${work.title} case study`}>
                <div className={`work-card__media${image ? ' work-card__media--image' : ''}`}>
                  {image ? <img src={image} alt="" /> : <span aria-hidden="true">0{index + 1}</span>}
                </div>
                <div className="work-card__body">
                  <p className="work-card__label">{work.label}</p>
                  <h2>{work.title}</h2>
                  {work.subtitle ? <p className="work-card__subtitle">{work.subtitle}</p> : null}
                  <p>{work.summary}</p>
                  <span className="work-card__action">Read the case study <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  </article>
);

export default Projects;
