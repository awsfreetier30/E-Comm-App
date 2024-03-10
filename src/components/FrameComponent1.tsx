import { FunctionComponent } from "react";
import Product5n2 from "./Product5n2";
import Product5n1 from "./Product5n1";
import Product5n from "./Product5n";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.homepageInner}>
      <div className={styles.discountBannarParent}>
        <div className={styles.discountBannar}>
          <div className={styles.info}>
            <div className={styles.summerSaleParent}>
              <div className={styles.summerSale}>Summer Sale</div>
              <div className={styles.off}>
                <span className={styles.span}>
                  <span className={styles.span1}>37%</span>
                  <span>{` `}</span>
                </span>
                <span>
                  <span>OFF</span>
                </span>
              </div>
            </div>
            <div className={styles.freeOnAll}>
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.shopNow}>Shop Now</div>
            <div className={styles.groupWrapper}>
              <img className={styles.groupIcon} alt="" src="/group-11.svg" />
            </div>
          </button>
        </div>
        <div className={styles.headingParent}>
          <div className={styles.heading}>
            <h1 className={styles.popularCategories}>Featured Products</h1>
            <div className={styles.buttonWrapper}>
              <button className={styles.button1}>
                <div className={styles.viewAll}>View All</div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="/group-5.svg"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.product5nParent}>
            <Product5n2
              image="/image@2x.png"
              greenApple="Green Apple"
              searchIcon="$14.99"
              propAlignSelf="unset"
              propBorderRadius="unset"
              propFlex="1"
              propMinWidth="260px"
              propHeight="240px"
              propDisplay="inline-block"
              propDisplay1="inline-block"
              propDisplay2="inline-block"
              propTop="23px"
              propRight="16px"
            />
            <Product5n1
              image="/image-2@2x.png"
              greenApple="Fresh Indian Malta"
              emptySpace="$20.00"
              propAlignSelf="unset"
              propHeight="unset"
              propFlex="1"
              propMinWidth="260px"
              propFlex1="unset"
              propHeight1="240px"
            />
            <Product5n
              propAlignSelf="unset"
              propHeight="unset"
              propFlex="1"
              propMinWidth="260px"
              propFlex1="unset"
              propHeight1="240px"
            />
            <Product5n1
              image="/image-6@2x.png"
              greenApple="Green Lettuce"
              emptySpace="$9.00"
              propAlignSelf="unset"
              propHeight="unset"
              propFlex="1"
              propMinWidth="260px"
              propFlex1="unset"
              propHeight1="240px"
            />
            <Product5n1
              image="/image-8@2x.png"
              greenApple="Eggplant"
              emptySpace="$34.00"
              propAlignSelf="unset"
              propHeight="unset"
              propFlex="1"
              propMinWidth="260px"
              propFlex1="unset"
              propHeight1="240px"
            />
          </div>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.textBlock}>
            <h1 className={styles.latestNews}>Latest News</h1>
          </div>
          <div className={styles.subtitleText}>
            <div className={styles.blogCard}>
              <div className={styles.image}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image-27@2x.png"
                />
                <div className={styles.date}>
                  <div className={styles.subscribeArea}>
                    <div className={styles.footerLinks}>18</div>
                  </div>
                  <div className={styles.nov}>Nov</div>
                </div>
              </div>
              <div className={styles.info1}>
                <div className={styles.info2}>
                  <div className={styles.info3}>
                    <div className={styles.categories}>
                      <img
                        className={styles.tag1Icon}
                        alt=""
                        src="/tag-1.svg"
                      />
                      <div className={styles.food}>Food</div>
                    </div>
                    <div className={styles.admin}>
                      <img
                        className={styles.user31Icon}
                        alt=""
                        src="/user-3-1.svg"
                      />
                      <div className={styles.byAdmin}>
                        <span>By</span>
                        <span className={styles.admin1}> Admin</span>
                      </div>
                    </div>
                    <div className={styles.comments}>
                      <img
                        className={styles.chatcentered1Icon}
                        alt=""
                        src="/chatcentered-1.svg"
                      />
                      <div className={styles.comments1}>65 Comments</div>
                    </div>
                  </div>
                  <div className={styles.curabiturPorttitorOrci}>
                    Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                    fermentum.
                  </div>
                </div>
                <div className={styles.button2}>
                  <div className={styles.readMore}>Read More</div>
                  <img className={styles.arrowIcon} alt="" src="/group-2.svg" />
                </div>
              </div>
            </div>
            <div className={styles.blogCard1}>
              <div className={styles.image1}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image-28@2x.png"
                />
                <div className={styles.date1}>
                  <div className={styles.div}>29</div>
                  <div className={styles.nov1}>Jan</div>
                </div>
              </div>
              <div className={styles.info4}>
                <div className={styles.info5}>
                  <div className={styles.info6}>
                    <div className={styles.categories1}>
                      <img
                        className={styles.tag1Icon1}
                        alt=""
                        src="/tag-1.svg"
                      />
                      <div className={styles.food1}>Food</div>
                    </div>
                    <div className={styles.admin2}>
                      <img
                        className={styles.user31Icon1}
                        alt=""
                        src="/user-3-1.svg"
                      />
                      <div className={styles.byAdmin1}>
                        <span>By</span>
                        <span className={styles.admin3}> Admin</span>
                      </div>
                    </div>
                    <div className={styles.comments2}>
                      <img
                        className={styles.chatcentered1Icon1}
                        alt=""
                        src="/chatcentered-1.svg"
                      />
                      <div className={styles.comments3}>65 Comments</div>
                    </div>
                  </div>
                  <div className={styles.curabiturPorttitorOrci1}>
                    Eget lobortis lorem lacinia. Vivamus pharetra semper,
                  </div>
                </div>
                <div className={styles.button3}>
                  <div className={styles.readMore1}>Read More</div>
                  <img
                    className={styles.arrowIcon1}
                    alt=""
                    src="/group-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.blogCard2}>
              <div className={styles.image2}>
                <img
                  className={styles.imageIcon2}
                  alt=""
                  src="/image-29@2x.png"
                />
                <div className={styles.date2}>
                  <div className={styles.wrapper}>
                    <div className={styles.div1}>21</div>
                  </div>
                  <div className={styles.nov2}>Feb</div>
                </div>
              </div>
              <div className={styles.info7}>
                <div className={styles.info8}>
                  <div className={styles.info9}>
                    <div className={styles.categories2}>
                      <img
                        className={styles.tag1Icon2}
                        alt=""
                        src="/tag-1.svg"
                      />
                      <div className={styles.food2}>Food</div>
                    </div>
                    <div className={styles.admin4}>
                      <img
                        className={styles.user31Icon2}
                        alt=""
                        src="/user-3-1.svg"
                      />
                      <div className={styles.byAdmin2}>
                        <span>By</span>
                        <span className={styles.admin5}> Admin</span>
                      </div>
                    </div>
                    <div className={styles.comments4}>
                      <img
                        className={styles.chatcentered1Icon2}
                        alt=""
                        src="/chatcentered-1.svg"
                      />
                      <div className={styles.comments5}>65 Comments</div>
                    </div>
                  </div>
                  <div className={styles.curabiturPorttitorOrci2}>
                    Maecenas blandit risus elementum mauris malesuada.
                  </div>
                </div>
                <div className={styles.button4}>
                  <div className={styles.readMore2}>Read More</div>
                  <img
                    className={styles.arrowIcon2}
                    alt=""
                    src="/group-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
