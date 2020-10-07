import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/button.module.scss";

const Button = ({ isIncart, addTocart }) => {
  return (
    <div
      className={styles.button}
      style={
        !isIncart
          ? { backgroundColor: "#c21b1b" }
          : { backgroundColor: "#14a307" }
      }
      role="button"
      onClick={!isIncart ? addTocart : undefined}
    >
      <div className={styles.buttonContainer}>
        <span>{!isIncart ? "Add to Cart" : "Product in Cart"}</span>
        {!isIncart ? (
          <FontAwesomeIcon icon={faPlus} className={styles.plusIcon} />
        ) : (
          <FontAwesomeIcon icon={faCheck} className={styles.plusIcon} />
        )}
      </div>
    </div>
  );
};

export { Button };
