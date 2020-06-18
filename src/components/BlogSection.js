import React from "react";
import styles from "./BlogSection.module.scss";
import { blogs } from "../content/blogContents";
import BlogTemplate from "../templates/BlogTemplate";

const BlogSection = ({ id }) => {
  return (
    <div className={styles["section"]} id={id}>
      <div className={styles["sectionCardContainer"]}>
        {blogs.map((blog, index) => {
          return (
            <div className={styles["sectionCard"]} key={index}>
              <BlogTemplate
                title={blog.title}
                description={blog.description}
                img={blog.img}
                link={blog.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;
