import React from "react";
import styles from "./styles.module.css";
import Tabla from "App/components/Tabla";

export default function Home() {
  return (
    <div className={styles.miniProfile}>
      <Tabla />
    </div>
  );
}
