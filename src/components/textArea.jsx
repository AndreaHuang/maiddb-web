import React from "react";
const TextArea = ({ name, label, value, error, rows = "5", ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        value={value}
        rows={rows}
        name={name}
        className="form-control"
        id={name}
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

export default TextArea;
