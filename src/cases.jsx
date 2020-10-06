import React, { Component } from "react";
import { Container, CardDeck } from "react-bootstrap";
import CaseSummary from "./components/caseSummary";
import CaseDetails from "./components/caseDetails";
class Cases extends Component {
  state = {
    caseDetails: null,
    cases: [
      {
        maid: {
          name: "Maid A",
          nationality: "PH",
          yearOfBirth: 2002,
          monthOfBirth: 12,
        },
        categories: ["Bad to kids"],
        details: "a long description that is at least 30 characters",
        reference: {
          source: "Facebook",
          link: "https://alink",
          postDate: "2019-09",
        },
        author: {
          _id: "aiddafebfe",
          name: "Admin",
        },
      },
      {
        maid: {
          name: "Maid B",
          nationality: "ID",
          yearOfBirth: 2002,
          monthOfBirth: 12,
        },
        categories: ["Bad to eldly"],
        details: "a long description that is at least 30 characters",
        reference: {
          source: "Facebook",
          link: "https://alink",
          postDate: "2019-09",
        },
        author: {
          _id: "aiddafebfe",
          _name: "Admin",
        },
        postDate: "2019-09-09",
      },
    ],
  };
  componentDidUpdate() {
    console.log(this.state.caseDetails);
  }
  render() {
    return (
      <Container>
        <CardDeck>
          {this.state.cases.map((item, idx) => (
            <CaseSummary
              key={idx}
              data={item}
              showDetails={() =>
                this.setState({
                  caseDetails: item,
                })
              }
            />
          ))}
        </CardDeck>
        <CaseDetails
          data={this.state.caseDetails}
          show={this.state.caseDetails !== null}
          handleHide={() =>
            this.setState({
              caseDetails: null,
            })
          }
        />
      </Container>
    );
  }
}

export default Cases;
