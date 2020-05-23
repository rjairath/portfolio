import React from "react";
import WideCard from "./WideCard";
import tapchief_img from "../assets/img/tapchief.png";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <WideCard
          title="TAPCHIEF"
          logo={tapchief_img}
          designation="Product Engineer"
        />
      </div>
    </div>
  );
}
