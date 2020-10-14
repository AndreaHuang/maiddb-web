import React from "react";
const TextInput = ({ name, label, value, error, type = "input", ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        type={type}
        id={name}
        className="form-control"
        {...rest}
      />
      {error && (
        <div className="alert alert-danger mt-2" role="alert">
          <small> {error}</small>
        </div>
      )}
    </div>
  );
};

export default TextInput;
