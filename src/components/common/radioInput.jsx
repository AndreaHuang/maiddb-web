import React from "react";
const RadioInput = ({ name, label, value, error, options, onChange }) => {
  return (
    <fieldset className="form-group">
      <div className="row">
        <legend className="col-form-label col-sm-2 pt-0">{label}</legend>
        <div className="col-sm-10">
          {options.map((option) => (
            <div className="form-check" key={option.value}>
              <input
                className="form-check-input"
                type="radio"
                name={name}
                id={option.value}
                onChange={onChange}
              />
              <label className="form-check-label" htmlFor={option.value}>
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {error && (
        <div className="alert alert-danger mt-2" role="alert">
          <small> {error}</small>
        </div>
      )}
    </fieldset>
  );
};

export default RadioInput;
