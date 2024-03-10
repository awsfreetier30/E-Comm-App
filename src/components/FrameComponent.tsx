import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.homepageInner}>
      <div className={styles.companyLogoParent}>
        <div className={styles.companyLogo}>
          <img
            className={styles.socialMediaFrames}
            alt=""
            src="/vector-3.svg"
          />
          <div className={styles.companyLogoChild} />
          <img className={styles.mango1Icon} alt="" src="/mango1.svg" />
          <div className={styles.companyLogoItem} />
          <img className={styles.groupIcon} alt="" src="/group-13.svg" />
          <div className={styles.companyLogoInner} />
          <img className={styles.foodIcon} alt="" src="/food.svg" />
          <div className={styles.lineDiv} />
          <img
            className={styles.bookoffCorporationLogoIcon}
            loading="lazy"
            alt=""
            src="/bookoffcorporationlogo.svg"
          />
          <div className={styles.companyLogoChild1} />
          <img className={styles.groupIcon1} alt="" src="/group-14.svg" />
        </div>
        <div className={styles.followUsOnInstagram}>
          <div className={styles.textFollowusonInstagram}>
            <h1 className={styles.followUsOn}>Follow us on Instagram</h1>
          </div>
          <div className={styles.frameNewsletter}>
            <img
              className={styles.instagramPostIcon}
              loading="lazy"
              alt=""
              src="/-instagram-post@2x.png"
            />
            <div className={styles.instagramPost}>
              <img
                className={styles.instagramPostIcon1}
                alt=""
                src="/-instagram-post-1@2x.png"
              />
              <img className={styles.icons} alt="" src="/icons.svg" />
            </div>
            <img
              className={styles.instagramPostIcon2}
              alt=""
              src="/-instagram-post-2@2x.png"
            />
            <img
              className={styles.instagramPostIcon3}
              alt=""
              src="/-instagram-post-3@2x.png"
            />
            <img
              className={styles.instagramPostIcon4}
              alt=""
              src="/-instagram-post-4@2x.png"
            />
            <img
              className={styles.instagramPostIcon5}
              alt=""
              src="/-instagram-post-5@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
