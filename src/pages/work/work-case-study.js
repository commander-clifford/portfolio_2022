import React from 'react';
import { Link } from 'react-router-dom';
import { featuredWork } from '../../content/publicCopy';
import './work-case-study.scss';

const WorkCaseStudy = ({ match, projectsData = [] }) => {
  const work = featuredWork.find(item => item.slug === match.params.slug);
  const workIndex = featuredWork.findIndex(item => item.slug === match.params.slug);

  if (!work) {
    return (
      <article className="work-case container" data-transition-ready="true">
        <p className="eyebrow">Selected work</p>
        <h1>That case study is not here.</h1>
        <Link className="button button--dark" to="/">Back to selected work</Link>
      </article>
    );
  }

  const project = projectsData.find(item => item.fields?.slug === work.slug);
  const image = project?.fields?.heroImage?.fields?.file?.url;

  return (
    <article className="work-case" data-transition-ready="true">
      <header className="work-case__header container">
        <p className="eyebrow">{work.label}</p>
        <h1>{work.title}</h1>
        {work.subtitle ? <p className="work-case__subtitle">{work.subtitle}</p> : null}
        <p className="work-case__summary">{work.summary}</p>
        {image ? <img className="work-case__image" src={image} alt={project?.fields?.heroImage?.fields?.description || ''} /> : null}
      </header>

      <div className="work-case__layout container">
        <aside className="work-case__role">
          <p className="eyebrow">My role</p>
          <p>{work.role}</p>
        </aside>

        <div className="work-case__sections">
          {work.sections.map(section => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          {work.externalUrl ? <a className="button button--dark" href={work.externalUrl} target="_blank" rel="noreferrer">Visit LAAW.life</a> : null}
        </div>
      </div>

      <nav className="work-case__back container" aria-label="Selected work navigation">
        <div className="work-case__previous-next">
          {workIndex > 0 ? (
            <Link className="button button--quiet" to={`/work/${featuredWork[workIndex - 1].slug}`} aria-label={`Previous project: ${featuredWork[workIndex - 1].title}`}>
              ← {featuredWork[workIndex - 1].title}
            </Link>
          ) : <span />}
          {workIndex < featuredWork.length - 1 ? (
            <Link className="button button--quiet" to={`/work/${featuredWork[workIndex + 1].slug}`} aria-label={`Next project: ${featuredWork[workIndex + 1].title}`}>
              {featuredWork[workIndex + 1].title} →
            </Link>
          ) : null}
        </div>
        <Link className="button button--quiet" to="/">← Back to selected work</Link>
      </nav>
    </article>
  );
};

export default WorkCaseStudy;
