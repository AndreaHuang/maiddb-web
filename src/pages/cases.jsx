import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import { toast } from "react-toastify";

import CaseSummary from "../components/caseSummary";
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
        <CardDeck>
          {this.state.cases.map((item, idx) => (
            <CaseSummary key={idx} data={item} />
          ))}
        </CardDeck>
      </div>
    );
  }
}

export default Cases;
