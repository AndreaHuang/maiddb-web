import React from "react";
const TextArea = ({ name, label, value, error, rows = "5", ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">{label}</label>
      <textarea
        value={value}
        rows={rows}
        name={name}
        className="form-control text-input text-area"
        id={name}
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

export default TextArea;
