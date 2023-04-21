import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Country.module.css";

const Country = () => {
  const [current, setCurrent] = useState();
  const { name } = useParams();

  useEffect(() => {
    getCountryByName();
  }, []);

  const getCountryByName = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();
    setCurrent(data[0]);
  };
  console.log(current);
  if (!current) return "Loading...";

  const currencies = Object.entries(current.currencies).map((v) => v[0]);
  const languages = Object.keys(current.languages);

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h1>{current.name.official}</h1>
        <img src={current.coatOfArms.png} alt={current.coatOfArms.alt} />
        <p>Capital: {current.capital}</p>
        <p>👤 {current.population} people</p>
        <p>Size: {current.area} m2</p>
        <p>Subregion: {current.subregion}</p>
        <p>Main currency: {current.currencies[currencies[0]].name}</p>
        <p>Main language: {current.languages[languages[0]]}</p>
      </div>
    </div>
  );
};
export default Country;
