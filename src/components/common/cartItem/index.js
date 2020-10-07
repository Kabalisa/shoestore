import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Context as ProductContext } from "../../../context/productContext";
import styles from "./styles/cartItem.module.scss";

const CartItem = ({ cartItem }) => {
  const { state, changeQuantity, removeFromCart } = useContext(ProductContext);

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <img
          className={styles.itemImage}
          src={cartItem.imageUrl}
          alt="Gebeya shoe"
        />
      </div>
      <div className={styles.itemDetailsContainer}>
        <div className={styles.details}>
          <span className={styles.item}>{cartItem.nom}</span>
          <span
            className={styles.item}
          >{`${cartItem.currency}${cartItem.price}`}</span>
          <span
            className={styles.item}
          >{`Total: ${cartItem.currency}${cartItem.totalPrice}`}</span>
        </div>
        <div className={styles.changeDetails}>
          <div className={styles.changeNumber}>
            <span>Quantity</span>
            <div className={styles.changeNumberOperations}>
              <FontAwesomeIcon
                icon={faMinus}
                className={styles.minusIcon}
                onClick={
                  cartItem.quantity < 2
                    ? undefined
                    : () => changeQuantity(cartItem.id, -1, state)
                }
                style={cartItem.quantity < 2 ? { opacity: 0.5 } : {}}
              />
              <span>{cartItem.quantity}</span>
              <FontAwesomeIcon
                icon={faPlus}
                className={styles.plusIcon}
                onClick={() => changeQuantity(cartItem.id, 1, state)}
              />
            </div>
          </div>
          <div className={styles.removeItem}>
            <FontAwesomeIcon
              icon={faTrash}
              className={styles.removeIcon}
              onClick={() => removeFromCart(cartItem.id, state)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
