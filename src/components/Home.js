import React from "react";
import profilePic from "../assets/img/img_rishabh.jpg";
import Social from "./Social";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = ({ id }) => {
  return (
    <div className="home" id={id}>
      <div className="home__intro-section">
        <h2>HI! I'M RISHABH</h2>
        <h3>A web developer who loves to build things</h3>
        <div>
          <button className="home__cta-primary bold">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              KNOW MORE
            </Link>
          </button>
          <button className="home__cta-primary bold">DOWNLOAD RESUME</button>
        </div>
      </div>
      <div className="home__profile-section">
        <img src={profilePic} className="profilePic"></img>
        <Social></Social>
      </div>
    </div>
  );
};

export default Home;
