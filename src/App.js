import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Home from "./components/Home";
import SkillSection from "./components/SkillSection";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home id="section1" />
        <Section id="section2" />
        <SkillSection id="section3" />
      </div>
    );
  }
}

export default App;
