import React from "react";
import ReactCountryFlag from "react-country-flag";
const CountryFlag = ({ nationality }) => {
  return (
    <ReactCountryFlag
      countryCode={nationality}
      style={{
        "fontSize": "1rem",
        "alignSelf": "center",
        "padding": "0 .5rem"
      }}
      title={nationality}
    />
  );
};

export default CountryFlag;
