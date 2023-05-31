import React, { Component } from 'react';
import './footer.scss';
import { Link } from "react-router-dom";

class Footer extends Component {

  componentDidMount(){}

  buildSocialLinks = () => {
    let navItems = this.props.socialLinks.map((item, key) => 
      <a key={key} className="footer__nav-item" href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
    );
    return navItems
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__container container">

          <div className="footer__items">
            {this.buildSocialLinks()}
          </div>

          <div className="footer__items">
            <Link className="footer__nav-item" to="/">Home</Link>
            <Link className="footer__nav-item" to="/about">About</Link>
            <Link className="footer__nav-item" to="/resume">Resume</Link>
            <Link className="footer__nav-item" to="/projects">Projects</Link>
          </div>

          <div className="footer__items">
            <p>© Clifford Nelson 2023</p>
          </div>
          <div className="footer__items">
            <p>!! Please, Check back often as I'm making updates regularly !!</p>
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;
