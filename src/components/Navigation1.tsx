import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Navigation1.module.css";

export type Navigation1Type = {
  mapPin?: string;
  group?: string;
  group1?: string;
  chevronDown?: string;
  chevronDown1?: string;
  chevronDown2?: string;
  chevronDown3?: string;
  phoneCall1?: string;

  /** Style props */
  contactFlex?: CSSProperties["flex"];
  contactAlignSelf?: CSSProperties["alignSelf"];
  mapPinIconBackgroundColor?: CSSProperties["backgroundColor"];
  linksColor?: CSSProperties["color"];
  linksDisplay?: CSSProperties["display"];
  groupIconColor?: CSSProperties["color"];
  groupIconDisplay?: CSSProperties["display"];
  groupIconColor1?: CSSProperties["color"];
  groupIconDisplay1?: CSSProperties["display"];
  signInBorderRight?: CSSProperties["borderRight"];
  signInOpacity?: CSSProperties["opacity"];
  signUpColor?: CSSProperties["color"];
  signUpDisplay?: CSSProperties["display"];
  midleColor?: CSSProperties["color"];
  midleDisplay?: CSSProperties["display"];
  cTAButtonColor?: CSSProperties["color"];
  cTAButtonDisplay?: CSSProperties["display"];
  logoBackgroundColor?: CSSProperties["backgroundColor"];
  logoBoxShadow?: CSSProperties["boxShadow"];
  searechDisplay?: CSSProperties["display"];
  navLinksDisplay?: CSSProperties["display"];
  navLinksDisplay1?: CSSProperties["display"];
  navLinksBackgroundColor?: CSSProperties["backgroundColor"];
  navLinksColor?: CSSProperties["color"];
  navLinksDisplay2?: CSSProperties["display"];
  navLinksColor1?: CSSProperties["color"];
  navLinksDisplay3?: CSSProperties["display"];
  navLinksColor2?: CSSProperties["color"];
  navLinksDisplay4?: CSSProperties["display"];
  navLinksColor3?: CSSProperties["color"];
  navLinksDisplay5?: CSSProperties["display"];
  navLinksColor4?: CSSProperties["color"];
  navLinksDisplay6?: CSSProperties["display"];
  callNowColor?: CSSProperties["color"];
  callNowDisplay?: CSSProperties["display"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  mapPin,
  group,
  group1,
  chevronDown,
  chevronDown1,
  chevronDown2,
  chevronDown3,
  phoneCall1,
  contactFlex,
  contactAlignSelf,
  mapPinIconBackgroundColor,
  linksColor,
  linksDisplay,
  groupIconColor,
  groupIconDisplay,
  groupIconColor1,
  groupIconDisplay1,
  signInBorderRight,
  signInOpacity,
  signUpColor,
  signUpDisplay,
  midleColor,
  midleDisplay,
  cTAButtonColor,
  cTAButtonDisplay,
  logoBackgroundColor,
  logoBoxShadow,
  searechDisplay,
  navLinksDisplay,
  navLinksDisplay1,
  navLinksBackgroundColor,
  navLinksColor,
  navLinksDisplay2,
  navLinksColor1,
  navLinksDisplay3,
  navLinksColor2,
  navLinksDisplay4,
  navLinksColor3,
  navLinksDisplay5,
  navLinksColor4,
  navLinksDisplay6,
  callNowColor,
  callNowDisplay,
  propColor,
  propDisplay,
}) => {
  const navigationStyle: CSSProperties = useMemo(() => {
    return {
      flex: contactFlex,
      alignSelf: contactAlignSelf,
    };
  }, [contactFlex, contactAlignSelf]);

  const smallOneStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: mapPinIconBackgroundColor,
    };
  }, [mapPinIconBackgroundColor]);

  const storeLocationLincolnStyle: CSSProperties = useMemo(() => {
    return {
      color: linksColor,
      display: linksDisplay,
    };
  }, [linksColor, linksDisplay]);

  const engStyle: CSSProperties = useMemo(() => {
    return {
      color: groupIconColor,
      display: groupIconDisplay,
    };
  }, [groupIconColor, groupIconDisplay]);

  const uSDStyle: CSSProperties = useMemo(() => {
    return {
      color: groupIconColor1,
      display: groupIconDisplay1,
    };
  }, [groupIconColor1, groupIconDisplay1]);

  const deviderStyle: CSSProperties = useMemo(() => {
    return {
      borderRight: signInBorderRight,
      opacity: signInOpacity,
    };
  }, [signInBorderRight, signInOpacity]);

  const signInStyle: CSSProperties = useMemo(() => {
    return {
      color: signUpColor,
      display: signUpDisplay,
    };
  }, [signUpColor, signUpDisplay]);

  const footerLinkStyle: CSSProperties = useMemo(() => {
    return {
      color: midleColor,
      display: midleDisplay,
    };
  }, [midleColor, midleDisplay]);

  const signUpStyle: CSSProperties = useMemo(() => {
    return {
      color: cTAButtonColor,
      display: cTAButtonDisplay,
    };
  }, [cTAButtonColor, cTAButtonDisplay]);

  const midleStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: logoBackgroundColor,
      boxShadow: logoBoxShadow,
    };
  }, [logoBackgroundColor, logoBoxShadow]);

  const ecobazarStyle: CSSProperties = useMemo(() => {
    return {
      display: searechDisplay,
    };
  }, [searechDisplay]);

  const shoppingCartStyle: CSSProperties = useMemo(() => {
    return {
      display: navLinksDisplay,
    };
  }, [navLinksDisplay]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      display: navLinksDisplay1,
    };
  }, [navLinksDisplay1]);

  const navLinksStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: navLinksBackgroundColor,
    };
  }, [navLinksBackgroundColor]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      color: navLinksColor,
      display: navLinksDisplay2,
    };
  }, [navLinksColor, navLinksDisplay2]);

  const home1Style: CSSProperties = useMemo(() => {
    return {
      color: navLinksColor1,
      display: navLinksDisplay3,
    };
  }, [navLinksColor1, navLinksDisplay3]);

  const home2Style: CSSProperties = useMemo(() => {
    return {
      color: navLinksColor2,
      display: navLinksDisplay4,
    };
  }, [navLinksColor2, navLinksDisplay4]);

  const home3Style: CSSProperties = useMemo(() => {
    return {
      color: navLinksColor3,
      display: navLinksDisplay5,
    };
  }, [navLinksColor3, navLinksDisplay5]);

  const home4Style: CSSProperties = useMemo(() => {
    return {
      color: navLinksColor4,
      display: navLinksDisplay6,
    };
  }, [navLinksColor4, navLinksDisplay6]);

  const home5Style: CSSProperties = useMemo(() => {
    return {
      color: callNowColor,
      display: callNowDisplay,
    };
  }, [callNowColor, callNowDisplay]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay,
    };
  }, [propColor, propDisplay]);

  return (
    <header className={styles.navigation} style={navigationStyle}>
      <div className={styles.smallOne} style={smallOneStyle}>
        <div className={styles.contact}>
          <img className={styles.mapPinIcon} alt="" src={mapPin} />
          <div className={styles.rectangleShape}>
            <div
              className={styles.storeLocationLincoln}
              style={storeLocationLincolnStyle}
            >
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.links}>
            <div className={styles.eng}>
              <div className={styles.eng1} style={engStyle}>
                Eng
              </div>
              <div className={styles.groupWrapper}>
                <img className={styles.groupIcon} alt="" src={group} />
              </div>
            </div>
            <div className={styles.usd}>
              <div className={styles.usd1} style={uSDStyle}>
                USD
              </div>
              <div className={styles.groupContainer}>
                <img className={styles.groupIcon1} alt="" src={group1} />
              </div>
            </div>
            <div className={styles.devider} style={deviderStyle} />
            <nav className={styles.account}>
              <div className={styles.signIn} style={signInStyle}>
                Sign In
              </div>
              <div className={styles.footerLink} style={footerLinkStyle}>
                /
              </div>
              <div className={styles.signUp} style={signUpStyle}>
                Sign Up
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.midle} style={midleStyle}>
        <div className={styles.cTAButton}>
          <div className={styles.logo}>
            <div className={styles.paymentMethods}>
              <img className={styles.plant1Icon} alt="" src="/plant-1.svg" />
            </div>
            <h1 className={styles.ecobazar} style={ecobazarStyle}>
              Ecobazar
            </h1>
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
          <button className={styles.button1}>
            <div className={styles.search2}>Search</div>
          </button>
        </div>
        <div className={styles.iconsWrapper}>
          <div className={styles.icons}>
            <div className={styles.heartWrapper}>
              <img className={styles.heartIcon} alt="" src="/heart.svg" />
            </div>
            <div className={styles.deviderWrapper}>
              <div className={styles.devider1} />
            </div>
            <div className={styles.shoppingCard}>
              <div className={styles.cart}>
                <img className={styles.bagIcon} alt="" src="/bag.svg" />
                <div className={styles.no}>
                  <div className={styles.div}>2</div>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.shoppingCart} style={shoppingCartStyle}>
                  Shopping cart:
                </div>
                <div className={styles.div1} style={divStyle}>
                  $57.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navLinks} style={navLinksStyle}>
        <div className={styles.navLinks1}>
          <div className={styles.navLinks2}>
            <div className={styles.home} style={homeStyle}>
              Home
            </div>
            <img className={styles.chevronDownIcon} alt="" src={chevronDown} />
          </div>
          <div className={styles.navLinks3}>
            <div className={styles.home1} style={home1Style}>
              Shop
            </div>
            <img
              className={styles.chevronDownIcon1}
              alt=""
              src={chevronDown1}
            />
          </div>
          <div className={styles.navLinks4}>
            <div className={styles.home2} style={home2Style}>
              Pages
            </div>
            <img
              className={styles.chevronDownIcon2}
              alt=""
              src={chevronDown2}
            />
          </div>
          <div className={styles.navLinks5}>
            <div className={styles.home3} style={home3Style}>
              Blog
            </div>
            <img
              className={styles.chevronDownIcon3}
              alt=""
              src={chevronDown3}
            />
          </div>
          <div className={styles.navLinks6}>
            <div className={styles.home4} style={home4Style}>
              About Us
            </div>
            <img
              className={styles.chevronDownIcon4}
              alt=""
              src="/chevron-down1.svg"
            />
          </div>
          <div className={styles.navLinks7}>
            <div className={styles.home5} style={home5Style}>
              Contact Us
            </div>
            <img
              className={styles.chevronDownIcon5}
              alt=""
              src="/chevron-down1.svg"
            />
          </div>
        </div>
        <div className={styles.callNow}>
          <img className={styles.phonecall1Icon} alt="" src={phoneCall1} />
          <div className={styles.div2} style={div1Style}>
            (219) 555-0114
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation1;
