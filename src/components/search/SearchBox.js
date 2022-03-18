import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBox.module.css";

const SearchBox = ({ searchHandle }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchValue.length > 0) {
            searchHandle(searchValue);
          }
        }}
      >
        <div className={styles.search}>
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input
            type="text"
            placeholder="Search for a country ..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
