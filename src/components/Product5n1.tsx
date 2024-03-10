import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Product5n1.module.css";

export type Product5n1Type = {
  image?: string;
  greenApple?: string;
  emptySpace?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propHeight1?: CSSProperties["height"];
};

const Product5n1: FunctionComponent<Product5n1Type> = ({
  image,
  greenApple,
  emptySpace,
  propAlignSelf,
  propHeight,
  propFlex,
  propMinWidth,
  propFlex1,
  propHeight1,
}) => {
  const product5n1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propHeight, propFlex, propMinWidth]);

  const productImageStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      height: propHeight1,
    };
  }, [propFlex1, propHeight1]);

  return (
    <div className={styles.product5n} style={product5n1Style}>
      <div className={styles.productImage} style={productImageStyle}>
        <img className={styles.imageIcon} alt="" src={image} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.info}>
          <div className={styles.greenApple}>{greenApple}</div>
          <div className={styles.price}>
            <div className={styles.emptySpace}>{emptySpace}</div>
          </div>
        </div>
        <div className={styles.rating}>
          <img className={styles.ratingChild} alt="" src="/star-1.svg" />
          <img className={styles.ratingItem} alt="" src="/star-1.svg" />
          <img className={styles.ratingInner} alt="" src="/star-1.svg" />
          <img className={styles.starIcon} alt="" src="/star-1.svg" />
          <img className={styles.ratingChild1} alt="" src="/star-5.svg" />
        </div>
        <img className={styles.addToCart} alt="" src="/add-to-cart-1.svg" />
      </div>
    </div>
  );
};

export default Product5n1;
