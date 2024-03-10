import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Product5n.module.css";

export type Product5nType = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propHeight1?: CSSProperties["height"];
};

const Product5n: FunctionComponent<Product5nType> = ({
  propAlignSelf,
  propHeight,
  propFlex,
  propMinWidth,
  propFlex1,
  propHeight1,
}) => {
  const product5n2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propHeight, propFlex, propMinWidth]);

  const productImage1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      height: propHeight1,
    };
  }, [propFlex1, propHeight1]);

  return (
    <div className={styles.product5n} style={product5n2Style}>
      <div className={styles.productImage} style={productImage1Style}>
        <img className={styles.imageIcon} alt="" src="/image-4@2x.png" />
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
          <div className={styles.greenApple}>Chinese cabbage</div>
          <div className={styles.price}>
            <div className={styles.div}>$12.00</div>
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

export default Product5n;
