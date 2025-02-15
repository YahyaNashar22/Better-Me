import styles from "./SplashScreen.module.css";

import splash_screen from "../../assets/splash_pink.png";

const SplashScreen = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src={splash_screen}
        className={styles.splash}
        alt="splash screen"
        loading="lazy"
      />
    </div>
  );
};

export default SplashScreen;
