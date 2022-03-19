import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/card/Card";
import SearchBox from "../components/search/SearchBox";
import Dropdown from "../components/dropdown/Dropdown";
import Spinner from "../components/spinner/Spinner";
import styles from "./CountriesList.module.css";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentCountries, setCurrentCountries] = useState([]);
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const getCountries = async () => {
    setLoading(true);
    try {
      const result = await axios.get("https://restcountries.com/v2/all");
      setCountries(result.data);
      setCurrentCountries(result.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const searchHandle = (searchValue) => {
    setCurrentCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(searchValue)
      )
    );
  };

  const filterHandle = async (region) => {
    setCurrentCountries(
      countries.filter((country) => country.region.includes(region))
    );
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.filter}>
        <div className={styles.searchWrapper}>
          <SearchBox searchHandle={searchHandle} />
        </div>
        <Dropdown
          label={"Filter By Region"}
          list={regions}
          selectItem={filterHandle}
        />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.list}>
          {currentCountries.map((country, index) => (
            <Link to={`/country/${country.name}`}>
              <Card country={country} key={index} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountriesList;
