import React from "react";

const WideCard = (props) => {
  if (!props.skillSection) {
    return (
      <div className="widecard">
        <div className="widecard-row">
          <div style={{ display: "flex" }}>
            <img src={props.logo} className="widecard-img"></img>
            <p className="ml10 bold">{props.title}</p>
          </div>
          <p>{props.designation}</p>
        </div>
        <div className="widecard-content">
          <ul>
            {props.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="widecard-footer">{props.timeline}</div>
      </div>
    );
  } else {
    return (
      <div className="widecard widecard-light">
        <div className="widecard-row">
          <p className="ml10 bold">{props.title}</p>
        </div>
        <div className="widecard-light-content">
          {props.logoList.map((item, index) => (
            <img key={index} src={item} className="widecard-light-img"></img>
          ))}
        </div>
      </div>
    );
  }
};

export default WideCard;
