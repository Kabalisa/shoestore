import React from "react";
import { Menu } from "../menu";
import styles from "./styles/layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <div className={styles.container}>
        {children}
        <div className={styles.footer}>copyright Gebeya's shoe store 2020</div>
      </div>
    </>
  );
};

export { Layout };
