import React from "react";
const RadioInput = ({ name, label, value, error, options, onChange }) => {
  return (
    <fieldset className="form-group">
      
        <label className="form-label">{label}</label>
        <div className="form-options-list">
          {options.map((option) => (
            <div className="form-check" key={option.value}>
              <input
                className="form-check-input"
                type="radio"
                name={name}
                id={option.value}
                onChange={onChange}
                value={option.value}
              />
              <label className="form-check-label" htmlFor={option.value}>
                {option.label}
              </label>
            </div>
          ))}
        </div>

      {error && (
        <div className="form-control form-error-message" role="alert">
         {error}
        </div>
      )}
    </fieldset>
  );
};

export default RadioInput;
