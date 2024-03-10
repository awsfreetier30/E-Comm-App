import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

const FrameComponent7: FunctionComponent = () => {
  return (
    <section className={styles.breadcrumbsWrapper}>
      <div className={styles.breadcrumbs}>
        <div className={styles.location}>
          <img className={styles.home11Icon} alt="" src="/home1-11.svg" />
          <img className={styles.groupIcon} alt="" src="/group-21@2x.png" />
          <div className={styles.home}>Home</div>
          <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
          <div className={styles.home1}>Home</div>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
          </div>
          <div className={styles.home2}>Category</div>
          <div className={styles.vectorContainer}>
            <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
          </div>
          <div className={styles.home3}>Vegetables</div>
          <div className={styles.vectorFrame}>
            <img className={styles.vectorIcon3} alt="" src="/vector-2.svg" />
          </div>
          <div className={styles.vegetables}>Chinese Cabbage</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
