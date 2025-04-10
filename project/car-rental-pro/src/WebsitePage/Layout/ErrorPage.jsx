import React from "react";
import { Link } from "react-router-dom";

import styles from "./LayoutComanFile/Errorpage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles["body"]}>
      <div className={styles["overlay"]}></div>
      <div class="terminal container text-center">
        <h1>
          Error <span className={styles["errorcode"]}>404</span>
        </h1>
        <p class="output">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <p class="output">
          Please try to{" "}
          <a className={styles["a"]} href="#">
            go back
          </a>{" "}
          or{" "}
          <a className={styles["a"]} href="#">
            return to the homepage
          </a>
          .
        </p>
        <p class="output">Good luck.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
