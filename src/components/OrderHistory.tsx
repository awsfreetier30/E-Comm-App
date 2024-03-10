import { FunctionComponent } from "react";
import OrderDetailProduct from "./OrderDetailProduct";
import styles from "./OrderHistory.module.css";

const OrderHistory: FunctionComponent = () => {
  return (
    <div className={styles.orderHistory}>
      <div className={styles.bg} />
      <div className={styles.heading}>
        <div className={styles.frameSubscribe}>
          <h3 className={styles.orderDetails}>Order Details</h3>
          <div className={styles.rectangleInputField}>
            <div className={styles.div}>•</div>
          </div>
          <div className={styles.rectangleInputField1}>
            <div className={styles.april242021}>April 24, 2021</div>
          </div>
          <div className={styles.rectangleInputField2}>
            <div className={styles.div1}>•</div>
          </div>
          <div className={styles.rectangleInputField3}>
            <div className={styles.products}>3 Products</div>
          </div>
        </div>
        <div className={styles.contactLinks}>
          <div className={styles.backToList}>Back to List</div>
        </div>
      </div>
      <div className={styles.textCompany}>
        <div className={styles.cTAProxygmailcom}>
          <div className={styles.socialMediaIcons}>
            <div className={styles.billingShipping}>
              <div className={styles.billingShippingChild} />
              <div className={styles.textCategories}>
                <div className={styles.linksFruitVegetables}>
                  <div className={styles.linksMeatFish}>
                    <div className={styles.billingAddress}>Billing Address</div>
                    <div className={styles.shippingAddress}>
                      Shipping Address
                    </div>
                  </div>
                </div>
                <div className={styles.linksBeautyHealth}>
                  <div className={styles.copyrightFrame} />
                  <div className={styles.copyrightFrame1} />
                </div>
                <div className={styles.methodPaymentIcons}>
                  <div className={styles.cartFrame}>
                    <div className={styles.headerGroup}>
                      <div className={styles.headerText}>
                        <div className={styles.dainneRussell}>
                          Dainne Russell
                        </div>
                        <div className={styles.parkerRdAllentown}>
                          4140 Parker Rd. Allentown, New Mexico 31134
                        </div>
                      </div>
                      <div className={styles.rectangle}>
                        <div className={styles.inputField}>
                          <div className={styles.email}>Email</div>
                          <div className={styles.dainneressellgmailcom}>
                            dainne.ressell@gmail.com
                          </div>
                        </div>
                        <div className={styles.text}>
                          <div className={styles.phone}>Phone</div>
                          <div className={styles.frame}>(671) 555-0110</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.headerGroup1}>
                      <div className={styles.dainneRussellParent}>
                        <div className={styles.dainneRussell1}>
                          Dainne Russell
                        </div>
                        <div className={styles.parkerRdAllentown1}>
                          4140 Parker Rd. Allentown, New Mexico 31134
                        </div>
                      </div>
                      <div className={styles.frameParent}>
                        <div className={styles.emailParent}>
                          <div className={styles.email1}>Email</div>
                          <div className={styles.dainneressellgmailcom1}>
                            dainne.ressell@gmail.com
                          </div>
                        </div>
                        <div className={styles.phoneParent}>
                          <div className={styles.phone1}>Phone</div>
                          <div className={styles.div2}>(671) 555-0110</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.billingShippingItem}
                alt=""
                src="/line-31.svg"
              />
            </div>
            <div className={styles.total}>
              <div className={styles.image}>
                <div className={styles.button}>
                  <div className={styles.dropdown}>
                    <div className={styles.orderId}>Order ID:</div>
                    <div className={styles.frame1}>#4152</div>
                  </div>
                  <img
                    className={styles.buttonChild}
                    loading="lazy"
                    alt=""
                    src="/line-20.svg"
                  />
                  <div className={styles.dropdown1}>
                    <div className={styles.paymentMethod}>Payment Method:</div>
                    <div className={styles.paypal}>Paypal</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup} />
              <div className={styles.text1}>
                <div className={styles.header}>
                  <div className={styles.subtotal}>
                    <div className={styles.subtotal1}>Subtotal:</div>
                    <div className={styles.frame2}>$365.00</div>
                  </div>
                  <div className={styles.discount}>
                    <div className={styles.frame3} />
                    <div className={styles.text2}>
                      <div className={styles.discount1}>Discount</div>
                      <div className={styles.frame4}>20%</div>
                    </div>
                  </div>
                  <div className={styles.shipping}>
                    <div className={styles.shippingChild} />
                    <div className={styles.shippingParent}>
                      <div className={styles.shipping1}>Shipping</div>
                      <div className={styles.free}>Free</div>
                    </div>
                  </div>
                  <div className={styles.total1}>
                    <div className={styles.totalChild} />
                    <div className={styles.totalParent}>
                      <div className={styles.total2}>Total</div>
                      <div className={styles.div3}>$84.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputFieldWrapper}>
            <div className={styles.inputField1}>
              <div className={styles.button1}>
                <div className={styles.progress}>
                  <img
                    className={styles.lineIcon}
                    loading="lazy"
                    alt=""
                    src="/line.svg"
                  />
                  <img
                    className={styles.progressTrackerPoint}
                    alt=""
                    src="/progress-tracker-point.svg"
                  />
                  <div className={styles.progressTrackerPoint1}>
                    <div className={styles.container} />
                    <div className={styles.frame5}>02</div>
                  </div>
                  <div className={styles.progressTrackerPoint2}>
                    <div className={styles.container1} />
                    <div className={styles.div4}>03</div>
                  </div>
                  <div className={styles.progressTrackerPoint3}>
                    <div className={styles.container2} />
                    <div className={styles.div5}>04</div>
                  </div>
                </div>
              </div>
              <div className={styles.text3}>
                <div className={styles.orderReceived}>Order received</div>
                <div className={styles.text4}>
                  <div className={styles.processing}>Processing</div>
                </div>
                <div className={styles.text5}>
                  <div className={styles.onTheWay}>On the way</div>
                </div>
                <div className={styles.delivered}>Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headingParent}>
        <div className={styles.heading1}>
          <div className={styles.headingChild} />
          <div className={styles.imageLogo}>
            <div className={styles.product}>Product</div>
          </div>
          <div className={styles.imageLogo1}>
            <div className={styles.price}>Price</div>
          </div>
          <div className={styles.quantity}>Quantity</div>
          <div className={styles.subtotal2}>Subtotal</div>
        </div>
        <div className={styles.buttonSubscribeWrapper}>
          <div className={styles.buttonSubscribe}>
            <OrderDetailProduct
              image="/image1@2x.png"
              redCapsicum="Red Capsicum"
              accountArea="$14.00"
              x5="x5"
              emptyFramePlaceholder="$70.00"
            />
            <div className={styles.devider} />
            <OrderDetailProduct
              image="/image-12@2x.png"
              redCapsicum="Green Capsicum"
              accountArea="$14.00"
              x5="x2"
              emptyFramePlaceholder="$28.00"
              propPadding="var(--padding-6xl) var(--padding-19xl) 0px 0px"
              propWidth="unset"
            />
            <div className={styles.devider1} />
            <OrderDetailProduct
              image="/image-22@2x.png"
              redCapsicum="Green Chili"
              accountArea="$26.70"
              x5="x10"
              emptyFramePlaceholder="$267.00"
              propPadding="var(--padding-6xl) var(--padding-16xl) 0px 0px"
              propWidth="46.5px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
