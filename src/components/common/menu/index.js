import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.textContainer}>
        <div className={styles.textOneContainer}>Gebeya's</div>
        <div className={styles.textTwoContainer}>shoe store</div>
      </div>
      <div className={styles.iconContainer}>
        <span className={styles.badge}>1</span>
        <FontAwesomeIcon
          style={{
            color: "#4f4e4d",
            backgroundColor: "transparent",
            fontSize: 26,
            cursor: "pointer",
          }}
          icon={faShoppingCart}
        />
      </div>
    </div>
  );
};

export { Menu };
