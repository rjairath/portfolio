import React from "react";
import WideCard from "./WideCard";
import tapchief_img from "../assets/img/tapchief.png";
import digit_img from "../assets/img/digit.png";
import uni_img from "../assets/img/uni.png";

import { tapchief, digit, uni } from "../content/portfolioInfo";

// This is to be used only for portfolio section
export default function Section({ title, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <WideCard
          title="TAPCHIEF"
          logo={tapchief_img}
          designation="Product Engineer"
          content={tapchief}
          timeline="June 2019 - April 2020 | Bengaluru"
        />
        <WideCard
          title="DIGIT INSURANCE"
          logo={digit_img}
          designation="Graduate Trainee Engineer"
          content={digit}
          timeline="July 2018 - June 2019 | Bengaluru"
        />
        <WideCard
          title="UNI.XYZ"
          logo={uni_img}
          designation="Web Development Intern"
          content={uni}
          timeline="Dec 2017 - Jan 2018 | Delhi"
        />
      </div>
    </div>
  );
}
