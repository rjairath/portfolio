import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.scss";
export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  closeDrawer = () => {
    document.getElementById("menu").click();
  };

  render() {
    return (
      <React.Fragment>
        <input type="checkbox" id="menu" />
        <label for="menu"></label>
        <nav className="nav" id="navbar">
          <span className="closeBtn" onClick={() => this.closeDrawer()}>
            &times;
          </span>
          <div className="nav-content">
            <img
              src={logo}
              className="nav-logo"
              alt="Logo."
              onClick={this.scrollToTop}
            />
            <ul className="nav-items">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => this.closeDrawer()}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => this.closeDrawer()}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => this.closeDrawer()}
                >
                  Skills
                </Link>
              </li>
              {/* <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Contact
              </Link>
            </li> */}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
