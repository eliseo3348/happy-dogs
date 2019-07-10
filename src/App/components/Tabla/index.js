import React from "react";
import styles from "./styles.module.css";
import dogOwner from "./info.js";
import Container from "orionsoft-parts/lib/components/Container";

export default function Tabla() {
  const table = () => {
    return dogOwner.map((dog, index) => {
      return (
        <tr key={index}>
          <td>
            <div className={styles.element}>{dog.dog}</div>
          </td>
          <td>
            <div className={styles.element}>{dog.owner}</div>
          </td>
          <td>
            <div className={styles.element}>{dog.age}</div>
          </td>
        </tr>
      );
    });
  };

  const showTable = () => {
    return (
      <div className={styles.showTable}>
        <table className={styles.table} border="1">
          <tbody>
            <tr>
              <th>Dog</th>
              <th>Owner</th>
              <th>Age</th>
            </tr>
            {table()}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <Container>{showTable()}</Container>
    </div>
  );
}
