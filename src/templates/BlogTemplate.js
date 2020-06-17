import React from "react";
import styles from "./BlogTemplate.module.scss";

const BlogTemplate = ({ title, description, img, link }) => {
  return (
    <div className={styles["blogContainer"]}>
      <h3>{title}</h3>
      <img src={img}></img>
      <p>{description}</p>
      <button>
        <a href={link}>READ MORE</a>
      </button>
    </div>
  );
};

export default BlogTemplate;
