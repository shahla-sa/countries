import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../components/spinner/Spinner";
import styles from "./CountryDetails.module.css";

const CountryDetails = () => {
  const [country, setCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const { name } = useParams();
  const navigate = useNavigate();
  const {
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    nativeName,
    currencies,
    languages,
    borders,
  } = country;

  const getCountry = async (name) => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://restcountries.com/v2/name/${name}`
      );
      setCountry(result.data[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getBorderCountries = async (codes) => {
    console.log("codes", codes);
    try {
      const result = await axios.get(
        `https://restcountries.com/v2/alpha?codes=${codes}`
      );
      setBorderCountries(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(country).length === 0) {
      getCountry(name);
    }
    if (borders?.length > 0) {
      getBorderCountries(borders.join(","));
    }
    // eslint-disable-next-line
  }, [name, borders]);

  return (
    <div>
      <button className={styles.back} onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <span>Back</span>
      </button>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.details}>
          <figure>
            <img src={flag} alt="flag" />
          </figure>
          <div className={styles.content}>
            <h1 className={styles.title}>{name}</h1>
            <div className={styles.items}>
              <div className={styles.item}>
                <label>Native Name</label> : <span>{nativeName}</span>
              </div>
              <div className={styles.item}>
                <label>Population</label> : <span>{population}</span>
              </div>
              <div className={styles.item}>
                <label>Region</label> : <span>{region}</span>
              </div>
              <div className={styles.item}>
                <label>Sub Region</label> : <span>{subregion}</span>
              </div>
              <div className={styles.item}>
                <label>Capital</label> : <span>{capital}</span>
              </div>
              <div className={styles.item}>
                <label>Top Level Domain</label> :{" "}
                <span>{topLevelDomain?.join(" , ")}</span>
              </div>
              <div className={styles.item}>
                <label>Currencies</label> :{" "}
                <span>
                  {currencies?.map((currency) => currency.code).join(" , ")}
                </span>
              </div>
              <div className={styles.item}>
                <label>languages</label> :{" "}
                <span>{languages?.map((lang) => lang.name).join(" , ")}</span>
              </div>
              <div className={styles.borders}>
                <label>Border Countries : </label>
                <div>
                  {borderCountries.map((border, index) => (
                    <a href={`/country/${border.name}`} key={index}>
                      <span className={styles.link}>{border.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
