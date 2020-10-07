import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Context as ProductContext } from "../../../context/productContext";
import styles from "./styles/modal.module.scss";

class NameModal extends Component {
  state = {
    name: "",
    payed: false,
  };

  handlePay(name) {
    if (name) {
      this.setState({ payed: true });
    }
  }

  render() {
    const { name, payed } = this.state;
    const { state, resetCart } = this.context;

    return (
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onExit={payed ? () => resetCart(state) : undefined}
      >
        {!payed ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                User's Name
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Enter your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className={styles.buttonContainer}>
                  <div
                    className={styles.payButton}
                    role="button"
                    onClick={() => this.handlePay(name)}
                  >
                    Finish
                  </div>
                </Form.Group>
              </Form>
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <div className={styles.successTitle}>
                  <FontAwesomeIcon
                    className={styles.thumbIcon}
                    icon={faThumbsUp}
                  />
                  <span>Success</span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className={styles.successBody}>
                <FontAwesomeIcon
                  className={styles.checkIcon}
                  icon={faCheckCircle}
                />
                <span>{`${name}, you have payed for your cart`}</span>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    );
  }
}

NameModal.contextType = ProductContext;

export { NameModal };
