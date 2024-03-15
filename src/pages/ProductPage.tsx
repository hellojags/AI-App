import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import MyProfileTab from "../components/MyProfileTab";
import styles from "./ProductPage.module.css";

const ProductPage: FunctionComponent = () => {
  return (
    <div className={styles.productPage}>
      <header className={styles.frameA}>
        <div className={styles.frameB}>
          <h1 className={styles.worldPeas}>World Peas</h1>
        </div>
        <div className={styles.sectionsFrame}>
          <div className={styles.headersFrame}>
            <div className={styles.shop}>Shop</div>
          </div>
          <div className={styles.headersFrame1}>
            <div className={styles.newstand}>Newstand</div>
          </div>
          <div className={styles.headersFrame2}>
            <div className={styles.whoWeAre}>Who we are</div>
          </div>
          <div className={styles.headersFrame3}>
            <div className={styles.myProfile}>My profile</div>
          </div>
          <Button
            className={styles.cartButton}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#426b1f",
              borderRadius: "8px",
              "&:hover": { background: "#426b1f" },
              width: 126,
              height: 48,
            }}
          >
            Basket (3)
          </Button>
        </div>
      </header>
      <MyProfileTab />
    </div>
  );
};

export default ProductPage;
