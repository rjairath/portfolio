import React from "react";
import WideCard from "./WideCard";
import tapchief_img from "../assets/img/tapchief.png";
import digit_img from "../assets/img/digit.png";
import uni_img from "../assets/img/uni.png";
import "./Section.scss";
import { tapchief, digit, uni } from "../content/portfolioInfo";

// This is to be used only for portfolio section
export default function Section({ id }) {
  const toggleInput = (id) => {
    document.getElementById(id).click();
  };

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
              <label
                className="label_base label_strawberry"
                for="radio_1"
                onClick={() => toggleInput("radio_1")}
              >
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
              <input type="radio" id="radio_2" name="basic_carousel" value="" />
              <img src={digit_img} className="label-img label_img_digit" />
              <label
                className="label_base label_strawberry label_digit"
                for="radio_2"
                onClick={() => toggleInput("radio_2")}
              >
                Digit Insurance
              </label>

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
                <div className="widecard-footer">Jul 2018 - June 2019</div>
              </div>
            </li>
            {/* uni */}
            <li className="item">
              <input type="radio" id="radio_3" name="basic_carousel" value="" />
              <img src={uni_img} className="label-img label_img_uni" />
              <label
                className="label_base label_strawberry label_uni"
                for="radio_3"
                onClick={() => toggleInput("radio_3")}
              >
                Uni.xyz
              </label>

              <div className="content content_strawberry">
                <div className="widecard-row">
                  <h1>Uni.xyz</h1>
                  <p>Web Development Intern</p>
                </div>
                <div className="widecard-content">
                  {uni.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
                <div className="widecard-footer">Dec 2017 - Jan 2018</div>
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
