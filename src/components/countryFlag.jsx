import React from "react";
import ReactCountryFlag from "react-country-flag";
const CountryFlag = ({ nationality }) => {
  return (
    <ReactCountryFlag
      countryCode={nationality}
      style={{
        width: "2rem",
         height: '2rem',}}
      title={nationality}
    />
  );
};

export default CountryFlag;
