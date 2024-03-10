import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import Product5n2 from "../components/Product5n2";
import Product4x from "../components/Product4x";
import Product4x2 from "../components/Product4x2";
import Footer3 from "../components/Footer3";
import styles from "./ProductsDetailsAdditionalIn.module.css";

const ProductsDetailsAdditionalIn: FunctionComponent = () => {
  return (
    <div className={styles.productsDetailsAdditionalIn}>
      <footer className={styles.heading}>
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
        <FrameComponent7 />
        <FrameComponent6 />
        <FrameComponent5 />
        <section className={styles.headingInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.weightParent}>
                    <div className={styles.weight}>Weight:</div>
                    <div className={styles.color}>Color:</div>
                    <div className={styles.type}>Type:</div>
                    <div className={styles.category}>Category:</div>
                    <div className={styles.stockStatus}>Stock Status:</div>
                    <div className={styles.tags}>Tags:</div>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div}>03</div>
                    <div className={styles.green}>Green</div>
                    <div className={styles.organic}>Organic</div>
                    <div className={styles.vegetables}>Vegetables</div>
                    <div className={styles.available5413}>
                      <span>{`Available `}</span>
                      <span className={styles.span}>(5,413)</span>
                    </div>
                    <div className={styles.vegetablesParent}>
                      <div className={styles.vegetables1}>{`Vegetables, `}</div>
                      <div className={styles.healthy}> Healthy,</div>
                    </div>
                  </div>
                </div>
                <div className={styles.chineseWrapper}>
                  <div className={styles.chinese}>
                    {` `}
                    <span className={styles.chinese1}>Chinese</span>,
                  </div>
                </div>
                <div className={styles.cabbageWrapper}>
                  <div className={styles.cabbage}> Cabbage,</div>
                </div>
                <div className={styles.greenCabbageWrapper}>
                  <div className={styles.greenCabbage}> Green Cabbage,</div>
                </div>
              </div>
              <div className={styles.videoParent}>
                <img
                  className={styles.videoIcon}
                  loading="lazy"
                  alt=""
                  src="/video.svg"
                />
                <div className={styles.feature}>
                  <div className={styles.feature1}>
                    <img
                      className={styles.priceTag1Icon}
                      loading="lazy"
                      alt=""
                      src="/pricetag-1.svg"
                    />
                    <div className={styles.info}>
                      <div className={styles.discount}>64% Discount</div>
                      <div className={styles.saveYour64}>
                        Save your 64% money with us
                      </div>
                    </div>
                  </div>
                  <div className={styles.feature2}>
                    <img
                      className={styles.leaf1Icon}
                      alt=""
                      src="/leaf-1.svg"
                    />
                    <div className={styles.info1}>
                      <div className={styles.organic1}>100% Organic</div>
                      <div className={styles.organicVegetables}>
                        100% Organic Vegetables
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.headerFrame}>
              <div className={styles.heading1}>
                <h1 className={styles.relatedProducts}>Related Products</h1>
              </div>
              <div className={styles.product4xParent}>
                <Product5n2
                  image="/image3@2x.png"
                  greenApple="Green Apple"
                  searchIcon="$14.99"
                  propAlignSelf="unset"
                  propBorderRadius="8px"
                  propFlex="unset"
                  propMinWidth="unset"
                  propHeight="312px"
                  propDisplay="inline-block"
                  propDisplay1="inline-block"
                  propDisplay2="inline-block"
                  propTop="27px"
                  propRight="20px"
                />
                <Product4x
                  image="/image-14@2x.png"
                  greenApple="Chanise Cabbage"
                />
                <Product4x2
                  image="/image-24@2x.png"
                  greenApple="Green Capsicum"
                  propAlignSelf="unset"
                  propDisplay="inline-block"
                  propDisplay1="inline-block"
                />
                <Product4x
                  image="/image-33@2x.png"
                  greenApple="Ladies Finger"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer3 />
      </footer>
    </div>
  );
};

export default ProductsDetailsAdditionalIn;
