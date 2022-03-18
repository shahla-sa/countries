import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

const Header = ({ theme, changeTheme }) => {
  console.log("first", changeTheme);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        Where in the world?
        <button
          className={styles.toggleTheme}
          onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" ? (
            <>
              <FontAwesomeIcon icon={faSun} />
              <span>light mode</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faMoon} />
              <span>dark mode</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
