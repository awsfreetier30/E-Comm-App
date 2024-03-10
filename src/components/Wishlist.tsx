import { FunctionComponent } from "react";
import Navigation1 from "./Navigation1";
import Footer2 from "./Footer2";
import styles from "./Wishlist.module.css";

const Wishlist: FunctionComponent = () => {
  return (
    <form className={styles.wishlist}>
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
      <section className={styles.breadcrumbsWrapper}>
        <div className={styles.breadcrumbs}>
          <div className={styles.location}>
            <img className={styles.home11Icon} alt="" src="/home1-1.svg" />
            <img className={styles.groupIcon} alt="" src="/group-21@2x.png" />
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            <div className={styles.home1}>Home</div>
            <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
            <div className={styles.home2}>Home</div>
            <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
            <div className={styles.home3}>Vegetables</div>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon3} alt="" src="/vector2.svg" />
            </div>
            <div className={styles.vegetables}>Wishlist</div>
          </div>
        </div>
      </section>
      <section className={styles.wishlistInner}>
        <div className={styles.frameParent}>
          <div className={styles.myWishlistWrapper}>
            <h1 className={styles.myWishlist}>My Wishlist</h1>
          </div>
          <div className={styles.wishlist1}>
            <div className={styles.headerWrapper}>
              <div className={styles.header}>
                <div className={styles.devider}>
                  <div className={styles.product}>Product</div>
                </div>
                <div className={styles.price}>price</div>
                <div className={styles.stockStatus}>Stock Status</div>
              </div>
            </div>
            <div className={styles.price1} />
            <div className={styles.inputField}>
              <div className={styles.outofStock}>
                <div className={styles.wishlistProduct}>
                  <div className={styles.product1}>
                    <img
                      className={styles.imageIcon}
                      loading="lazy"
                      alt=""
                      src="/image2@2x.png"
                    />
                    <div className={styles.greenCapsicumWrapper}>
                      <div className={styles.greenCapsicum}>Green Capsicum</div>
                    </div>
                  </div>
                  <div className={styles.wishlistProductInner}>
                    <div className={styles.socialMediaParent}>
                      <div className={styles.socialMedia}>
                        <div className={styles.price2}>
                          <div className={styles.inStock}>$14.99</div>
                          <div className={styles.outStockBtn}>$20.99</div>
                        </div>
                      </div>
                      <div className={styles.socialMediaFooter}>
                        <button className={styles.stockStatus1}>
                          <div className={styles.inStock1}>In Stock</div>
                        </button>
                      </div>
                      <div className={styles.action}>
                        <button className={styles.button}>
                          <div className={styles.normal}>Add to Cart</div>
                        </button>
                        <div className={styles.button1}>
                          <img
                            className={styles.closeIcon}
                            loading="lazy"
                            alt=""
                            src="/close.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.outofStock1}>
                <div className={styles.devider1} />
              </div>
              <div className={styles.outofStock2}>
                <div className={styles.wishlistProduct1}>
                  <div className={styles.productWrapper}>
                    <div className={styles.product2}>
                      <img
                        className={styles.imageIcon1}
                        alt=""
                        src="/image-13@2x.png"
                      />
                      <div className={styles.greenCapsicumContainer}>
                        <div className={styles.greenCapsicum1}>
                          Chinese Cabbage
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.priceWrapper}>
                    <div className={styles.price3}>
                      <div className={styles.div}>$45.00</div>
                    </div>
                  </div>
                  <div className={styles.socialMediaFooter1}>
                    <button className={styles.stockStatus2}>
                      <div className={styles.inStock2}>In Stock</div>
                    </button>
                  </div>
                  <div className={styles.action1}>
                    <button className={styles.button2}>
                      <div className={styles.normal1}>Add to Cart</div>
                    </button>
                    <div className={styles.button3}>
                      <img
                        className={styles.closeIcon1}
                        alt=""
                        src="/close.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.outofStock3}>
                <div className={styles.devider2} />
              </div>
              <div className={styles.outofStock4}>
                <div className={styles.wishlistProduct2}>
                  <div className={styles.productParent}>
                    <div className={styles.product3}>
                      <img
                        className={styles.imageIcon2}
                        alt=""
                        src="/image-23@2x.png"
                      />
                      <div className={styles.greenCapsicumFrame}>
                        <div className={styles.greenCapsicum2}>
                          Fresh Sujapuri Mango
                        </div>
                      </div>
                    </div>
                    <div className={styles.priceContainer}>
                      <div className={styles.price4}>
                        <div className={styles.div1}>$09.00</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wishlistProductChild}>
                    <div className={styles.frameGroup}>
                      <div className={styles.stockStatusWrapper}>
                        <button className={styles.stockStatus3}>
                          <div className={styles.outOfStock}>Out of Stock</div>
                        </button>
                      </div>
                      <div className={styles.action2}>
                        <button className={styles.button4}>
                          <div className={styles.normal2}>Add to Cart</div>
                        </button>
                        <div className={styles.button5}>
                          <img
                            className={styles.closeIcon2}
                            alt=""
                            src="/close.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.devider3} />
            </div>
            <div className={styles.subscribeForm}>
              <div className={styles.socialMediaFrame}>
                <div className={styles.shareButton}>
                  <div className={styles.share}>Share:</div>
                </div>
                <img
                  className={styles.socialMediaIcon}
                  loading="lazy"
                  alt=""
                  src="/social-media.svg"
                />
                <img
                  className={styles.socialMediaIcon1}
                  alt=""
                  src="/social-media-1.svg"
                />
                <img
                  className={styles.socialMediaIcon2}
                  alt=""
                  src="/social-media-2.svg"
                />
                <img
                  className={styles.socialMediaIcon3}
                  alt=""
                  src="/social-media-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2
        methodApplePay="/methodapplepay11@2x.png"
        methodVisa="/methodvisa1@2x.png"
        methodDiscover="/methoddiscover11@2x.png"
        methodMastercard="/methodmastercard11@2x.png"
        propDisplay="inline-block"
        propDisplay1="inline-block"
        propDisplay2="inline-block"
        propDisplay3="inline-block"
        propDisplay4="inline-block"
        propDisplay5="inline-block"
        propDisplay6="inline-block"
        propDisplay7="inline-block"
        propDisplay8="inline-block"
        propDisplay9="inline-block"
        propDisplay10="inline-block"
        propDisplay11="inline-block"
        propDisplay12="inline-block"
        propDisplay13="inline-block"
        propDisplay14="inline-block"
        propDisplay15="inline-block"
        propDisplay16="inline-block"
        propDisplay17="inline-block"
        propDisplay18="inline-block"
        propDisplay19="inline-block"
        propDisplay20="inline-block"
        propDisplay21="inline-block"
        propDisplay22="inline-block"
        propDisplay23="inline-block"
        propDisplay24="inline-block"
        propDisplay25="inline-block"
        propDisplay26="inline-block"
        propDisplay27="inline-block"
        propDisplay28="inline-block"
      />
    </form>
  );
};

export default Wishlist;
