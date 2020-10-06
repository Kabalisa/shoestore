import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Layout, Button } from "../common";
import styles from "./styles/home.module.scss";

const Home = () => {
  return (
    <Layout>
      <div className={styles.subContainer}>
        <Carousel
          className={styles.carousel}
          nextIcon={
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              className={styles.arrowIcon}
            />
          }
          prevIcon={
            <FontAwesomeIcon
              icon={faArrowCircleLeft}
              className={styles.arrowIcon}
            />
          }
        >
          <Carousel.Item className={styles.carouselItem}>
            <div className={styles.carouselItemDiv}>
              <div>
                <img
                  className={styles.image}
                  src="https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Air-Jordan-1-Retro-High-OG-Fearless-1_2000x.png?v=1571135078"
                  alt="Gebeya shoe"
                />
              </div>
              <div className={styles.captionContainer}>
                <h3 className={styles.itemName}>First slide label</h3>
                <p className={styles.itemPrice}>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
              <div>
                <Button />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </Layout>
  );
};

export { Home };
