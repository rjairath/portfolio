import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Home from "./components/Home";
import SkillSection from "./components/SkillSection";
import BlogSection from "./components/BlogSection";
import "./App.scss";

class App extends React.Component {
  componentDidMount() {
    let height = window.innerHeight;
    let heightUsed = (height - 80) * 0.8 * 0.9;
    document.documentElement.style.setProperty(
      "--custom-height",
      `${heightUsed}px`
    );
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home id="section1" />
        <Section id="section2" />
        <SkillSection id="section3" />
        <BlogSection id="section4" />
      </div>
    );
  }
}

export default App;
