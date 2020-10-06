import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Layout, CartItem, NameModal } from "../common";
import styles from "./styles/cart.module.scss";

class Cart extends Component {
  state = {
    modalShow: false,
  };

  setModalShow = () => {
    this.setState({ modalShow: !this.state.modalShow });
  };

  render() {
    const { modalShow } = this.state;

    return (
      <Layout>
        <div className={styles.subContainer}>
          <div
            className={styles.cartContainer}
            style={true ? {} : { justifyContent: "center" }}
          >
            {true ? (
              <>
                <div className={styles.cartItemContainer}>
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                </div>
                <div className={styles.checkout}>
                  <div className={styles.totalPrice}>Total Price: $1000</div>
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
                <div className={styles.payButton} style={{ fontSize: 18 }}>
                  Keep Shopping
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export { Cart };
