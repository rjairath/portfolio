import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import dummyText from "./dummyText";
import Home from "./components/Home";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Section
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        /> */}
        <Home id="section1" />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
