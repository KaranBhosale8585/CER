import React from "react";
import { countryList } from "../Data/countryList";

const Dropdown = ({ label, currency, setCurrency }) => {
  return (
    <div className="dropdown-container">
      <p>{label}</p>
      <div className="select-container">
        <img
          src={`https://flagsapi.com/${countryList[currency]}/flat/64.png`}
          alt={currency}
          loading="lazy"
        />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {Object.keys(countryList).map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
