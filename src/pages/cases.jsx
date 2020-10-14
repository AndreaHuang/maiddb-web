import React, { Component } from "react";
import { toast } from "react-toastify";

import CaseCard from "../components/caseCard";
import caseService from "../services/caseService";
class Cases extends Component {
  state = {
    cases: [],
  };

  async populateCases() {
    try {
      //success response will be like {data:[],meta:{}}

      const response = await caseService.getCases();
      if (response.data.data) {
        this.setState({ cases: response.data.data });
      } else {
        toast.warn("Found 0 case.");
      }
    } catch (ex) {
      //get 4xx error
      if (
        ex.response &&
        ex.response.status >= 400 &&
        ex.response.status < 500
      ) {
        const errorDetails = ex.response.data;
        toast.error(
          ex.message + (errorDetails ? ", details: " + errorDetails : "")
        );
      }
      toast.error(ex.message);
    }
  }

  async componentDidMount() {
    await this.populateCases();
  }
  render() {
    return (
      <div className="container">
        <div className="card-columns">
          {this.state.cases.map((item, idx) => (
            <CaseCard key={idx} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Cases;
