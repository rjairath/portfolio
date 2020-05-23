import React from "react";

class Social extends React.Component {
  render() {
    return (
      <div className="social">
        <a href="https://github.com/" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://Instagram.com/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    );
  }
}

export default Social;
