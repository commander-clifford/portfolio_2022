import React from 'react';
import { Link } from 'react-router-dom';
import { contactCopy, featuredWork, homeCopy, publicProfileLinks, selectedWorkCopy } from '../../content/publicCopy';
import './home.scss';

const Home = ({ projectsData = [], isLoaded = false }) => (
  <article className="home portfolio-home" data-transition-ready={isLoaded ? 'true' : 'false'}>
    <section className="home-hero container">
      <p className="eyebrow">{homeCopy.eyebrow}</p>
      <h1>{homeCopy.title}</h1>
      <p className="home-hero__intro">{homeCopy.introduction}</p>
      <div className="home-hero__actions">
        <a className="button button--light" href="#selected-work">{homeCopy.workLink}</a>
        <Link className="button button--outline" to="/resume">{homeCopy.resumeLink}</Link>
      </div>
    </section>

    <section className="selected-work container" id="selected-work" aria-labelledby="selected-work-title">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="selected-work-title">A practical problem, a usable interface.</h2>
        <p>{selectedWorkCopy}</p>
      </div>

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
                  <h3>{work.title}</h3>
                  {work.subtitle ? <p className="work-card__subtitle">{work.subtitle}</p> : null}
                  <p>{work.summary}</p>
                  <span className="work-card__action">View case study <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>

    <section className="home-contact container" aria-labelledby="home-contact-title">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="home-contact-title">{contactCopy.heading}</h2>
        <p>{contactCopy.sentence}</p>
      </div>
      <a className="button button--dark" href={publicProfileLinks.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
    </section>
  </article>
);

export default Home;
