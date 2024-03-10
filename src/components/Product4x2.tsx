import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Product4x2.module.css";

export type Product4x2Type = {
  image?: string;
  greenApple?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propDisplay?: CSSProperties["display"];
  propDisplay1?: CSSProperties["display"];
};

const Product4x2: FunctionComponent<Product4x2Type> = ({
  image,
  greenApple,
  propAlignSelf,
  propDisplay,
  propDisplay1,
}) => {
  const product4xStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const greenApple1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const div4Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  return (
    <div className={styles.product4x} style={product4xStyle}>
      <div className={styles.productImageParent}>
        <div className={styles.productImage}>
          <img className={styles.imageIcon} alt="" src={image} />
        </div>
        <div className={styles.addToWishlistParent}>
          <img
            className={styles.addToWishlist}
            alt=""
            src="/add-to-wishlist.svg"
          />
          <img className={styles.quickViewIcon} alt="" src="/quick-view.svg" />
        </div>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.info}>
          <div className={styles.greenApple} style={greenApple1Style}>
            {greenApple}
          </div>
          <div className={styles.price}>
            <div className={styles.div} style={div4Style}>
              $14.99
            </div>
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
        <img className={styles.addToCart} alt="" src="/add-to-cart-4.svg" />
      </div>
    </div>
  );
};

export default Product4x2;
