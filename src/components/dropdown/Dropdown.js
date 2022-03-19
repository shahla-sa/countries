import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Dropdown.module.css";

const Dropdown = ({ list, label: labelText, selectItem }) => {
  const [show, setShow] = useState(false);
  const [label, setLabel] = useState(labelText);
  return (
    <div className={styles.dropdown}>
      <label onClick={() => setShow(!show)}>
        {label}
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`${styles.arrow} ${show ? styles.rotate : ""}`}
        />
      </label>
      <div className={`${styles.dropdownList} ${show ? styles.show : ""}`}>
        {list?.map((item, index) => (
          <div
            className={styles.item}
            key={index}
            onClick={() => {
              selectItem(item);
              setShow(false);
              setLabel(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
