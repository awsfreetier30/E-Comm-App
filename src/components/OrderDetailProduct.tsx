import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./OrderDetailProduct.module.css";

export type OrderDetailProductType = {
  image?: string;
  redCapsicum?: string;
  accountArea?: string;
  x5?: string;
  emptyFramePlaceholder?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const OrderDetailProduct: FunctionComponent<OrderDetailProductType> = ({
  image,
  redCapsicum,
  accountArea,
  x5,
  emptyFramePlaceholder,
  propPadding,
  propWidth,
}) => {
  const helpLinksBlockStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.orderDetailProduct}>
      <div className={styles.buttonSubscribe}>
        <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
        <div className={styles.containerFooter}>
          <div className={styles.redCapsicum}>{redCapsicum}</div>
        </div>
      </div>
      <div className={styles.helpLinksBlock} style={helpLinksBlockStyle}>
        <div className={styles.accountArea}>{accountArea}</div>
      </div>
      <div className={styles.inputFieldSubscription}>
        <div className={styles.x5}>{x5}</div>
      </div>
      <div
        className={styles.emptyFramePlaceholderWrapper}
        style={frameDiv2Style}
      >
        <div className={styles.emptyFramePlaceholder}>
          {emptyFramePlaceholder}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailProduct;
