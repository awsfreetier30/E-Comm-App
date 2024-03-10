import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className={styles.navigationWrapper}>
      <div className={styles.navigation}>
        <button className={styles.navLink}>
          <div className={styles.descriptions}>Descriptions</div>
        </button>
        <button className={styles.navLink1}>
          <div className={styles.descriptions1}>Additional Information</div>
        </button>
        <button className={styles.navLink2}>
          <div className={styles.descriptions2}>Customer Feedback</div>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent5;
