import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import AppForm from "../components/common/appForm";
import caseService from "../services/caseService";
import constants from "../config/constants";

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
      externalSource: "",
      externalLink: "",
      originalPostDate: "",
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

    externalSource: Joi.string().required().min(3).max(100),
    externalLink: Joi.string(),
    originalPostDate: Joi.string().isoDate(),
    // }),
  };

  buildRequestBody = () => {
    const { data } = this.state;
    const requestBody = {
      maid: {
        name: data.maidName,
        nationality: data.maidNationality,
      },
      details: data.details,
    };
    const reference = {};
    if (data.externalSource) {
      reference.source = data.externalSource;
    }
    if (data.externalSource) {
      reference.link = data.externalLink;
    }
    if (data.externalSource) {
      reference.postDate = data.originalPostDate;
    }
    if (Object.keys(reference).length > 0) {
      requestBody.reference = reference;
    }
    return requestBody;
  };
  doSubmit = async () => {
    try {
      await caseService.createNewCase(this.buildRequestBody());

      toast.info(
        "You case has been submmited successfully. We will review it and pulish it asap. Thank you."
      );
      this.props.history.push(constants.PATH_CASES);
    } catch (ex) {
      if (ex.response) {
        if (ex.response.status === 401) {
          toast.error("Error Code " + ex.response.data.errorCode);

          this.props.history.push(constants.PATH_LOGIN);
        } else if (ex.response.status === 400) {
          toast.error(
            ex.response.data.errorCode + " " + ex.response.data.message
          );
        } else {
          toast.error(ex.message);
        }
      } else {
        toast.error(ex.message);
      }
    }
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

          {this.renderInput("externalSource", "External Source")}
          {this.renderInput("externalLink", "External Link")}
          {this.renderInput("originalPostDate", "Original Post Date")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default NewCaseForm;
