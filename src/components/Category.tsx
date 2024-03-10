import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Category.module.css";

export type CategoryType = {
  image1?: string;
  freshFruit?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propColor?: CSSProperties["color"];
};

const Category: FunctionComponent<CategoryType> = ({
  image1,
  freshFruit,
  propBorder,
  propBoxShadow,
  propColor,
}) => {
  const categoryStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      boxShadow: propBoxShadow,
    };
  }, [propBorder, propBoxShadow]);

  const freshFruitStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.category} style={categoryStyle}>
      <div className={styles.image1Wrapper}>
        <img className={styles.image1Icon} loading="lazy" alt="" src={image1} />
      </div>
      <div className={styles.freshFruit} style={freshFruitStyle}>
        {freshFruit}
      </div>
    </div>
  );
};

export default Category;
