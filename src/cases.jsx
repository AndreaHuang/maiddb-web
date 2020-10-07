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
          yearOfBirth: 1992,
          monthOfBirth: 12,
        },
        categories: ["Bad to kids"],
        details: new Array(100).join(
          "a long description that is at least 30 characters"
        ),
        reference: {
          source: "Facebook",
          link: "https://alink",
          postDate: "2019-09",
        },
        author: {
          _id: "aiddafebfe",
          name: "Admin",
        },
        hateCount: 100,
        images: [
          {
            thumbnailUrl: "https://picsum.photos/200/150",
            url:
              "https://scontent.fhkg4-1.fna.fbcdn.net/v/t1.0-9/120665225_10225450292590690_6873945068203021735_o.jpg?_nc_cat=110&_nc_sid=b9115d&_nc_ohc=qtSznGtDA6cAX-UgVIa&_nc_oc=AQkrt8PgLVVg9mI2Yo3L1att5HMRKFLPhHkMuDdPoJX8qy42lNwK8-qHVv9JjflT0Io&_nc_ht=scontent.fhkg4-1.fna&oh=e9bc063379f6347007a1afad6931aed7&oe=5FA3E705",
          },
          {
            thumbnailUrl: "https://picsum.photos/100/150",
            url: "https://picsum.photos/800/1200",
          },
          {
            thumbnailUrl: "https://picsum.photos/100/150",
            url: "https://picsum.photos/800/1200",
          },
          {
            thumbnailUrl: "https://picsum.photos/100/150",
            url: "https://picsum.photos/800/1200",
          },
        ],
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
              isDetailsMode={false}
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
