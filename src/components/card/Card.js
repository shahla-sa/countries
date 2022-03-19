import React from "react";
import styles from "./Card.module.css";

const Card = ({ country }) => {
  const { name, population, capital, region, flag } = country;
  return (
    <div className={styles.card}>
      <figure>
        <img src={flag} alt="flag" />
      </figure>
      <div className={styles.content}>
        <h4 className={styles.title}>{name}</h4>
        <div className={styles.item}>
          <label>Population </label> : <span>{population}</span>
        </div>
        <div className={styles.item}>
          <label>Region </label> : <span>{region}</span>
        </div>
        <div className={styles.item}>
          <label>Capital</label> : <span>{capital}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
