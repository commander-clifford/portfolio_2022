import React, { Component } from 'react';
import './footer.scss';
import { Link } from "react-router-dom";

class Footer extends Component {

  componentDidMount(){}

  buildNavItems = () => {
    let navItems = this.props.socialLinks.map((item, key) => 
      <Link key={key} className="footer__nav-item" to={item.link} target="_blank">{item.title}</Link>
    );
    return navItems
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__container container">



          <div className="footer__nav-items">
            {this.buildNavItems()}
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;
