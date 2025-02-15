import styles from "./Login.module.css";
import windowImg from "../../assets/window.png";
import mail from "../../assets/mail.png";
import lock from "../../assets/lock.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className={styles.wrapper}>
      <img
        src={windowImg}
        className={styles.windowImg}
        alt="window"
        loading="lazy"
      />
      <div className={styles.greetings}>
        <h1 className={styles.title}>Welcome!</h1>
        <p className={styles.subtitle}>Log in to continue</p>
      </div>
      <form className={styles.loginForm}>
        <label className={styles.formLabel}>
          <img
            src={mail}
            width={32}
            height={32}
            className={styles.leading}
            alt="mail"
            loading="lazy"
          />
          <input
            type="email"
            className={styles.formInput}
            placeholder="Enter your email"
          />
        </label>

        <label className={styles.formLabel}>
          <img
            src={lock}
            width={32}
            height={32}
            className={styles.leading}
            alt="lock"
            loading="lazy"
          />
          <input
            type="password"
            className={styles.formInput}
            placeholder="Enter your password"
          />
        </label>

        <button type="submit" className={styles.login}>
          LOGIN
        </button>

        <Link to="/forgot-password" className={styles.forgot}>
          Forget password?
        </Link>
      </form>
      <p className={styles.noAccount}>
        Don't have a account?{" "}
        <Link to="/signup" className={styles.signup}>
          Sign up
        </Link>
      </p>
    </main>
  );
};

export default Login;
