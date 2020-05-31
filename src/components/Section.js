import React from "react";
import WideCard from "./WideCard";
import tapchief_img from "../assets/img/tapchief.png";
import digit_img from "../assets/img/digit.png";
import uni_img from "../assets/img/uni.png";
import "./Section.scss";
import { tapchief, digit, uni } from "../content/portfolioInfo";

// This is to be used only for portfolio section
export default function Section({ id }) {
  return (
    <div className="section" id={id}>
      <div id="scene">
        <div id="left-zone">
          <ul className="list">
            {/* tc */}
            <li className="item">
              <input
                type="radio"
                id="radio_1"
                name="basic_carousel"
                value=""
                checked="checked"
              />
              <img src={tapchief_img} className="label-img" />
              <label className="label_base label_strawberry" for="radio_1">
                Tapchief
              </label>
              {/* right section */}
              <div className="content content_strawberry">
                <div className="widecard-row">
                  <h1>Tapchief</h1>
                  <p>Product Engineer</p>
                </div>
                <div className="widecard-content">
                  {tapchief.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
                <div className="widecard-footer">Jun 2019 - Apr 2020</div>
              </div>
            </li>
            {/* digit */}
            <li className="item">
              <input
                type="radio"
                id="radio_2"
                name="basic_carousel"
                value=""
                checked="checked"
              />
              <img src={digit_img} className="label-img" />
              <label className="label_base label_strawberry" for="radio_2">
                Digit Insurance
              </label>
              {/* right section */}
              <div className="content content_strawberry">
                <div className="widecard-row">
                  <h1>Digit Insurance</h1>
                  <p>Graduate Trainee Engineer</p>
                </div>
                <div className="widecard-content">
                  {digit.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
                <div className="widecard-footer">Jun 2019 - Apr 2020</div>
              </div>
            </li>
          </ul>
        </div>
        <div id="middle-border"></div>
        <div id="right-zone"></div>
      </div>
    </div>
  );
}
