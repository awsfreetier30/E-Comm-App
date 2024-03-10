import { FunctionComponent } from "react";
import Navigation1 from "./Navigation1";
import styles from "./LogoContainer.module.css";

const LogoContainer: FunctionComponent = () => {
  return (
    <section className={styles.logoContainer}>
      <Navigation1
        mapPin="/map-pin.svg"
        group="/group.svg"
        group1="/group.svg"
        chevronDown="/chevron-down.svg"
        chevronDown1="/chevron-down-1.svg"
        chevronDown2="/chevron-down-1.svg"
        chevronDown3="/chevron-down-1.svg"
        phoneCall1="/phonecall-1.svg"
      />
    </section>
  );
};

export default LogoContainer;
