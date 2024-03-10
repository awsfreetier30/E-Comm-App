import { FunctionComponent } from "react";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonials.module.css";

const Testimonials: FunctionComponent = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.heading}>
        <h1 className={styles.clientTestimonials}>Client Testimonials</h1>
        <div className={styles.arrow}>
          <img className={styles.aoorwIcon} alt="" src="/aoorw.svg" />
          <img className={styles.aoorwIcon1} alt="" src="/aoorw-1.svg" />
        </div>
      </div>
      <div className={styles.testimonial}>
        <TestimonialCard image="/image-30@2x.png" robertFox="Robert Fox" />
        <TestimonialCard
          image="/image-31@2x.png"
          robertFox="Dianne Russell"
          propPadding="unset"
          propFlex="unset"
          propWidth="118px"
        />
        <TestimonialCard
          image="/image-32@2x.png"
          robertFox="Eleanor Pena"
          propPadding="unset"
          propFlex="1"
          propWidth="unset"
        />
      </div>
    </section>
  );
};

export default Testimonials;
