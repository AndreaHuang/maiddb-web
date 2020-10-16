import React, { Component } from "react";
import { toast } from "react-toastify";

import CaseCard from "../components/caseCard";
import SearchBox from "../components/searchBox";
import caseService from "../services/caseService";
import queryString from "query-string";

class Cases extends Component {
  state = {
    cases: [],
    searchKeyword: "",
  };

  async populateCases() {
    try {
      //success response will be like {data:[],meta:{}}
      const parsed = queryString.parse(this.props.location.search);
      const response = await caseService.getCases(parsed.search);
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
        <SearchBox name="search" />
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
