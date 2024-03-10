import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propHeight1?: CSSProperties["height"];
  propFlex1?: CSSProperties["flex"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  propFlex,
  propMinWidth,
  propHeight,
  propWidth,
  propHeight1,
  propFlex1,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      height: propHeight,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propHeight, propWidth]);

  const product5n3Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      flex: propFlex1,
    };
  }, [propHeight1, propFlex1]);

  return (
    <div className={styles.product5nParent} style={frameDiv1Style}>
      <div className={styles.product5n} style={product5n3Style}>
        <div className={styles.productImage}>
          <img className={styles.imageIcon} alt="" src="/image-6@2x.png" />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.info}>
            <div className={styles.greenApple}>Green Lettuce</div>
            <div className={styles.price}>
              <div className={styles.div}>$9.00</div>
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
      <div className={styles.product5n1}>
        <div className={styles.productImageParent}>
          <div className={styles.productImage1}>
            <img className={styles.imageIcon1} alt="" src="/image-7@2x.png" />
          </div>
          <button className={styles.tag}>
            <div className={styles.sale}>Sale</div>
            <div className={styles.footerContainer}>50%</div>
          </button>
        </div>
        <div className={styles.productInfo1}>
          <div className={styles.info1}>
            <div className={styles.greenApple1}>Green Capsicum</div>
            <div className={styles.price1}>
              <div className={styles.div1}>$9.00</div>
              <div className={styles.ratingHalfStar}>$20.99</div>
            </div>
          </div>
          <div className={styles.rating1}>
            <img className={styles.ratingChild2} alt="" src="/star-1.svg" />
            <img className={styles.ratingChild3} alt="" src="/star-1.svg" />
            <img className={styles.ratingChild4} alt="" src="/star-1.svg" />
            <img className={styles.ratingChild5} alt="" src="/star-1.svg" />
            <img className={styles.ratingChild6} alt="" src="/star-5.svg" />
          </div>
          <img className={styles.addToCart1} alt="" src="/add-to-cart.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
