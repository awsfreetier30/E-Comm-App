import { FunctionComponent } from "react";
import Category from "./Category";
import Product5n2 from "./Product5n2";
import Product5n1 from "./Product5n1";
import Product5n from "./Product5n";
import FrameComponent3 from "./FrameComponent3";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.homepageInner}>
      <div className={styles.frameParent}>
        <div className={styles.bannarBigParent}>
          <div className={styles.bannarBig}>
            <div className={styles.freshHealthyOrganicFoodParent}>
              <h1 className={styles.freshHealthyContainer}>
                <p className={styles.freshHealthy}>{`Fresh & Healthy`}</p>
                <p className={styles.organicFood}>Organic Food</p>
              </h1>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.description}>
                  <div className={styles.saleUpToParent}>
                    <h3 className={styles.saleUpTo}>Sale up to</h3>
                    <button className={styles.offWrapper}>
                      <div className={styles.off}>30% OFF</div>
                    </button>
                  </div>
                  <div className={styles.freeShippingOn}>
                    Free shipping on all your order.
                  </div>
                </div>
              </div>
              <button className={styles.button}>
                <div className={styles.shopNow}>Shop now</div>
                <div className={styles.categories}>
                  <img className={styles.groupIcon} alt="" src="/group-2.svg" />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.bannarParent}>
            <div className={styles.bannar}>
              <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
              <div className={styles.info}>
                <div className={styles.imageHolder}>
                  <div className={styles.titleText}>
                    <div className={styles.summerSale}>Summer Sale</div>
                    <div className={styles.off1}>75% OFF</div>
                  </div>
                  <div
                    className={styles.onlyFruit}
                  >{`Only Fruit & Vegetable`}</div>
                </div>
                <div className={styles.button1}>
                  <div className={styles.shopNow1}>Shop Now</div>
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="/group-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.bannar1}>
              <img className={styles.bgIcon1} alt="" src="/bg-1@2x.png" />
              <div className={styles.info1}>
                <div className={styles.info2}>
                  <div className={styles.bestDealWrapper}>
                    <div className={styles.bestDeal}>Best Deal</div>
                  </div>
                  <h1 className={styles.specialProductsDeal}>
                    Special Products Deal of the Month
                  </h1>
                </div>
                <div className={styles.buttonWrapper}>
                  <div className={styles.button2}>
                    <div className={styles.shopNow2}>Shop Now</div>
                    <div className={styles.categories1}>
                      <img
                        className={styles.groupIcon2}
                        alt=""
                        src="/group-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerSection}>
          <div className={styles.featured}>
            <div className={styles.feature}>
              <img
                className={styles.deliveryTruck1Icon}
                alt=""
                src="/deliverytruck-1.svg"
              />
              <div className={styles.info3}>
                <div className={styles.freeShipping}>Free Shipping</div>
                <div className={styles.freeShippingOn1}>
                  Free shipping on all your order
                </div>
              </div>
            </div>
            <div className={styles.feature1}>
              <img className={styles.shippingIcon} alt="" src="/shipping.svg" />
              <img className={styles.sucureIcon} alt="" src="/sucure.svg" />
              <img className={styles.boxIcon} alt="" src="/box.svg" />
              <img
                className={styles.headphones1Icon}
                alt=""
                src="/headphones-1.svg"
              />
              <div className={styles.info4}>
                <div className={styles.customerSupport247}>
                  Customer Support 24/7
                </div>
                <div className={styles.instantAccessTo}>
                  Instant access to Support
                </div>
              </div>
            </div>
            <div className={styles.feature2}>
              <img
                className={styles.shippingIcon1}
                alt=""
                src="/shipping.svg"
              />
              <img className={styles.icon} alt="" src="/247.svg" />
              <img className={styles.boxIcon1} alt="" src="/box.svg" />
              <img
                className={styles.shoppingBagIcon}
                alt=""
                src="/shoppingbag.svg"
              />
              <div className={styles.info5}>
                <div className={styles.securePayment}>100% Secure Payment</div>
                <div className={styles.weEnsureYour}>
                  We ensure your money is save
                </div>
              </div>
            </div>
            <div className={styles.feature3}>
              <img
                className={styles.shippingIcon2}
                alt=""
                src="/shipping.svg"
              />
              <img className={styles.icon1} alt="" src="/247.svg" />
              <img className={styles.sucureIcon1} alt="" src="/sucure.svg" />
              <img className={styles.packageIcon} alt="" src="/package.svg" />
              <div className={styles.info6}>
                <div className={styles.moneyBackGuarantee}>
                  Money-Back Guarantee
                </div>
                <div className={styles.daysMoneyBackGuarantee}>
                  30 Days Money-Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.text}>
          <div className={styles.heading}>
            <h1 className={styles.popularCategories}>Popular Categories</h1>
            <div className={styles.rectangle}>
              <button className={styles.button3}>
                <div className={styles.viewAll}>View All</div>
                <div className={styles.navbarLinks}>
                  <img
                    className={styles.groupIcon3}
                    alt=""
                    src="/group-5.svg"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.text1}>
            <div className={styles.categoryParent}>
              <Category image1="/image-1@2x.png" freshFruit="Fresh Fruit" />
              <Category
                image1="/image-1-1@2x.png"
                freshFruit={`Bread & Bakery`}
                propBorder="1px solid var(--gray-scale-gray-100)"
                propBoxShadow="unset"
                propColor="#1a1a1a"
              />
            </div>
            <div className={styles.categoryGroup}>
              <Category
                image1="/image-1-2@2x.png"
                freshFruit="Fresh Vegetables"
                propBorder="1px solid var(--branding-success-dark)"
                propBoxShadow="0px 0px 12px rgba(32, 181, 38, 0.32)"
                propColor="#2c742f"
              />
              <Category
                image1="/image-1-3@2x.png"
                freshFruit="Baking Needs"
                propBorder="1px solid var(--gray-scale-gray-100)"
                propBoxShadow="unset"
                propColor="#1a1a1a"
              />
            </div>
            <div className={styles.categoryContainer}>
              <Category
                image1="/image-1-4@2x.png"
                freshFruit={`Meat & Fish`}
                propBorder="1px solid var(--gray-scale-gray-100)"
                propBoxShadow="unset"
                propColor="#1a1a1a"
              />
              <Category
                image1="/image-1-5@2x.png"
                freshFruit="Cooking"
                propBorder="1px solid var(--gray-scale-gray-100)"
                propBoxShadow="unset"
                propColor="#1a1a1a"
              />
            </div>
            <div className={styles.frameDiv}>
              <Category
                image1="/image-1-6@2x.png"
                freshFruit="Snacks"
                propBorder="1px solid var(--gray-scale-gray-100)"
                propBoxShadow="unset"
                propColor="#1a1a1a"
              />
              <Category
                image1="/image-1-7@2x.png"
                freshFruit="Diabetic Food"
                propBorder="1px solid var(--gray-scale-gray-100)"
                propBoxShadow="unset"
                propColor="#1a1a1a"
              />
            </div>
            <div className={styles.categoryParent1}>
              <Category
                image1="/image-1-8@2x.png"
                freshFruit="Beverages"
                propBorder="1px solid var(--gray-scale-gray-100)"
                propBoxShadow="unset"
                propColor="#1a1a1a"
              />
              <Category
                image1="/image-1-9@2x.png"
                freshFruit="Dish Detergents"
                propBorder="1px solid var(--gray-scale-gray-100)"
                propBoxShadow="unset"
                propColor="#1a1a1a"
              />
            </div>
            <div className={styles.categoryParent2}>
              <Category
                image1="/image-1-10@2x.png"
                freshFruit={`Beauty & Health`}
                propBorder="1px solid var(--gray-scale-gray-100)"
                propBoxShadow="unset"
                propColor="#1a1a1a"
              />
              <Category
                image1="/image-1-11@2x.png"
                freshFruit="Oil"
                propBorder="1px solid var(--gray-scale-gray-100)"
                propBoxShadow="unset"
                propColor="#1a1a1a"
              />
            </div>
          </div>
        </div>
        <div className={styles.basicShape}>
          <div className={styles.heading1}>
            <h1 className={styles.popularCategories1}>Popular Products</h1>
            <div className={styles.rectangle1}>
              <button className={styles.button4}>
                <div className={styles.viewAll1}>View All</div>
                <div className={styles.navbarLinks1}>
                  <img
                    className={styles.groupIcon4}
                    alt=""
                    src="/group-5.svg"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.personalAreaFrame}>
            <div className={styles.pastOrdersFrame}>
              <Product5n2
                image="/image@2x.png"
                greenApple="Green Apple"
                searchIcon="$14.99"
              />
              <Product5n1
                image="/image-11@2x.png"
                greenApple="Big Potatoes"
                emptySpace="$20.00"
              />
            </div>
            <div className={styles.product5nParent}>
              <Product5n1
                image="/image-2@2x.png"
                greenApple="Fresh Indian Malta"
                emptySpace="$20.00"
                propAlignSelf="stretch"
                propHeight="328px"
                propFlex="unset"
                propMinWidth="unset"
                propFlex1="1"
                propHeight1="unset"
              />
              <Product5n1
                image="/image-3@2x.png"
                greenApple="Corn"
                emptySpace="$20.00"
                propAlignSelf="stretch"
                propHeight="328px"
                propFlex="unset"
                propMinWidth="unset"
                propFlex1="1"
                propHeight1="unset"
              />
            </div>
            <div className={styles.pastOrdersFrame1}>
              <Product5n />
              <Product5n1
                image="/image-5@2x.png"
                greenApple="Fresh Cauliflower"
                emptySpace="$12.00"
                propAlignSelf="stretch"
                propHeight="328px"
                propFlex="unset"
                propMinWidth="unset"
                propFlex1="1"
                propHeight1="unset"
              />
            </div>
            <FrameComponent3 />
            <div className={styles.product5nGroup}>
              <Product5n1
                image="/image-8@2x.png"
                greenApple="Eggplant"
                emptySpace="$34.00"
                propAlignSelf="stretch"
                propHeight="328px"
                propFlex="unset"
                propMinWidth="unset"
                propFlex1="1"
                propHeight1="unset"
              />
              <Product5n1
                image="/image-9@2x.png"
                greenApple="Green Chili"
                emptySpace="$34.00"
                propAlignSelf="stretch"
                propHeight="328px"
                propFlex="unset"
                propMinWidth="unset"
                propFlex1="1"
                propHeight1="unset"
              />
            </div>
          </div>
        </div>
        <div className={styles.link}>
          <div className={styles.bannar2}>
            <img
              className={styles.bannarChild}
              alt=""
              src="/rectangle-54@2x.png"
            />
            <div className={styles.bestDeals}>Best Deals</div>
            <div className={styles.saleOfTheMonthParent}>
              <h1 className={styles.saleOfThe}>Sale of the Month</h1>
              <div className={styles.rectangle2}>
                <div className={styles.timer}>
                  <div className={styles.textParent}>
                    <div className={styles.text2}>00</div>
                    <div className={styles.daysWrapper}>
                      <div className={styles.days}>Days</div>
                    </div>
                  </div>
                  <h2 className={styles.button5}>:</h2>
                  <div className={styles.linkParent}>
                    <div className={styles.link1}>02</div>
                    <div className={styles.text3}>
                      <div className={styles.hours}>Hours</div>
                    </div>
                  </div>
                  <h2 className={styles.text4}>:</h2>
                  <div className={styles.frameGroup}>
                    <div className={styles.frame}>18</div>
                    <div className={styles.rectangle3}>
                      <div className={styles.mins}>Mins</div>
                    </div>
                  </div>
                  <h2 className={styles.text5}>:</h2>
                  <div className={styles.header}>
                    <div className={styles.container}>46</div>
                    <div className={styles.secsWrapper}>
                      <div className={styles.secs}>Secs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button6}>
                <div className={styles.shopNow3}>Shop Now</div>
                <div className={styles.groupWrapper}>
                  <img
                    className={styles.groupIcon5}
                    alt=""
                    src="/group-2.svg"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.bannar3}>
            <img
              className={styles.bannarItem}
              alt=""
              src="/rectangle-54-1@2x.png"
            />
            <div className={styles.fatFree}>85% Fat Free</div>
            <div className={styles.frameContainer}>
              <div className={styles.lowFatMeatParent}>
                <h1 className={styles.lowFatMeat}>Low-Fat Meat</h1>
                <div className={styles.saleWrapper}>
                  <div className={styles.sale}>
                    <div className={styles.header1}>
                      <div className={styles.startedAt}>Started at</div>
                    </div>
                    <div className={styles.frame1}>$79.99</div>
                  </div>
                </div>
              </div>
              <div className={styles.buttonFrame}>
                <button className={styles.button7}>
                  <div className={styles.shopNow4}>Shop Now</div>
                  <div className={styles.groupContainer}>
                    <img
                      className={styles.groupIcon6}
                      alt=""
                      src="/group-2.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.bannar4}>
            <img
              className={styles.bannarInner}
              alt=""
              src="/rectangle-54-2@2x.png"
            />
            <div className={styles.summerSale1}>Summer Sale</div>
            <div className={styles.freshFruitParent}>
              <h1 className={styles.freshFruit}>100% Fresh Fruit</h1>
              <div className={styles.saleContainer}>
                <div className={styles.sale1}>
                  <div className={styles.upToWrapper}>
                    <div className={styles.upTo}>Up to</div>
                  </div>
                  <button className={styles.button8}>
                    <div className={styles.off2}>64% OFF</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.buttonWrapper1}>
              <button className={styles.button9}>
                <div className={styles.shopNow5}>Shop Now</div>
                <div className={styles.groupFrame}>
                  <img
                    className={styles.groupIcon7}
                    alt=""
                    src="/group-2.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
