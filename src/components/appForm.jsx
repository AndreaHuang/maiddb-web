import React, { Component } from "react";
import Joi from "joi-browser";
import _ from "lodash";

import TextInput from "./textInput";
import TextArea from "./textArea";
import RadioInput from "./radioInput";

const joiValidationOption = {
  abortEarly: false,
};
class AppForm extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const { data } = this.state;

    const { error } = Joi.validate(data, this.schema, joiValidationOption);

    let validationError = {};
    if (error) {
      error.details.forEach((item) => {
        validationError[item.path[0]] = item.message;
      });
    }
    return validationError;
  };
  validateSingleProperty = (input) => {
    const validationRule = _.get(this.schema, input.name);
    if (!validationRule) {
      //No validation rule defined
      return null;
    }
    const { error } = Joi.validate(input.value, validationRule);

    if (error) {
      return error.message;
    }
    return null;
  };
  handleSubmit = (e) => {
    e.preventDefault(); //so that there won't be full page reload
    this.setState({ errors: {} }); //clear previous errors
    const errors = this.validate(); //Do the validation for the whole form,
    if (Object.keys(errors).length > 0) {
      //has any error
      this.setState({ errors });
      return;
    }
    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    //populate the data
    const { data, errors } = this.state;
    data[input.name] = input.value;

    // Do the validation and show the error message
    const errorMessage = this.validateSingleProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    this.setState({ data, errors });
  };
  renderInput = (name, label) => {
    const { data, errors } = this.state;
    return (
      <TextInput
        name={name}
        value={data[name]}
        label={label}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };
  renderPasswordInput = (name, label) => {
    const { data, errors } = this.state;
    return (
      <TextInput
        type="password"
        name={name}
        value={data[name]}
        label={label}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };
  renderTextArea = (name, label) => {
    const { data, errors } = this.state;
    return (
      <TextArea
        name={name}
        value={data[name]}
        label={label}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };
  renderRadioSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <RadioInput
        name={name}
        value={data[name]}
        label={label}
        error={errors[name]}
        onChange={this.handleChange}
        options={options}
      />
    );
  };
  renderButton = (label) => {
    const { errors } = this.state;
    return (
      <button
        type="submit"
        disabled={Object.keys(errors).length > 0}
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };
}

export default AppForm;
