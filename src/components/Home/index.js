import React, { useContext, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";
import { Layout, Button } from "../common";
import { Context as ProductContext } from "../../context/productContext";
import styles from "./styles/home.module.scss";

const Home = () => {
  const {
    state: { products, loading },
    fetchProducts,
  } = useContext(ProductContext);

  useEffect(() => {
    let isActive = true;

    if (isActive) {
      fetchProducts();
    }

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <Layout>
      <div className={styles.subContainer}>
        {loading ? (
          <Spinner animation="grow" color="#9124bc" />
        ) : !products.length ? (
          <>
            <FontAwesomeIcon icon={faSmile} className={styles.smileIcon} />
            <div className={styles.noProduct}>No products available</div>
          </>
        ) : (
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
            interval={300000}
          >
            {products.map((product) => (
              <Carousel.Item className={styles.carouselItem} key={product.id}>
                <div className={styles.carouselItemDiv}>
                  <div>
                    <img
                      className={styles.image}
                      src={product.imageUrl}
                      alt="Gebeya shoe"
                    />
                  </div>
                  <div className={styles.captionContainer}>
                    <h3 className={styles.itemName}>{product.nom}</h3>
                    <p className={styles.itemPrice}>
                      {`${product.currency}${product.price}`}
                    </p>
                  </div>
                  <div>
                    <Button isIncart={product.isIncart} />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    </Layout>
  );
};

export { Home };
