import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import AppForm from "../components/appForm";
import caseService from "../services/caseService";
import constants from "../config/constants";
import FileUpload from "../components/fileUpload";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subMonths } from "date-fns";

const nationalityOptions = [
  {
    value: "ID",
    label: "Indonesia",
  },
  {
    value: "PH",
    label: "Philippine",
  },
];
class NewCaseForm extends AppForm {
  state = {
    data: {
      maidName: "",
      maidNationality: "",
      maidBirthday: "",
      details: "",
      externalSource: "",
      externalLink: "",
      originalPostDate: "",
      files: [],
    },
    errors: {},
    buttonClickable: true,
  };
  schema = {
    maidName: Joi.string().required().min(3).max(100).label("Maid Name"),
    maidNationality: Joi.string().required().label("Nationality"),
    // maidBirthday: Joi.date().label("Birthday"),
    // categories: Joi.array().required().min(1).max(50),
    details: Joi.string().required().min(5).max(5000).label("Details"),

    // externalSource: Joi.string().optional().label("Original Source"),
    // externalLink: Joi.string().optional().label("Original Link"),
    // originalPostDate: Joi.date().optional().label("Original Post Date"),
    files: Joi.array(),

    // }),
  };

  onFilesUpdate = (files) => {
    const { data } = this.state;
    data.files = files;

    this.setState({ data });
  };
  validateMaidBirthday =(value)=>{
      if(value.getFullYear() + 18 > new Date().getFullYear()){
        return "Maid must be older than 18."
      }
      return null;
  };

  renderMaidBirthdayDatePicker=(name,label)=>{
    const { data, errors } = this.state;
    return (
     <div className="form-group">
      <label htmlFor={name} className="form-label">{label}</label>
      <DatePicker selected={data[name]}
      minDate={subMonths(new Date(),12*65)}
      maxDate={subMonths(new Date(), 12*18)}
      dateFormat="yyyy"
      showYearPicker
      onChange={(newValue)=>this.handleChangeDate(newValue,name)} />
      {errors[name] && (
        <div className="form-control form-error-message" role="alert">
         {errors[name]}
        </div>
      )}
      </div>
    );
  };
  renderOriginalPostDatePicker=(name,label)=>{
    const { data, errors } = this.state;
    return (
     <div className="form-group">
      <label htmlFor={name} className="form-label">{label}</label>
      <DatePicker selected={data[name]}
      maxDate={new Date()}
      dateFormat="yyyy-MM-dd"
      onChange={(newValue)=>this.handleChangeDate(newValue,name)} />
      {errors[name] && (
        <div className="form-control form-error-message" role="alert">
         {errors[name]}
        </div>
      )}
      </div>
    );
  }

  buildFileArrayForUpload = (files) => {
    const result = files.map((fileItem) => {
      console.log(fileItem);
      const resultItem = {
        name: fileItem.filename,
        type: fileItem.fileType,
        size: fileItem.fileSize,
        lastModified: fileItem.file.lastModified,
        id: fileItem.serverId,
      };
      return resultItem;
    });
    return result;
  };

  buildRequestBody = () => {
    const { data } = this.state;
    const requestBody = {
      maid: {
        name: data.maidName,
        nationality: data.maidNationality
      },
      details: data.details,
    };
    if(data.maidBirthday){
      requestBody.maid.birthday =data.maidBirthday.toISOString().split("T")[0];
    }
    const files = this.buildFileArrayForUpload(data.files);
    if (files) {
      requestBody.files = files;
    }
    const reference = {};
    if (data.externalSource) {
      reference.source = data.externalSource;
    }
    if (data.externalLink) {
      reference.link = data.externalLink;
    }
    if (data.originalPostDate) {
      reference.postDate = data.originalPostDate.toISOString().split("T")[0];;
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
        <form onSubmit={this.handleSubmit} className="main-form">
          <h2 className="page-title">Report a Case</h2>
          <FileUpload files={this.state.files} setFiles={this.onFilesUpdate} />
          {this.renderInput("maidName", "Maid Name")}
          {this.renderRadioSelect(
            "maidNationality",
            "Maid Nationality",
            nationalityOptions
          )}
          {this.renderMaidBirthdayDatePicker("maidBirthday","Birthday")}
          {this.renderTextArea("details", "Details")}

          {this.renderInput("externalSource", "Original Source")}
          {this.renderInput("externalLink", "Original Link")}
          {this.renderOriginalPostDatePicker("originalPostDate", "Original Post Date")}
          {this.renderButton("Submit")}
        </form>
    );
  }
}

export default NewCaseForm;
