import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  console.log(countries);
  return (
    <div>
      <h1>All countries</h1>

      <div className={styles.wrapper}>
        {countries.map((item) => (
          <Card key={item.name.common} country={item} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
