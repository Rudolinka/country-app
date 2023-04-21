import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return <div>{current.name.official}</div>;
};
export default Country;
