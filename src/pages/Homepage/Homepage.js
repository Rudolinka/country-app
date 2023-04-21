import React, { useEffect, useState } from "react";

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

      <div>
        {countries.map((item) => (
          <p>{item.name.official}</p>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
