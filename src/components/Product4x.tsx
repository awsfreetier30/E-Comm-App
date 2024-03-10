import { FunctionComponent } from "react";
import styles from "./Product4x.module.css";

export type Product4xType = {
  image?: string;
  greenApple?: string;
};

const Product4x: FunctionComponent<Product4xType> = ({ image, greenApple }) => {
  return (
    <div className={styles.product4x}>
      <div className={styles.productImage}>
        <img className={styles.imageIcon} alt="" src={image} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.info}>
          <div className={styles.greenApple}>{greenApple}</div>
          <div className={styles.price}>
            <div className={styles.div}>$14.99</div>
            <div className={styles.div1}>$20.99</div>
          </div>
        </div>
        <div className={styles.rating}>
          <img className={styles.ratingChild} alt="" src="/star-1.svg" />
          <img className={styles.ratingItem} alt="" src="/star-1.svg" />
          <img className={styles.ratingInner} alt="" src="/star-1.svg" />
          <img className={styles.starIcon} alt="" src="/star-1.svg" />
          <img className={styles.ratingChild1} alt="" src="/star-5.svg" />
        </div>
        <img className={styles.addToCart} alt="" src="/add-to-cart.svg" />
      </div>
    </div>
  );
};

export default Product4x;
