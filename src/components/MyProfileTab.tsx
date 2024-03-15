import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import Tomato from "./Tomato";
import styles from "./MyProfileTab.module.css";

const MyProfileTab: FunctionComponent = () => {
  return (
    <section className={styles.myProfileTab}>
      <div className={styles.produceFrame}>
        <div className={styles.tomatoSection}>
          <h1 className={styles.produce}>Produce</h1>
          <div className={styles.augustFrame}>
            <div className={styles.freshAugustContainer}>
              <span className={styles.fresh}>Fresh</span>
              <span className={styles.august212023}> — August 21, 2023</span>
            </div>
          </div>
        </div>
        <div className={styles.chipFramesGroup}>
          <div className={styles.azChip}>
            <Button
              className={styles.defaultChip}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#426b1f",
                borderRadius: "20px",
                "&:hover": { background: "#426b1f" },
                width: 88,
                height: 40,
              }}
            >
              Default
            </Button>
            <Button
              className={styles.aZChip}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "#fff",
                borderRadius: "20px",
                "&:hover": { background: "#fff" },
                width: 62,
              }}
            >
              A-Z
            </Button>
            <Button
              className={styles.listChip}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "#fff",
                borderRadius: "20px",
                "&:hover": { background: "#fff" },
                height: 40,
              }}
            >
              List view
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.tomatoImage}>
        <div className={styles.divider} />
      </div>
      <div className={styles.tomatoParent}>
        <Tomato
          foodImage="/edoneilavvdzlhdowaunsplash-1@2x.png"
          foodName="Heirloom tomato"
          weight="$5.99 / lb"
          locationName="Grown in San Juan Capistrano, CA"
        />
        <Tomato
          foodImage="/noonbrewzicb4-ekmakunsplash@2x.png"
          foodName="Organic ginger"
          weight="$12.99 / lb"
          locationName="Grown in Huntington Beach, CA"
        />
      </div>
    </section>
  );
};

export default MyProfileTab;
