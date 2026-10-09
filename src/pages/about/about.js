import React from 'react';
import { Link } from 'react-router-dom';
import { aboutCopy, publicProfileLinks } from '../../content/publicCopy';
import './about.scss';

const About = () => (
  <article className="about portfolio-about" data-transition-ready="true">
    <header className="about-intro container">
      <p className="eyebrow">{aboutCopy.eyebrow}</p>
      <h1>{aboutCopy.title}</h1>
      <p className="about-intro__lead">{aboutCopy.introduction}</p>
    </header>

    <section className="about-story container" aria-label="Experience and interests">
      {aboutCopy.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    </section>

    <nav className="about-actions container" aria-label="More about Clifford">
      <Link className="button button--dark" to="/resume">View résumé</Link>
      <a className="button button--quiet" href={publicProfileLinks.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
    </nav>
  </article>
);

export default About;
