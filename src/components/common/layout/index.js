import React from "react";
import { Menu } from "../menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <div className={styles.container}>
        {children}
        <div className={styles.footer}>
          <div className={styles.copyright}>
            <FontAwesomeIcon
              icon={faCopyright}
              className={styles.copyrightIcon}
            />
            <span>copyright Gebeya's shoe store 2020</span>
          </div>
        </div>
      </div>
    </>
  );
};

export { Layout };
