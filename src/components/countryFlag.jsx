import React from "react";
import ReactCountryFlag from "react-country-flag";
const CountryFlag = ({ nationality }) => {
  return (
    <ReactCountryFlag
      countryCode={nationality}
      style={{
        width: "2em",
        lineHeight: "1.5em",
      }}
      title={nationality}
    />
  );
};

export default CountryFlag;
