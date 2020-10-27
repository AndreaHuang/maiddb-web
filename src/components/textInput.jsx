import React from "react";
const TextInput = ({ name, label, value, error, type = "input", ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">{label}</label>
      <input
        value={value}
        name={name}
        type={type}
        id={name}
        className="form-control text-input"
        {...rest}
      />
      {error && (
        <div className="form-control form-error-message" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextInput;
