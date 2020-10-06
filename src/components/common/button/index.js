import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/button.module.scss";

const Button = () => {
  return (
    <div
      className={styles.button}
      style={
        true ? { backgroundColor: "#c21b1b" } : { backgroundColor: "#14a307" }
      }
    >
      <div className={styles.buttonContainer}>
        <span>Add to Cart</span>
        {true ? (
          <FontAwesomeIcon icon={faPlus} className={styles.plusIcon} />
        ) : (
          <FontAwesomeIcon icon={faCheck} className={styles.plusIcon} />
        )}
      </div>
    </div>
  );
};

export { Button };
