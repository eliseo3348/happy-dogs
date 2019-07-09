import React from "react";
import styles from "./styles.module.css";
import Formulario from "App/components/Formulario";

export default function Home() {
  return (
    <div className={styles.miniProfile}>
      <Formulario />
    </div>
  );
}
