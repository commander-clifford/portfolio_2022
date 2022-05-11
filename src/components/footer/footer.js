import React, { Component } from 'react';
import './footer.scss';
import Nav from "../nav/nav";
import { Link } from "react-router-dom";



class Footer extends Component {



  

  componentDidMount(){
    

  }

  buildNavItems = () => {
    let navItems = this.props.sitePaths.map((item, key) => 
      <Link className="footer__nav-item" to={item.path}>{item.title}</Link>
    );
    return navItems
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__container container">

          <div className='footer__nav-items'>
            <a className='footer__nav-item' href="https://www.linkedin.com/in/clifford-nelson-bba47459/" rel="noreferrer" target={"_blank"}>LinkedIn</a>
            <a className='footer__nav-item' href="https://github.com/commander-clifford/" rel="noreferrer" target={"_blank"}>GitHub</a>
            <a className='footer__nav-item' href="https://www.instagram.com/highestcliff/" rel="noreferrer" target={"_blank"}>Personal Instagram</a>
            <a className='footer__nav-item' href="https://www.instagram.com/jeep.io/" rel="noreferrer" target={"_blank"}>Project Instagram</a>
          </div>

          <div className="footer__nav-items">
            {this.buildNavItems()}
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;
