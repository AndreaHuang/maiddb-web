import React, { Component } from "react";
import Joi from "joi-browser";
import _ from "lodash";

import TextInput from "./textInput";
import TextArea from "./textArea";
import RadioInput from "./radioInput";
import AppEditor from "./editor";


const joiValidationOption = {
  abortEarly: false,
  allowUnknown: true
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
  handleEditorChange = (value, name) => {
    console.log(value, name);
    this.handleChange({ currentTarget: { name: name, value: value } });
    // //populate the data
    // const { data, errors } = this.state;
    // data[input.name] = input.value;

    // // Do the validation and show the error message
    // const errorMessage = this.validateSingleProperty(input);
    // if (errorMessage) {
    //   errors[input.name] = errorMessage;
    // } else {
    //   delete errors[input.name];
    // }

    // this.setState({ data, errors });
  };

  handleChangeDate = (value, name, validation) => {
    //populate the data
    const { data, errors } = this.state;
    data[name] = value;
    // Do the validation and show the error message
    if (validation) {
      const errorMessage = validation(value);
      if (errorMessage) {
        errors[name] = errorMessage;
      } else {
        delete errors[name];
      }
    }
    this.setState({ data, errors });

  }
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


  renderEditor = (name, label) => {
    const { data, errors } = this.state;
    return (
      <AppEditor
        name={name}
        value={data[name]}
        label={label}
        error={errors[name]}
        handleChange={this.handleChange}
      />

      // <div className="form-group">
      //   <label htmlFor={name} className="form-label">{label}</label>
      //   <Editor
      //     //   apiKey='your-api-key'
      //     //   cloudChannel='5-stable'
      //     disabled={false}
      //     id='uuid'
      //     init={{
      //       selector: 'textarea#' + { name },
      //       plugins: [
      //         'lists link image paste help wordcount'
      //       ],
      //       toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help'
      //     }}
      //     initialValue=''
      //     inline={false}
      //     onEditorChange={(value) => this.handleEditorChange(value, name)}
      //     outputFormat='html'
      //     plugins=''
      //     tagName='p'
      //     textareaName="editor"
      //     toolbar=''
      //     value={data[name]}
      //   />
      //   {
      //     errors[name] && (
      //       <div className="form-control form-error-message" role="alert">
      //         {errors[name]}
      //       </div>
      //     )
      //   }
      // </div>

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
        className="btn form-button"
      >
        {label}
      </button>
    );
  };

}

export default AppForm;
