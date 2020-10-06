import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/cartItem.module.scss";

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <img
          className={styles.itemImage}
          src="https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Air-Jordan-1-Retro-High-OG-Fearless-1_2000x.png?v=1571135078"
          alt="Gebeya shoe"
        />
      </div>
      <div className={styles.itemDetailsContainer}>
        <div className={styles.details}>
          <span className={styles.item}>air Jordan</span>
          <span className={styles.item}>$35</span>
          <span className={styles.item}>Total: $35</span>
        </div>
        <div className={styles.changeDetails}>
          <div className={styles.changeNumber}>
            <span>Quantity</span>
            <div className={styles.changeNumberOperations}>
              <FontAwesomeIcon icon={faMinus} className={styles.minusIcon} />
              <span>1</span>
              <FontAwesomeIcon icon={faPlus} className={styles.plusIcon} />
            </div>
          </div>
          <div className={styles.removeItem}>
            <FontAwesomeIcon icon={faTrash} className={styles.removeIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
