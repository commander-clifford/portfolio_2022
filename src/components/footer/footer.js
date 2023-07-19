import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';
import { Link } from "react-router-dom";

const Footer = ({ socialLinks, sitePaths }) => {

  const buildSocialLinks = () => {
    return socialLinks.map((item, key) => 
      <a key={item.id || key} className="footer__nav-item" href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
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
          {buildSocialLinks()}
        </nav>

        <nav className="footer__items">
          {buildSitePaths()}
        </nav>

        <div className="footer__items">
          <p>© {new Date().getFullYear()} Clifford Nelson</p>
        </div>

        <div className="footer__items">
          <p>!! Please, Check back often as I'm making updates regularly !!</p>
        </div>

      </div>
    </footer>
  );
}

Footer.propTypes = {
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired,
  sitePaths: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
};

export default Footer;
