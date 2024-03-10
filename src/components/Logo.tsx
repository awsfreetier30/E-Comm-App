import { FunctionComponent } from "react";
import Product5n1 from "./Product5n1";
import FrameComponent3 from "./FrameComponent3";
import Product5n2 from "./Product5n2";
import styles from "./Logo.module.css";

const Logo: FunctionComponent = () => {
  return (
    <section className={styles.logo}>
      <div className={styles.popularProducts}>
        <div className={styles.popularProductsChild} />
        <div className={styles.div}>:</div>
        <div className={styles.heading}>
          <h1 className={styles.popularCategories}>Hot Deals</h1>
          <div className={styles.rectangle}>
            <button className={styles.button}>
              <div className={styles.viewAll}>View All</div>
              <div className={styles.navbarLinks}>
                <img className={styles.groupIcon} alt="" src="/group-5.svg" />
              </div>
            </button>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.bigProductsParent}>
            <div className={styles.bigProducts}>
              <div className={styles.image}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image-10@2x.png"
                />
                <div className={styles.image1}>
                  <div className={styles.tagParent}>
                    <button className={styles.tag}>
                      <div className={styles.sale}>Sale</div>
                      <div className={styles.footerLinksContainer}>50%</div>
                    </button>
                    <div className={styles.tag1}>
                      <div className={styles.bestSale}>Best Sale</div>
                    </div>
                  </div>
                </div>
                <div className={styles.button1}>
                  <img
                    className={styles.wishlistIcon}
                    alt=""
                    src="/wishlist.svg"
                  />
                  <button className={styles.button2}>
                    <div className={styles.addToCart}>Add to Cart</div>
                    <input className={styles.hamburgerIcon} type="checkbox" />
                  </button>
                  <img
                    className={styles.quickViewIcon}
                    alt=""
                    src="/quick-view-1.svg"
                  />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.chineseCabbage}>Chinese cabbage</div>
                <div className={styles.inputField}>
                  <div className={styles.price}>
                    <div className={styles.buttonFrame}>$12.00</div>
                    <div className={styles.categoriesFrame}>$24.00</div>
                  </div>
                </div>
                <div className={styles.myAccountLinks}>
                  <div className={styles.rating}>
                    <img
                      className={styles.ratingChild}
                      alt=""
                      src="/star-1-10.svg"
                    />
                    <img
                      className={styles.ratingItem}
                      alt=""
                      src="/star-1-10.svg"
                    />
                    <img
                      className={styles.ratingInner}
                      alt=""
                      src="/star-1-10.svg"
                    />
                    <img
                      className={styles.starIcon}
                      alt=""
                      src="/star-1-10.svg"
                    />
                    <img
                      className={styles.ratingChild1}
                      alt=""
                      src="/star-1-10.svg"
                    />
                    <div className={styles.wishlistButton}>
                      <div className={styles.feedback}> (524 Feedback)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.methodPaymentButtons}>
                <div className={styles.hurryUpOfferEndsIn}>
                  <div className={styles.hurryUpOffer}>
                    Hurry up! Offer ends In:
                  </div>
                  <div className={styles.time}>
                    <div className={styles.days}>
                      <div className={styles.div1}>01</div>
                      <div className={styles.days1}>Days</div>
                    </div>
                    <div className={styles.hours}>
                      <div className={styles.div2}>23</div>
                      <div className={styles.hours1}>Hours</div>
                    </div>
                    <h3 className={styles.h3}>:</h3>
                    <div className={styles.mins}>
                      <div className={styles.div3}>34</div>
                      <div className={styles.mins1}>Mins</div>
                    </div>
                    <h3 className={styles.h31}>:</h3>
                    <div className={styles.secs}>
                      <div className={styles.div4}>57</div>
                      <div className={styles.secs1}>Secs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.product5nParent}>
              <Product5n1
                image="/image-4@2x.png"
                greenApple="Chinese cabbage"
                emptySpace="$12.00"
                propAlignSelf="stretch"
                propHeight="unset"
                propFlex="1"
                propMinWidth="unset"
                propFlex1="1"
                propHeight1="unset"
              />
              <Product5n1
                image="/image-5@2x.png"
                greenApple="Fresh Cauliflower"
                emptySpace="$12.00"
                propAlignSelf="stretch"
                propHeight="unset"
                propFlex="1"
                propMinWidth="unset"
                propFlex1="1"
                propHeight1="unset"
              />
            </div>
            <FrameComponent3
              propFlex="unset"
              propMinWidth="unset"
              propHeight="654px"
              propWidth="264px"
              propHeight1="unset"
              propFlex1="1"
            />
            <div className={styles.product5nGroup}>
              <Product5n1
                image="/image-8@2x.png"
                greenApple="Eggplant"
                emptySpace="$34.00"
                propAlignSelf="stretch"
                propHeight="unset"
                propFlex="1"
                propMinWidth="unset"
                propFlex1="1"
                propHeight1="unset"
              />
              <Product5n1
                image="/image-9@2x.png"
                greenApple="Green Chili"
                emptySpace="$34.00"
                propAlignSelf="stretch"
                propHeight="unset"
                propFlex="1"
                propMinWidth="unset"
                propFlex1="1"
                propHeight1="unset"
              />
            </div>
          </div>
          <div className={styles.rectangleFrame}>
            <Product5n1
              image="/image-17@2x.png"
              greenApple="Big Potatoes"
              emptySpace="$12.00"
              propAlignSelf="unset"
              propHeight="unset"
              propFlex="1"
              propMinWidth="260px"
              propFlex1="unset"
              propHeight1="240px"
            />
            <Product5n1
              image="/image-3@2x.png"
              greenApple="Corn"
              emptySpace="$12.00"
              propAlignSelf="unset"
              propHeight="unset"
              propFlex="1"
              propMinWidth="260px"
              propFlex1="unset"
              propHeight1="240px"
            />
            <Product5n1
              image="/image-19@2x.png"
              greenApple="Red Chili"
              emptySpace="$12.00"
              propAlignSelf="unset"
              propHeight="unset"
              propFlex="1"
              propMinWidth="260px"
              propFlex1="unset"
              propHeight1="240px"
            />
            <Product5n2
              image="/image-20@2x.png"
              greenApple="Red Tomatos"
              searchIcon="$9.00"
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
              image="/image-21@2x.png"
              greenApple="Surjapur Mango"
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
      </div>
    </section>
  );
};

export default Logo;
