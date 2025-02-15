import styles from "./Welcome.module.css";

import bed from "../../assets/bed.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <main className={styles.wrapper}>
      <img src={bed} alt="bed" loading="lazy" className={styles.bed} />
      <div className={styles.greetings}>
        <h1 className={styles.title}>Hello!</h1>
        <p className={styles.subtitle}>
          Small steps, big changes <br /> let BetterMe guide you every day!
        </p>
      </div>

      <div className={styles.btnContainer}>
        <Link to="/login" className={styles.login}>
          LOGIN
        </Link>
        <Link to="/signup" className={styles.signup}>
          SIGNUP
        </Link>
      </div>
    </main>
  );
};

export default Welcome;
