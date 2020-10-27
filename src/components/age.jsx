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

  if (!birthYear) return null;
  return (
    <div className="age">
      <small>
        <span>Age: </span>
        <span>{calculateAge(birthYear, birthMonth)}</span>
      </small>
    </div>
  );
};

export default Age;
