import React from "react";
import styles from "./Contact.module.scss";
import Social from "./Social";

const Contact = ({ id }) => {
  return (
    <div className={styles["section"]} id={id}>
      <div className={styles["container"]}>
        <p>Building something awesome? Would love to get in touch</p>

        <form name="contact" method="POST" netlify netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <div className={styles["formRow"]}>
              <input type="text" placeholder="Name" name="name" />
            </div>
            <div className={styles["formRowEmail"]}>
              <input type="email" placeholder="Email" name="email" />
            </div>
            <div className={styles["botField"]}>
              <input name="bot-field" />
            </div>
            <div className={styles["textAreaRow"]}>
              <textarea name="message" placeholder="Message" name="message" />
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
