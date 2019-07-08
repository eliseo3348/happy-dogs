import React from "react";
import styles from "./styles.module.css";
import MiniProfile from "App/components/MiniProfile";

export default function Home() {
  return (
    <div className={styles.mini}>
      <div className="row">
        <MiniProfile />
      </div>
    </div>
  );
}
