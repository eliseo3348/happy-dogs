import React from "react";
import styles from "./styles.module.css";
import { FaHeart } from "react-icons/fa";
import dogges from "./info.js";

export default function MiniProfile() {
  const likes = like => {
    return (
      <div className={styles.likes}>
        <div className={styles.heart}>
          <FaHeart />
        </div>
        <div>{like}</div>
      </div>
    );
  };
  const name = name => {
    return <div className={styles.name}>{name}</div>;
  };
  const photo = photo => {
    return (
      <div>
        <div className={styles.photo}>
          <img src={photo} alt="W3Schools.com" />
        </div>
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

  const dogList = () => {
    return dogges.map(dog => {
      return (
        <div>
          <div className="col-xs-12 col-sm-6">
            <div>{photo(dog.photo)}</div>
            <div>{likes(dog.likes)}</div>
            <div>{name(dog.name)}</div>
            <div>{goPerfil()}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.general}>
      <div>{dogList()}</div>
    </div>
  );
}
