import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';
import { Link } from "react-router-dom";

const Footer = ({ socialLinks, sitePaths }) => {

  const buildSocialLinks = () => {
    return socialLinks.map((item, key) => 
      <a key={item.id || key} className="footer__nav-item social-link" href={item.link} target="_blank" rel="noreferrer" aria-label={item.title}>
        <span className="icon" dangerouslySetInnerHTML={{ __html: item.iconType }}></span>
      </a>
    );
  }

  const buildSitePaths = () => {
    return sitePaths.map((item, key) =>
      <Link key={item.id || key} className="footer__nav-item" to={item.path}>{item.title}</Link>
    );
  }

  return (
    <footer className="footer">
      <div className="footer__container container">
        
        <nav className="footer__items">
          {buildSitePaths()}
        </nav>

        <nav className="footer__items">
          {buildSocialLinks()}
        </nav>

        <div className="footer__items">
          <p>© {new Date().getFullYear()} Clifford Nelson</p>
        </div>

      </div>
    </footer>
  );
}

Footer.propTypes = {
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    id: PropTypes.string
  })),
  sitePaths: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string
  }))
};

export default Footer;
