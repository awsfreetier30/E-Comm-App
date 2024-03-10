import { FunctionComponent } from "react";
import SubscribeOurNewsletter from "./SubscribeOurNewsletter";
import Footer1 from "./Footer1";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <section className={styles.footer}>
      <SubscribeOurNewsletter />
      <Footer1 methodDiscover="/methoddiscover@2x.png" />
    </section>
  );
};

export default Footer;
