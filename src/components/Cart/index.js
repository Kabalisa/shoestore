import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Layout, CartItem, NameModal } from "../common";
import { Context as ProductContext } from "../../context/productContext";
import styles from "./styles/cart.module.scss";

class Cart extends Component {
  state = {
    modalShow: false,
  };

  setModalShow = () => {
    this.setState({ modalShow: !this.state.modalShow });
  };

  render() {
    const {
      state: {
        cart: { cartItems, cartTotalPrice },
      },
    } = this.context;
    const { modalShow } = this.state;

    return (
      <Layout>
        <div className={styles.subContainer}>
          <div
            className={styles.cartContainer}
            style={cartItems.length ? {} : { justifyContent: "center" }}
          >
            {cartItems.length ? (
              <>
                <div className={styles.cartItemContainer}>
                  {cartItems.map((cartItem) => {
                    return <CartItem cartItem={cartItem} key={cartItem.id} />;
                  })}
                </div>
                <div className={styles.checkout}>
                  <div
                    className={styles.totalPrice}
                  >{`Total Price: $${cartTotalPrice}`}</div>
                  <div
                    className={styles.payButton}
                    role="button"
                    onClick={this.setModalShow}
                  >
                    Pay
                  </div>
                  <NameModal
                    show={modalShow}
                    onHide={() => this.setModalShow()}
                  />
                </div>
              </>
            ) : (
              <div className={styles.emptyCart}>
                <FontAwesomeIcon
                  className={styles.cartIcon}
                  icon={faShoppingCart}
                />
                <div>Your cart is empty</div>
                <Link to="/" className={styles.link}>
                  <div className={styles.payButton} style={{ fontSize: 18 }}>
                    Keep Shopping
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

Cart.contextType = ProductContext;

export { Cart };
