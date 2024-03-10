import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Product5n2.module.css";

export type Product5n2Type = {
  image?: string;
  greenApple?: string;
  searchIcon?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propDisplay1?: CSSProperties["display"];
  propDisplay2?: CSSProperties["display"];
  propTop?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
};

const Product5n2: FunctionComponent<Product5n2Type> = ({
  image,
  greenApple,
  searchIcon,
  propAlignSelf,
  propBorderRadius,
  propFlex,
  propMinWidth,
  propHeight,
  propDisplay,
  propDisplay1,
  propDisplay2,
  propTop,
  propRight,
}) => {
  const product5nStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      borderRadius: propBorderRadius,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propBorderRadius, propFlex, propMinWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const greenAppleStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const searchIconStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const searchInputStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const addToCartStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      right: propRight,
    };
  }, [propTop, propRight]);

  return (
    <div className={styles.product5n} style={product5nStyle}>
      <div className={styles.productImageParent} style={frameDivStyle}>
        <div className={styles.productImage}>
          <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
        </div>
        <button className={styles.tag}>
          <div className={styles.sale}>Sale</div>
          <div className={styles.myAccountTitle}>50%</div>
        </button>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.info}>
          <div className={styles.greenApple} style={greenAppleStyle}>
            {greenApple}
          </div>
          <div className={styles.price}>
            <div className={styles.searchIcon} style={searchIconStyle}>
              {searchIcon}
            </div>
            <div className={styles.searchInput} style={searchInputStyle}>
              $20.99
            </div>
          </div>
        </div>
        <div className={styles.rating}>
          <img className={styles.ratingChild} alt="" src="/star-1.svg" />
          <img className={styles.ratingItem} alt="" src="/star-1.svg" />
          <img className={styles.ratingInner} alt="" src="/star-1.svg" />
          <img className={styles.starIcon} alt="" src="/star-1.svg" />
          <img className={styles.ratingChild1} alt="" src="/star-5.svg" />
        </div>
        <img
          className={styles.addToCart}
          alt=""
          src="/add-to-cart.svg"
          style={addToCartStyle}
        />
      </div>
    </div>
  );
};

export default Product5n2;
