import React, { useState } from "react";
import styles from "./styles.module.css";
import Container from "orionsoft-parts/lib/components/Container";

export default function Profile() {
  const [lorem, setLorem] = useState(false);

  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  function showMore(state) {
    if (state === false) {
      return "Mas";
    }
    return "Menos";
  }
  function shortText(long, state) {
    if (state === false) {
      return <div>{long.substr(0, 50)}...</div>;
    }
    return long;
  }

  const photo = () => {
    return (
      <div className={styles.photo}>
        <img
          src="https://www.w3schools.com/images/w3schools_green.jpg"
          alt="W3Schools.com"
        />
      </div>
    );
  };

  const description = description => {
    return (
      <div>
        <div>Descripcion</div>
        <div>
          {shortText(text, lorem)}
          <button onClick={() => setLorem(!lorem)}>
            Ver {showMore(lorem)}
          </button>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <div className={styles.contenedor}>
        {photo()}
        {description()}
      </div>
    </Container>
  );
}
