import React from "react";

const Age = (props) => {
  const { birthYear, birthMonth = null } = props;
  const calculateAge = (yearOfBirth, monthOfBirth) => {
    const today = new Date();
    let age_now = today.getFullYear() - yearOfBirth;
    if (monthOfBirth && today.getMonth() < monthOfBirth) {
      age_now--;
    }
    return age_now;
  };

  console.log(birthYear, birthMonth);
  return (
    <div>
      <span>Age: </span>
      <span>{calculateAge(birthYear, birthMonth)}</span>
    </div>
  );
};

export default Age;
