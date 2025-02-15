import styles from "./OAuth.module.css";

import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";

const OAuth = () => {
  return (
    <ul className={styles.wrapper}>
      <li>
        <img src={google} alt="google" loading="lazy" />
      </li>
      <li>
        <img src={facebook} alt="facebook" loading="lazy" />
      </li>
      <li>
        <img src={apple} alt="apple" loading="lazy" />
      </li>
    </ul>
  );
};

export default OAuth;
