import React from "react";
import styles from "./styles.module.css";
import Profile2 from "App/components/Profile2";

export default function Home() {
  return (
    <div className={styles.miniProfile}>
      <Profile2 />
    </div>
  );
}
