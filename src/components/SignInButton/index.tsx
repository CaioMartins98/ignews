import styles from "./styles.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const { data: session } = useSession();
  console.log(session);
  return session ? (
    <button
      onClick={() => signOut()}
      className={styles.singInButton}
      type="button"
    >
      <img src={session.user.image} />
     
      <p>{session.user?.name}</p>
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      onClick={() => signIn("github")}
      className={styles.singInButton}
      type="button"
    >
      <FaGithub color="#EBA417" />
      <p>Sign in with Github</p>
    </button>
  );
}
