import React from "react";

const Age = (props) => {
  const { birthday } = props;
  console.log(birthday);
  const calculateAge = (birthday) => {
    const today = new Date();
    const splitted=birthday.split("-");
    let age_now = today.getFullYear() - parseInt(splitted[0]);
    console.log(age_now);
    if (today.getMonth() < parseInt(splitted[1])) {
      age_now--;
    }
    return age_now;
  };

  if (!birthday) return null;
  return (
    <div className="age">
      <small>
        <span>Age: </span>
        <span>{calculateAge(birthday)}</span>
      </small>
    </div>
  );
};

export default Age;
