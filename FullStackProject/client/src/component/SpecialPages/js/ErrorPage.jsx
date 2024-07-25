import React from "react";
import styles from "../css/ErrorPage.module.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.errorCode}>404</p>
        <div className={styles.message}>
          <h1 id="pageTitle" className={styles.title}>
            <svg
              aria-hidden="true"
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className={styles.titleText}>Oops! Page not found.</span>
          </h1>
          <p className={styles.description}>
            The page you are looking for was not found.
          </p>
          <p className={styles.instruction}>
            You may return to{" "}
            <span className={styles.link} onClick={handleClick}>
              Home Page
            </span>{" "}
            or try using the search form.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
