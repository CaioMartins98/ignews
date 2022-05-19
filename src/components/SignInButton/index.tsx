import styles from "./styles.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";
import ReactLoading from "react-loading";
import { height } from "@mui/system";

export function SignInButton() {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    try {
      signIn("github");
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogout = () => {
    setLoading(true);
    try {
      signOut();
    } catch (err) {
      console.log(err);
    }
  };
  return session ? (
    <button
      onClick={handleLogout}
      className={styles.singOutButton}
      type="button"
    >
      {loading ? (
        <div>
          <ReactLoading type="bars" color="#FFF" height={50} width={50} />
        </div>
      ) : (
        <>
          <img src={session.user.image} />

          <p>{session.user?.name}</p>

          <FiLogOut color="#737380" className={styles.closeIcon} />
        </>
      )}
    </button>
  ) : (
    <button onClick={handleLogin} className={styles.singInButton} type="button">
      {loading ? (
        <>
          <ReactLoading type="bars" color="#FFF" height={50} width={50} />
        </>
      ) : (
        <>
          <FaGithub color="#EBA417" />
          <p>Sign in with Github</p>
        </>
      )}
    </button>
  );
}
