import React from "react";

class Social extends React.Component {
  render() {
    return (
      <div className="social">
        <a href="https://github.com/rjairath" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rishabh-jairath-8bb866135/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/rishabh_jairath" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        {/* <a href="https://Instagram.com/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a> */}
      </div>
    );
  }
}

export default Social;
