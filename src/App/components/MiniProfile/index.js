import React from "react";
import styles from "./styles.module.css";
import divide from "lodash/divide";
import { FaHeart } from "react-icons/fa";

export default function Profile() {
  const likes = () => {
    return (
      <div>
        <div className={styles.likes}>
          <div className={styles.heart}>
            <FaHeart />
          </div>
          <div>999</div>
        </div>
      </div>
    );
  };
  const photo = () => {
    return (
      <div>
        <div className={styles.photo}>
          <img
            src="https://www.w3schools.com/images/w3schools_green.jpg"
            alt="W3Schools.com"
          />
        </div>
        <div>{likes()}</div>
        <div className={styles.name}>FIDOMAN</div>
      </div>
    );
  };
  const goPerfil = () => {
    return (
      <div className={styles.goPerfil}>
        <button>Go To Perfil</button>
      </div>
    );
  };
  return (
    <div className={styles.general}>
      <div>{photo()}</div>
      <div>{goPerfil()}</div>
    </div>
  );
}
