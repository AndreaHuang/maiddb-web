import React from "react";
import ReactCountryFlag from "react-country-flag";
const CountryFlag = ({ nationality }) => {
  return (
    <ReactCountryFlag
      countryCode={nationality}
      style={{
        "font-size": "1rem",
        "align-self": "center",
        "padding": "0 .5rem"
      }}
      title={nationality}
    />
  );
};

export default CountryFlag;
