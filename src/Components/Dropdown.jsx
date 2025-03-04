import React from "react";
import { countryList } from "../Data/countryList";

const Dropdown = ({ label, currency, setCurrency }) => {
  return (
    <div className="w-full max-w-xs text-center">
      <p className="mb-2 font-medium text-sm sm:text-base">{label}</p>
      <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white">
        {/* Flag Image */}
        <img
          src={`https://flagsapi.com/${countryList[currency]}/flat/64.png`}
          alt={currency}
          className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
          loading="lazy"
        />

        {/* Dropdown Select */}
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="bg-transparent text-sm sm:text-lg outline-none w-full"
        >
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
