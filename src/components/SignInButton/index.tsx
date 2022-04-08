import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button className={styles.singInButton} type="button">
      <FaGithub color="#04D361" />
      <p>Caio Martins</p>
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.singInButton} type="button">
      <FaGithub color="#EBA417" />
      <p>Sign in with Github</p>
    </button>
  );
}
