import { FunctionComponent } from "react";
import LogoContainer from "../components/LogoContainer";
import FrameComponent2 from "../components/FrameComponent2";
import Logo from "../components/Logo";
import FrameComponent1 from "../components/FrameComponent1";
import Testimonials from "../components/Testimonials";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <LogoContainer />
      <FrameComponent2 />
      <Logo />
      <FrameComponent1 />
      <Testimonials />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default Homepage;
