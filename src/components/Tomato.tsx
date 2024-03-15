import { FunctionComponent } from "react";
import styles from "./Tomato.module.css";

export type TomatoType = {
  foodImage?: string;
  foodName?: string;
  weight?: string;
  locationName?: string;
};

const Tomato: FunctionComponent<TomatoType> = ({
  foodImage,
  foodName,
  weight,
  locationName,
}) => {
  return (
    <div className={styles.tomato}>
      <img
        className={styles.edONeilAvvdzlhdowaUnsplashIcon}
        loading="lazy"
        alt=""
        src={foodImage}
      />
      <div className={styles.framePair}>
        <div className={styles.framePair1}>
          <div className={styles.heirloomtomatoOrganicgingerF}>
            <div className={styles.heirloomTomato}>{foodName}</div>
            <div className={styles.lb}>{weight}</div>
          </div>
          <div className={styles.grownInSan}>{locationName}</div>
        </div>
      </div>
    </div>
  );
};

export default Tomato;
