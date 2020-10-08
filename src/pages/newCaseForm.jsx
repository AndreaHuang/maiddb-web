import React from "react";
import Joi from "joi-browser";

import AppForm from "../components/common/appForm";

const nationalityOptions = [
  {
    value: "ID",
    label: "Indonesia",
  },
  {
    value: "TH",
    label: "Thailand",
  },
];
class NewCaseForm extends AppForm {
  state = {
    data: {
      maidName: "",
      maidNationality: "",
      // maidYearOfBirth: "",
      // maidMonthOfBirth: "",
      details: "",
    },
    errors: {},
    buttonClickable: true,
  };
  schema = {
    maidName: Joi.string().required().min(3).max(100).label("Maid Name"),
    maidNationality: Joi.string().required().label("Nationality"),
    // maidYearOfBirth: Joi.number().integer().optional().label("Birth Year"),
    // maidMonthOfBirth: Joi.number()
    //   .integer()
    //   .optional()
    //   .min(1)
    //   .max(12)
    //   .label("Birth Month"),

    // categories: Joi.array().required().min(1).max(50),
    details: Joi.string().required().min(5).max(5000).label("Details"),
    // reference: Joi.object({
    //   source: Joi.string().required().min(3).max(100),
    //   link: Joi.string(),
    //   postDate: Joi.string().isoDate(),
    // }),
  };

  doSubmit = () => {
    console.log("action after validation passed");
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("maidName", "Maid Name")}
          {this.renderRadioSelect(
            "maidNationality",
            "Maid Nationality",
            nationalityOptions
          )}
          {this.renderTextArea("details", "Details")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default NewCaseForm;
