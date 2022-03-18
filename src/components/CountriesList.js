import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card/Card";
import SearchBox from "./search/SearchBox";
import styles from "./CountriesList.module.css";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState([]);
  const getCountries = async () => {
    const result = await axios.get("https://restcountries.com/v2/all");
    setCountries(result.data);
    console.log("res", result);
  };
  const searchHandle = async (searchValue) => {
    try {
      const result = await axios.get(
        `https://restcountries.com/v2/name/${searchValue}`
      );
      setCountries(result.data);
      console.log("search", result);
    } catch (error) {
      console.log(error);
    }
  };
  const filterHandle = async (region) => {
    try {
      const result = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      //   setCountries(result.data);
      console.log("search", result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);
  console.log("region", region);
  return (
    <div className={styles.page}>
      <div>
        <SearchBox searchHandle={searchHandle} />
        <select
          onChange={(e) => {
            setRegion(e.target.value);
            filterHandle(e.target.value);
          }}
          value={region}
        >
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
      <div className={styles.list}>
        {countries.map((country, index) => (
          <Card country={country} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
