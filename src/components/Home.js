import React from "react";
import profilePic from "../assets/img/img_rishabh.jpg";
import Social from "./Social";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Home.scss";

const url =
  "https://drive.google.com/file/d/1MuGcQWY5GY6ohpkM-K7uUd7Mg26ulAi8/view?usp=sharing";

const Home = ({ id }) => {
  const downloadResume = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="home" id={id}>
      <div className="homeCard">
        <div className="leftHomeCard">
          <p className="nametag">HI! I'M RISHABH</p>
          <p className="infotag">A web developer who loves to build things</p>
          <div>
            <button className="home__cta-primary bold">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
              >
                KNOW MORE
              </Link>
            </button>
            <button
              className="home__cta-primary bold"
              onClick={() => downloadResume()}
            >
              DOWNLOAD RESUME
            </button>
          </div>
        </div>

        <div className="rightHomeCard">
          <img src={profilePic} className="profilePic"></img>
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default Home;
