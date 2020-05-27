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

const SkillSection = ({ id }) => {
  return (
    <div className="section section-dark">
      <div className="section-content" id={id}>
        <WideCard
          skillSection="true"
          title="Javascript"
          logoList={[javascript, jquery, angular, react, node]}
        />
        <WideCard
          skillSection="true"
          title="HTML/CSS"
          logoList={[html, css, sass, bootstrap]}
        />
        <WideCard
          skillSection="true"
          title="Others"
          logoList={[python, webpack, git]}
        />
      </div>
    </div>
  );
};

export default SkillSection;
