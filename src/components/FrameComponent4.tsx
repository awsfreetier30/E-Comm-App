import { FunctionComponent } from "react";
import Navigation1 from "./Navigation1";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.navigationParent}>
      <Navigation1
        mapPin="/map-pin1.svg"
        group="/group1.svg"
        group1="/group1.svg"
        chevronDown="/chevron-down2.svg"
        chevronDown1="/chevron-down-11.svg"
        chevronDown2="/chevron-down-11.svg"
        chevronDown3="/chevron-down-11.svg"
        phoneCall1="/phonecall-11.svg"
        contactFlex="unset"
        contactAlignSelf="stretch"
        mapPinIconBackgroundColor="1px solid #333"
        linksColor="#b3b3b3"
        linksDisplay="inline-block"
        groupIconColor="#b3b3b3"
        groupIconDisplay="inline-block"
        groupIconColor1="#b3b3b3"
        groupIconDisplay1="inline-block"
        signInBorderRight="1px solid var(--gray-scale-gray-300)"
        signInOpacity="0.52"
        signUpColor="#b3b3b3"
        signUpDisplay="inline-block"
        midleColor="#b3b3b3"
        midleDisplay="inline-block"
        cTAButtonColor="#b3b3b3"
        cTAButtonDisplay="inline-block"
        logoBackgroundColor="#fff"
        logoBoxShadow="0px -1px 0px #e6e6e6 inset"
        searechDisplay="inline-block"
        navLinksDisplay="inline-block"
        navLinksDisplay1="inline-block"
        navLinksBackgroundColor="unset"
        navLinksColor="#00b307"
        navLinksDisplay2="inline-block"
        navLinksColor1="#666"
        navLinksDisplay3="inline-block"
        navLinksColor2="#666"
        navLinksDisplay4="inline-block"
        navLinksColor3="#666"
        navLinksDisplay5="inline-block"
        navLinksColor4="#666"
        navLinksDisplay6="inline-block"
        callNowColor="#666"
        callNowDisplay="inline-block"
        propColor="#1a1a1a"
        propDisplay="inline-block"
      />
      <div className={styles.breadcrumbs}>
        <div className={styles.location}>
          <img
            className={styles.home11Icon}
            loading="lazy"
            alt=""
            src="/home1-1.svg"
          />
          <div className={styles.groupWrapper}>
            <img className={styles.groupIcon} alt="" src="/group-21@2x.png" />
          </div>
          <div className={styles.home}>Home</div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.home1}>Home</div>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <div className={styles.home2}>Account</div>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
          </div>
          <div className={styles.home3}>Order History</div>
          <div className={styles.vectorContainer}>
            <img className={styles.vectorIcon3} alt="" src="/vector-1.svg" />
          </div>
          <div className={styles.vegetables}>Order Detail</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
