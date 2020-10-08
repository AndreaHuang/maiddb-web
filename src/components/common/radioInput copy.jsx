import React from "react";
const RadioInput = ({ name, label, value, error, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        value={value}
        name={name}
        id={name}
        className="form-control"
        {...rest}
      >
        {options.map((option) => (
          <div className="form-check form-check-inline" key={option.value}>
            <input
              className="form-check-input"
              type="radio"
              name={option.value}
              id={option.value}
              value={option.value}
            />
            <label className="form-check-label" htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
      </select>
      {error && (
        <div className="alert alert-danger mt-2" role="alert">
          <small> {error}</small>
        </div>
      )}
    </div>
  );
};

export default RadioInput;
