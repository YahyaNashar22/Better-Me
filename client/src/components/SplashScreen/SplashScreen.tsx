import styles from "./SplashScreen.module.css";

import splash_screen from "../../assets/splash_pink.png";



const SplashScreen = () => {
  return <img src={splash_screen} width={"100%"} height={"100%"} className={styles.splash} alt="splash screen" loading="lazy" />
};

export default SplashScreen;
