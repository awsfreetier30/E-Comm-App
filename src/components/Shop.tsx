import { FunctionComponent } from "react";
import Product4x2 from "./Product4x2";
import Product4x1 from "./Product4x1";
import Product5n2 from "./Product5n2";
import Footer1 from "./Footer1";
import styles from "./Shop.module.css";

const Shop: FunctionComponent = () => {
  return (
    <form className={styles.shop2}>
      <section className={styles.navigation}>
        <div className={styles.smallOne}>
          <div className={styles.contact}>
            <img
              className={styles.mapPinIcon}
              loading="lazy"
              alt=""
              src="/map-pin.svg"
            />
            <div className={styles.subscribeBox}>
              <div className={styles.storeLocationLincoln}>
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </div>
            </div>
          </div>
          <div className={styles.helpCategories}>
            <div className={styles.links}>
              <div className={styles.eng}>
                <div className={styles.eng1}>Eng</div>
                <div className={styles.morbiFrame}>
                  <img className={styles.groupIcon} alt="" src="/group.svg" />
                </div>
              </div>
              <div className={styles.usd}>
                <div className={styles.usd1}>USD</div>
                <div className={styles.groupWrapper}>
                  <img className={styles.groupIcon1} alt="" src="/group.svg" />
                </div>
              </div>
              <div className={styles.devider} />
              <div className={styles.account}>
                <div className={styles.signIn}>Sign In</div>
                <div className={styles.inputField}>/</div>
                <div className={styles.signUp}>Sign Up</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.midle}>
          <div className={styles.contactLinks}>
            <div className={styles.logo}>
              <div className={styles.termsConditionLinks}>
                <img
                  className={styles.plant1Icon}
                  loading="lazy"
                  alt=""
                  src="/plant-1.svg"
                />
              </div>
              <h1 className={styles.ecobazar}>Ecobazar</h1>
            </div>
          </div>
          <div className={styles.search}>
            <div className={styles.searech}>
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <input
                className={styles.search1}
                placeholder="Search"
                type="text"
              />
            </div>
            <button className={styles.button}>
              <div className={styles.search2}>Search</div>
            </button>
          </div>
          <div className={styles.myAccountLinks}>
            <div className={styles.icons}>
              <div className={styles.categoriesFrame}>
                <img
                  className={styles.heartIcon}
                  loading="lazy"
                  alt=""
                  src="/heart.svg"
                />
              </div>
              <div className={styles.orderHistoryLink}>
                <div className={styles.devider1} />
              </div>
              <div className={styles.shoppingCard}>
                <div className={styles.cart}>
                  <img
                    className={styles.bagIcon}
                    loading="lazy"
                    alt=""
                    src="/bag.svg"
                  />
                  <div className={styles.no}>
                    <div className={styles.myAccountLink}>2</div>
                  </div>
                </div>
                <div className={styles.info}>
                  <div className={styles.shoppingCart}>Shopping cart:</div>
                  <div className={styles.frameMyAccount}>$57.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.navLinks1}>
            <div className={styles.navLinks2}>
              <div className={styles.home}>Home</div>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/chevron-down.svg"
              />
            </div>
            <div className={styles.navLinks3}>
              <div className={styles.home1}>Shop</div>
              <img
                className={styles.chevronDownIcon1}
                alt=""
                src="/chevron-down-1.svg"
              />
            </div>
            <div className={styles.navLinks4}>
              <div className={styles.home2}>Pages</div>
              <img
                className={styles.chevronDownIcon2}
                alt=""
                src="/chevron-down-1.svg"
              />
            </div>
            <div className={styles.navLinks5}>
              <div className={styles.home3}>Blog</div>
              <img
                className={styles.chevronDownIcon3}
                alt=""
                src="/chevron-down-1.svg"
              />
            </div>
            <div className={styles.navLinks6}>
              <div className={styles.home4}>About Us</div>
              <img
                className={styles.chevronDownIcon4}
                alt=""
                src="/chevron-down1.svg"
              />
            </div>
            <div className={styles.navLinks7}>
              <div className={styles.home5}>Contact Us</div>
              <img
                className={styles.chevronDownIcon5}
                alt=""
                src="/chevron-down1.svg"
              />
            </div>
          </div>
          <div className={styles.callNow}>
            <img
              className={styles.phonecall1Icon}
              loading="lazy"
              alt=""
              src="/phonecall-1.svg"
            />
            <div className={styles.div}>(219) 555-0114</div>
          </div>
        </div>
      </section>
      <section className={styles.shop2Inner}>
        <div className={styles.frameParent}>
          <div className={styles.breadcumbWrapper}>
            <div className={styles.breadcumb}>
              <img
                className={styles.home11Icon}
                loading="lazy"
                alt=""
                src="/home1-111.svg"
              />
              <img
                className={styles.groupIcon2}
                alt=""
                src="/group-21@2x.png"
              />
              <div className={styles.home6}>Home</div>
              <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
              <div className={styles.home7}>Home</div>
              <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
              <div className={styles.home8}>Home</div>
              <div className={styles.frameCompanyWrapper}>
                <img
                  className={styles.frameCompanyIcon}
                  alt=""
                  src="/frame-company.svg"
                />
              </div>
              <div className={styles.categories}>Categories</div>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <div className={styles.vegetables}>Vegetables</div>
            </div>
          </div>
          <div className={styles.discountBannar}>
            <div className={styles.discountBannarInner}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.bestDealsParent}>
                    <div className={styles.bestDeals}>Best Deals</div>
                    <h1 className={styles.saleOfThe}>Sale of the Month</h1>
                  </div>
                  <div className={styles.timer}>
                    <div className={styles.lockParent}>
                      <div className={styles.lock}>00</div>
                      <div className={styles.days}>Days</div>
                    </div>
                    <h2 className={styles.frame}>:</h2>
                    <div className={styles.parent}>
                      <div className={styles.div1}>02</div>
                      <div className={styles.hours}>Hours</div>
                    </div>
                    <h2 className={styles.frame1}>:</h2>
                    <div className={styles.group}>
                      <div className={styles.div2}>18</div>
                      <div className={styles.mins}>Mins</div>
                    </div>
                    <h2 className={styles.frame2}>:</h2>
                    <div className={styles.container}>
                      <div className={styles.div3}>46</div>
                      <div className={styles.secs}>Secs</div>
                    </div>
                  </div>
                </div>
                <button className={styles.button1}>
                  <div className={styles.shopNow}>Shop Now</div>
                  <img
                    className={styles.groupIcon3}
                    alt=""
                    src="/group-11.svg"
                  />
                </button>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.div4}>56%</div>
              <div className={styles.offWrapper}>
                <div className={styles.off}>Off</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.filter}>
        <div className={styles.filter1}>
          <div className={styles.dropdown}>
            <div className={styles.selectCategory}>Select Category</div>
            <img
              className={styles.chevronDownIcon6}
              alt=""
              src="/chevron-down-4.svg"
            />
          </div>
          <div className={styles.dropdown1}>
            <div className={styles.selectPrice}>Select Price</div>
            <img
              className={styles.chevronDownIcon7}
              alt=""
              src="/chevron-down-4.svg"
            />
          </div>
          <div className={styles.dropdown2}>
            <div className={styles.selectRating}>Select Rating</div>
            <img
              className={styles.chevronDownIcon8}
              alt=""
              src="/chevron-down-4.svg"
            />
          </div>
        </div>
        <div className={styles.otherFilter}>
          <div className={styles.dropdown3}>
            <div className={styles.sortByLatest}>Sort by: Latest</div>
            <img
              className={styles.chevronDownIcon9}
              alt=""
              src="/chevron-down-4.svg"
            />
          </div>
          <div className={styles.dropdown4}>
            <div className={styles.show16}>Show: 16</div>
            <img
              className={styles.chevronDownIcon10}
              alt=""
              src="/chevron-down-4.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.activeFilterWrapper}>
        <div className={styles.activeFilter}>
          <div className={styles.activeFiltersParent}>
            <div className={styles.activeFilters}>Active Filters:</div>
            <div className={styles.wingChairParent}>
              <div className={styles.wingChair}>Wing Chair</div>
              <div className={styles.cross12pxWrapper}>
                <img
                  className={styles.cross12pxIcon}
                  alt=""
                  src="/cross-12px.svg"
                />
              </div>
            </div>
            <div className={styles.min300Max500Parent}>
              <div className={styles.min300}>Min $300 - Max 500</div>
              <div className={styles.frameWrapper}>
                <div className={styles.cross12pxParent}>
                  <img
                    className={styles.cross12pxIcon1}
                    alt=""
                    src="/cross-12px-1.svg"
                  />
                  <img
                    className={styles.hand3Icon}
                    loading="lazy"
                    alt=""
                    src="/hand-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.resultsFound}>
            <span className={styles.span}>
              <span className={styles.span1}>2,547</span>
            </span>
            <span className={styles.resultsFound1}>
              <span className={styles.span2}>{` `}</span>
              <span className={styles.resultsFound2}>Results found.</span>
            </span>
          </div>
        </div>
      </div>
      <section className={styles.shop2Child}>
        <div className={styles.frameParent1}>
          <div className={styles.textParent}>
            <div className={styles.text}>
              <div className={styles.product4x}>
                <div className={styles.productImage}>
                  <img
                    className={styles.imageIcon}
                    loading="lazy"
                    alt=""
                    src="/image4@2x.png"
                  />
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.info1}>
                    <div className={styles.greenApple}>Red Chili</div>
                    <div className={styles.price}>
                      <div className={styles.div5}>$14.99</div>
                      <div className={styles.div6}>$20.99</div>
                    </div>
                  </div>
                  <div className={styles.rating}>
                    <img
                      className={styles.ratingChild}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingItem}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingInner}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img className={styles.starIcon} alt="" src="/star-1.svg" />
                    <img
                      className={styles.ratingChild1}
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                  <img
                    className={styles.addToCart}
                    loading="lazy"
                    alt=""
                    src="/add-to-cart.svg"
                  />
                </div>
              </div>
              <div className={styles.product4x1}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon1}
                    alt=""
                    src="/image-15@2x.png"
                  />
                </div>
                <div className={styles.productInfo1}>
                  <div className={styles.info2}>
                    <div className={styles.greenApple1}>Red Tomato</div>
                    <div className={styles.price1}>
                      <div className={styles.frame3}>$14.99</div>
                      <div className={styles.div7}>$20.99</div>
                    </div>
                  </div>
                  <div className={styles.rating1}>
                    <img
                      className={styles.ratingChild2}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild3}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild4}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild5}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild6}
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                  <img
                    className={styles.addToCart1}
                    alt=""
                    src="/add-to-cart.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.text1}>
              <div className={styles.product4x2}>
                <div className={styles.productImage2}>
                  <img
                    className={styles.imageIcon2}
                    alt=""
                    src="/image-25@2x.png"
                  />
                </div>
                <div className={styles.productInfo2}>
                  <div className={styles.info3}>
                    <div className={styles.greenApple2}>Big Potatos</div>
                    <div className={styles.price2}>
                      <div className={styles.frame4}>$14.99</div>
                      <div className={styles.div8}>$20.99</div>
                    </div>
                  </div>
                  <div className={styles.rating2}>
                    <img
                      className={styles.ratingChild7}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild8}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild9}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild10}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild11}
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                  <img
                    className={styles.addToCart2}
                    alt=""
                    src="/add-to-cart.svg"
                  />
                </div>
              </div>
              <div className={styles.product4x3}>
                <div className={styles.productImage3}>
                  <img
                    className={styles.imageIcon3}
                    alt=""
                    src="/image-34@2x.png"
                  />
                </div>
                <div className={styles.productInfo3}>
                  <div className={styles.info4}>
                    <div className={styles.greenApple3}>Eggplant</div>
                    <div className={styles.price3}>
                      <div className={styles.div9}>$14.99</div>
                      <div className={styles.div10}>$20.99</div>
                    </div>
                  </div>
                  <div className={styles.rating3}>
                    <img
                      className={styles.ratingChild12}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild13}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild14}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild15}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild16}
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                  <img
                    className={styles.addToCart3}
                    alt=""
                    src="/add-to-cart.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.myAccountLink1}>
              <Product4x2
                image="/image-41@2x.png"
                greenApple="Chanise Cabbage"
              />
              <Product4x1
                image="/image-14@2x.png"
                greenApple="Fresh Cauliflower"
              />
            </div>
            <div className={styles.product4xParent}>
              <div className={styles.product4x4}>
                <div className={styles.productImageParent}>
                  <div className={styles.productImage4}>
                    <img
                      className={styles.imageIcon4}
                      alt=""
                      src="/image-61@2x.png"
                    />
                  </div>
                  <div className={styles.tag}>
                    <div className={styles.outOfStock}>Out of Stock</div>
                  </div>
                </div>
                <div className={styles.productInfo4}>
                  <div className={styles.info5}>
                    <div className={styles.greenApple4}>Ladies Finger</div>
                    <div className={styles.price4}>
                      <div className={styles.div11}>$14.99</div>
                      <div className={styles.div12}>$20.99</div>
                    </div>
                  </div>
                  <div className={styles.rating4}>
                    <img
                      className={styles.ratingChild17}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild18}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild19}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild20}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild21}
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                  <img
                    className={styles.addToCart4}
                    alt=""
                    src="/add-to-cart.svg"
                  />
                </div>
              </div>
              <Product4x1
                image="/image-71@2x.png"
                greenApple="Green Apple"
                propAlignSelf="stretch"
                propFlex="1"
                propHeight="unset"
                propWidth="unset"
                propMinWidth="unset"
              />
            </div>
          </div>
          <div className={styles.methodPaymentIcons}>
            <div className={styles.text2}>
              <div className={styles.product4x5}>
                <div className={styles.productImage5}>
                  <img
                    className={styles.imageIcon5}
                    alt=""
                    src="/image-81@2x.png"
                  />
                </div>
                <div className={styles.productInfo5}>
                  <div className={styles.info6}>
                    <div className={styles.greenApple5}>Fresh Mango</div>
                    <div className={styles.price5}>
                      <div className={styles.plantText}>$14.99</div>
                      <div className={styles.div13}>$20.99</div>
                    </div>
                  </div>
                  <div className={styles.rating5}>
                    <img
                      className={styles.ratingChild22}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild23}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild24}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild25}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild26}
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                  <img
                    className={styles.addToCart5}
                    alt=""
                    src="/add-to-cart.svg"
                  />
                </div>
              </div>
              <div className={styles.product4x6}>
                <div className={styles.productImage6}>
                  <img
                    className={styles.imageIcon6}
                    alt=""
                    src="/image-61@2x.png"
                  />
                </div>
                <div className={styles.productInfo6}>
                  <div className={styles.info7}>
                    <div className={styles.greenApple6}>Green Littuce</div>
                    <div className={styles.price6}>
                      <div className={styles.div14}>$14.99</div>
                      <div className={styles.div15}>$20.99</div>
                    </div>
                  </div>
                  <div className={styles.rating6}>
                    <img
                      className={styles.ratingChild27}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild28}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild29}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild30}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingChild31}
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                  <img
                    className={styles.addToCart6}
                    alt=""
                    src="/add-to-cart.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.searchIconButton}>
              <div className={styles.searchInputField}>
                <Product4x1
                  image="/image-24@2x.png"
                  greenApple="Green Capsicum"
                  propAlignSelf="unset"
                  propFlex="unset"
                  propHeight="407px"
                  propWidth="unset"
                  propMinWidth="unset"
                />
                <Product4x1
                  image="/image-111@2x.png"
                  greenApple="Green Chili"
                  propAlignSelf="unset"
                  propFlex="unset"
                  propHeight="407px"
                  propWidth="unset"
                  propMinWidth="unset"
                />
                <Product5n2
                  image="/image-121@2x.png"
                  greenApple="Green Cucumber"
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
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.product4xGroup}>
                    <div className={styles.product4x7}>
                      <div className={styles.productImage7}>
                        <img
                          className={styles.imageIcon7}
                          alt=""
                          src="/image-131@2x.png"
                        />
                      </div>
                      <div className={styles.productInfo7}>
                        <div className={styles.info8}>
                          <div className={styles.greenApple7}>
                            Green Littuce
                          </div>
                          <div className={styles.price7}>
                            <div className={styles.mainContent}>$14.99</div>
                            <div className={styles.div16}>$20.99</div>
                          </div>
                        </div>
                        <div className={styles.rating7}>
                          <img
                            className={styles.ratingChild32}
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className={styles.ratingChild33}
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className={styles.ratingChild34}
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className={styles.ratingChild35}
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className={styles.ratingChild36}
                            alt=""
                            src="/star-5.svg"
                          />
                        </div>
                        <img
                          className={styles.addToCart7}
                          alt=""
                          src="/add-to-cart.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.product4x8}>
                      <div className={styles.productImage8}>
                        <img
                          className={styles.imageIcon8}
                          alt=""
                          src="/image-141@2x.png"
                        />
                      </div>
                      <div className={styles.productInfo8}>
                        <div className={styles.info9}>
                          <div className={styles.greenApple8}>
                            Ladies Finger
                          </div>
                          <div className={styles.price8}>
                            <div className={styles.div17}>$14.99</div>
                            <div className={styles.div18}>$20.99</div>
                          </div>
                        </div>
                        <div className={styles.rating8}>
                          <img
                            className={styles.ratingChild37}
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className={styles.ratingChild38}
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className={styles.ratingChild39}
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className={styles.ratingChild40}
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className={styles.ratingChild41}
                            alt=""
                            src="/star-5.svg"
                          />
                        </div>
                        <img
                          className={styles.addToCart8}
                          alt=""
                          src="/add-to-cart.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.footerLinks}>
                    <div className={styles.pagination}>
                      <div className={styles.chevronDownWrapper}>
                        <img
                          className={styles.chevronDownIcon11}
                          alt=""
                          src="/chevron-down-9@2x.png"
                        />
                      </div>
                      <div className={styles.frameParent4}>
                        <div className={styles.wrapper}>
                          <div className={styles.div19}>1</div>
                        </div>
                        <div className={styles.wrapper1}>
                          <div className={styles.div20}>2</div>
                        </div>
                        <div className={styles.wrapper2}>
                          <div className={styles.div21}>3</div>
                        </div>
                        <div className={styles.wrapper3}>
                          <div className={styles.div22}>4</div>
                        </div>
                        <div className={styles.wrapper4}>
                          <div className={styles.div23}>5</div>
                        </div>
                        <div className={styles.wrapper5}>
                          <div className={styles.div24}>...</div>
                        </div>
                        <div className={styles.wrapper6}>
                          <div className={styles.div25}>21</div>
                        </div>
                      </div>
                      <img
                        className={styles.paginationChild}
                        alt=""
                        src="/frame-162@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <Product4x1
                  image="/image-151@2x.png"
                  greenApple="Green Capsicum"
                  propAlignSelf="unset"
                  propFlex="unset"
                  propHeight="407px"
                  propWidth="312px"
                  propMinWidth="312px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <header className={styles.subscribeOurNewsletter}>
          <div className={styles.subscribeOurNewsletterChild} />
          <div className={styles.subcribeOurNewsletterParent}>
            <h2 className={styles.subcribeOurNewsletter}>
              Subcribe our Newsletter
            </h2>
            <div className={styles.pellentesqueEuNibh}>
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </div>
          </div>
          <div className={styles.subscribeOurNewsletterInner}>
            <div className={styles.subscribeParent}>
              <div className={styles.subscribe}>
                <div className={styles.inputField1}>
                  <div className={styles.yourEmailAddress}>
                    Your email address
                  </div>
                </div>
                <button className={styles.button2}>
                  <div className={styles.subscribe1}>Subscribe</div>
                </button>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.socialMediaParent}>
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
        </header>
        <Footer1
          methodDiscover="/methoddiscover1@2x.png"
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
        />
      </section>
    </form>
  );
};

export default Shop;
