import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <section className={styles.headingInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.arrowDown22Wrapper}>
              <img
                className={styles.arrowDown22Icon}
                alt=""
                src="/arrowdown2-2.svg"
              />
            </div>
            <div className={styles.headerFrame}>
              <img
                className={styles.productImageSlider}
                loading="lazy"
                alt=""
                src="/product-image-slider@2x.png"
              />
              <img
                className={styles.productImageSlider1}
                alt=""
                src="/product-image-slider-1@2x.png"
              />
              <img
                className={styles.productImageSlider2}
                alt=""
                src="/product-image-slider-2@2x.png"
              />
              <img
                className={styles.productImageSlider3}
                alt=""
                src="/product-image-slider-3@2x.png"
              />
            </div>
            <div className={styles.arrowDown21Wrapper}>
              <img
                className={styles.arrowDown21Icon}
                loading="lazy"
                alt=""
                src="/arrowdown2-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.relatedProductsList}>
          <img
            className={styles.productImageIcon}
            loading="lazy"
            alt=""
            src="/product-image@2x.png"
          />
        </div>
        <div className={styles.productImage}>
          <div className={styles.saleTag}>
            <div className={styles.productInfo}>
              <div className={styles.productName}>
                <h1 className={styles.chineseCabbage}>Chinese Cabbage</h1>
                <button className={styles.stockStatus}>
                  <div className={styles.inStock}>In Stock</div>
                </button>
              </div>
              <div className={styles.ratingSku}>
                <div className={styles.rating}>
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className={styles.ratingItem}
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className={styles.ratingInner}
                    alt=""
                    src="/star-11.svg"
                  />
                  <img className={styles.starIcon} alt="" src="/star-11.svg" />
                  <img
                    className={styles.ratingChild1}
                    alt=""
                    src="/star-11.svg"
                  />
                  <div className={styles.review}> 4 Review</div>
                </div>
                <div className={styles.div}>•</div>
                <div className={styles.sku}>
                  <div className={styles.sku1}>SKU:</div>
                  <div className={styles.wishlistLink}>2,51,594</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.helpFrame}>
            <div className={styles.categoriesLinks}>
              <div className={styles.headerContainer}>
                <div className={styles.headingFrame}>$48.00</div>
              </div>
              <div className={styles.div1}>$17.28</div>
            </div>
            <div className={styles.helpFrameInner}>
              <div className={styles.offWrapper}>
                <div className={styles.off}>64% Off</div>
              </div>
            </div>
          </div>
          <div className={styles.productImageInner}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.brandWrapper}>
                <div className={styles.brand}>Brand:</div>
              </div>
              <button className={styles.rectangleParent}>
                <div className={styles.frameItem} />
                <div className={styles.frameWrapper1}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/group-20@2x.png"
                  />
                </div>
                <b className={styles.farmary}>farmary</b>
              </button>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent1}>
                <div className={styles.shareItemWrapper}>
                  <div className={styles.shareItem}>Share item:</div>
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
          <div className={styles.classAptentTacitiSociosquAWrapper}>
            <div
              className={styles.classAptentTaciti}
            >{`Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. `}</div>
          </div>
          <div className={styles.ctaWrapper}>
            <div className={styles.cta}>
              <div className={styles.quantityWrapper}>
                <div className={styles.quantity}>
                  <div className={styles.minus}>
                    <div className={styles.container} />
                    <input className={styles.minus1} type="checkbox" />
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.div2}>5</div>
                  </div>
                  <div className={styles.plus}>
                    <div className={styles.container1} />
                    <img
                      className={styles.plus1Icon}
                      loading="lazy"
                      alt=""
                      src="/plus-1.svg"
                    />
                  </div>
                </div>
              </div>
              <button className={styles.button}>
                <div className={styles.addToCart}>Add to Cart</div>
                <input className={styles.frameInput} type="checkbox" />
              </button>
              <button className={styles.button1}>
                <img className={styles.heartIcon} alt="" src="/heart-1.svg" />
              </button>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.categoryParent}>
              <div className={styles.category}>Category:</div>
              <div className={styles.vegetables}>Vegetables</div>
            </div>
            <div className={styles.tagParent}>
              <div className={styles.tag}>Tag:</div>
              <div className={styles.vegetables1}>Vegetables</div>
              <div className={styles.healthy}>Healthy</div>
              <div className={styles.chinese}>Chinese</div>
              <div className={styles.cabbage}>Cabbage</div>
              <div className={styles.greenCabbage}>Green Cabbage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
