import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TestimonialCard.module.css";

export type TestimonialCardType = {
  image?: string;
  robertFox?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
};

const TestimonialCard: FunctionComponent<TestimonialCardType> = ({
  image,
  robertFox,
  propPadding,
  propFlex,
  propWidth,
}) => {
  const reviewerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const infoStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div className={styles.testimonialCard}>
      <img
        className={styles.methodPaymentIcon}
        alt=""
        src="/method-payment.svg"
      />
      <div className={styles.pellentesqueEuNibh}>
        Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
        Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.
        Donec sed neque eget
      </div>
      <div className={styles.client}>
        <div className={styles.reviewer} style={reviewerStyle}>
          <img className={styles.imageIcon} alt="" src={image} />
          <div className={styles.info} style={infoStyle}>
            <div className={styles.robertFox}>{robertFox}</div>
            <div className={styles.customer}>Customer</div>
          </div>
        </div>
        <div className={styles.rating}>
          <img className={styles.ratingChild} alt="" src="/star-6.svg" />
          <img className={styles.ratingItem} alt="" src="/star-6.svg" />
          <img className={styles.ratingInner} alt="" src="/star-6.svg" />
          <img className={styles.starIcon} alt="" src="/star-6.svg" />
          <img className={styles.ratingChild1} alt="" src="/star-6.svg" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
