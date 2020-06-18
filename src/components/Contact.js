import React from "react";
import styles from "./Contact.module.scss";
import Social from "./Social";

const Contact = ({ id }) => {
  return (
    <div className={styles["section"]} id={id}>
      <div className={styles["container"]}>
        <p>Building something awesome? Would love to get in touch</p>

        <form>
          <div>
            <div className={styles["formRow"]}>
              <input type="text" placeholder="Name" />
            </div>
            <div className={styles["formRowEmail"]}>
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles["textAreaRow"]}>
              <textarea name="message" placeholder="Message" />
            </div>
            <div className={styles["buttonRow"]}>
              <input type="submit" value="Send Message" />
              <input type="reset" value="Clear Form" />
              <div className={styles["socialAlign"]}>
                <Social />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
