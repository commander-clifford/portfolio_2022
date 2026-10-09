import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Link } from 'react-router-dom';
import FormatDate from '../../components/date';
import './project.scss';

const ProjectDetails = ({ project, previousProject, nextProject }) => {
  const fields = project?.fields || {};
  const heroImage = fields.heroImage?.fields;
  const heroUrl = heroImage?.file?.url;
  const heroAlt = heroImage?.description || `${fields.title || 'Project'} project image`;

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const asset = node.data.target?.fields;
        const url = asset?.file?.url;
        if (!url) return null;
        return <img src={url} alt={asset.description || ''} loading="lazy" />;
      },
    },
  };

  const renderProjectNavigation = label => (
    <nav className="project-nav" aria-label={label}>
      <Link className="button button--quiet" to="/projects">All work</Link>
      {previousProject?.fields?.slug ? (
        <Link className="button button--quiet" aria-label={`Previous project: ${previousProject.fields.title}`} to={`/projects/${previousProject.fields.slug}`}>
          <span aria-hidden="true">← </span>{previousProject.fields.title}
        </Link>
      ) : null}
      {nextProject?.fields?.slug ? (
        <Link className="button button--quiet" aria-label={`Next project: ${nextProject.fields.title}`} to={`/projects/${nextProject.fields.slug}`}>
          {nextProject.fields.title}<span aria-hidden="true"> →</span>
        </Link>
      ) : null}
    </nav>
  );

  return (
    <article className="project container" data-transition-ready={project ? 'true' : 'false'}>
      <header className="project-intro">
        {renderProjectNavigation('Project navigation')}
        <p className="eyebrow">Project</p>
        <h1 className="headline">{fields.title}</h1>
        {fields.subtitle ? <p className="project-intro__subtitle">{fields.subtitle}</p> : null}
        {fields.briefDescription ? <div className="project-intro__summary">{documentToReactComponents(fields.briefDescription, options)}</div> : null}

        <div className="project-intro__meta">
          {fields.originalCreationDate ? <p><span>Project date</span><FormatDate date={fields.originalCreationDate} /></p> : null}
          {fields.projectTags ? <p><span>Focus</span>{fields.projectTags}</p> : null}
        </div>

        <div className="project-intro__links">
          {fields.liveUrl ? <a className="button button--dark" href={fields.liveUrl} target="_blank" rel="noopener noreferrer">Open project</a> : null}
          {fields.codepenUrl ? <a className="button button--quiet" href={fields.codepenUrl} target="_blank" rel="noopener noreferrer">View CodePen</a> : null}
          {fields.githubUrl ? <a className="button button--quiet" href={fields.githubUrl} target="_blank" rel="noopener noreferrer">View source on GitHub</a> : null}
        </div>
      </header>

      {heroUrl ? (
        <figure className="project-hero">
          <img src={heroUrl} alt={heroAlt} />
        </figure>
      ) : null}

      <div className="project-content">
        {fields.fullDescription ? documentToReactComponents(fields.fullDescription, options) : null}
        {fields.sections?.map((section, index) => {
          const sectionFields = section?.fields || {};
          const sectionImage = sectionFields.img?.fields;
          const imageUrl = sectionImage?.file?.url;

          return (
            <section className="project-content__section" key={section?.sys?.id || sectionFields.title || index}>
              {sectionFields.title ? <h2>{sectionFields.title}</h2> : null}
              {sectionFields.content ? documentToReactComponents(sectionFields.content, options) : null}
              {imageUrl ? <img src={imageUrl} alt={sectionImage.description || `${sectionFields.title || fields.title} image`} loading="lazy" /> : null}
            </section>
          );
        })}
      </div>

      <footer className="project-footer">
        {renderProjectNavigation('More project navigation')}
      </footer>
    </article>
  );
};

export default ProjectDetails;
