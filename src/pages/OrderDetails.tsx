import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import DashboardNavigation from "../components/DashboardNavigation";
import OrderHistory from "../components/OrderHistory";
import Footer2 from "../components/Footer2";
import styles from "./OrderDetails.module.css";

const OrderDetails: FunctionComponent = () => {
  return (
    <div className={styles.orderDetails}>
      <FrameComponent4 />
      <section className={styles.orderDetailsInner}>
        <div className={styles.dashboardNavigationParent}>
          <DashboardNavigation />
          <OrderHistory />
        </div>
      </section>
      <Footer2
        methodApplePay="/methodapplepay1@2x.png"
        methodVisa="/methodvisa@2x.png"
        methodDiscover="/methoddiscover1@2x.png"
        methodMastercard="/methodmastercard1@2x.png"
      />
    </div>
  );
};

export default OrderDetails;
