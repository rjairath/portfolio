import React from "react";
import WideCard from "./WideCard";
import javascript from "../assets/img/javascript.png";
import jquery from "../assets/img/jquery.png";
import angular from "../assets/img/angular.png";
import react from "../assets/img/react.png";
import node from "../assets/img/nodejs.png";

import html from "../assets/img/html5.png";
import css from "../assets/img/css3.png";
import sass from "../assets/img/sass.png";
import bootstrap from "../assets/img/bootstrap.png";

import python from "../assets/img/python.png";
import webpack from "../assets/img/webpack.png";
import git from "../assets/img/git.png";

import "./SkillSection.scss";

const SkillSection = ({ id }) => {
  const toggleInput = (id) => {
    document.getElementById(id).click();
  };

  return (
    <div className="section" id={id}>
      <div className="skillCard">
        <div id="skillCardLeftSection">
          <ul className="listSkills">
            <li className="item">
              <input
                type="radio"
                id="skill_1"
                name="basic_carousel_skill"
                value=""
                checked="checked"
              />
              <label
                className="label-base-skills"
                for="skill_1"
                onClick={() => toggleInput("skill_1")}
              >
                Javascript
              </label>
              {/* right section */}
              <div className="content-skills">
                {[javascript, jquery, angular, react, node].map(
                  (item, index) => (
                    <img key={index} src={item} className="skills-img"></img>
                  )
                )}
              </div>
            </li>

            <li className="item">
              <input
                type="radio"
                id="skill_2"
                name="basic_carousel_skill"
                value=""
              />
              <label
                className="label-base-skills skill-html"
                for="skill_2"
                onClick={() => toggleInput("skill_2")}
              >
                HTML/CSS
              </label>
              {/* right section */}
              <div className="content-skills">
                {[html, css, sass, bootstrap].map((item, index) => (
                  <img key={index} src={item} className="skills-img"></img>
                ))}
              </div>
            </li>

            <li className="item">
              <input
                type="radio"
                id="skill_3"
                name="basic_carousel_skill"
                value=""
              />
              <label
                className="label-base-skills skill-others"
                for="skill_3"
                onClick={() => toggleInput("skill_3")}
              >
                Others
              </label>
              {/* right section */}
              <div className="content-skills">
                {[python, webpack, git].map((item, index) => (
                  <img key={index} src={item} className="skills-img"></img>
                ))}
              </div>
            </li>
          </ul>
        </div>
        <div id="skillCardMiddleBorder"></div>
        <div id="skillCardRightSection"></div>
      </div>
    </div>
  );
};

export default SkillSection;
