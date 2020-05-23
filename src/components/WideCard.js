import React from "react";

const WideCard = (props) => {
  return (
    <div className="widecard">
      <div className="widecard-row">
        <div style={{ display: "flex" }}>
          <img src={props.logo} className="widecard-img"></img>
          <p className="ml10 bold">{props.title}</p>
        </div>
        <p>{props.designation}</p>
      </div>
    </div>
  );
};

export default WideCard;
