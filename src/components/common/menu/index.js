import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Context as ProductContext } from "../../../context/productContext";
import styles from "./styles/menu.module.scss";

const Menu = () => {
  const {
    state: {
      cart: { cartItems },
    },
  } = useContext(ProductContext);

  return (
    <div className={styles.menu}>
      <div className={styles.textContainer}>
        <Link to="/" className={styles.link}>
          <div className={styles.textOneContainer}>Gebeya's</div>
        </Link>
        <div className={styles.textTwoContainer}>shoe store</div>
      </div>
      <div className={styles.iconContainer}>
        {cartItems.length ? (
          <span className={styles.badge}>{cartItems.length}</span>
        ) : null}
        <Link to="/cart">
          <FontAwesomeIcon
            style={{
              color: "#4f4e4d",
              backgroundColor: "transparent",
              fontSize: 26,
              cursor: "pointer",
            }}
            icon={faShoppingCart}
          />
        </Link>
      </div>
    </div>
  );
};

export { Menu };
