import React from "react";

import { Card, Badge } from "react-bootstrap";

import ReactCountryFlag from "react-country-flag";

import Hate from "./hate";
import Share from "./share";
import ExternalSource from "./externalSource";
import Age from "./age";
import CaseBody from "./caseBody";

const CaseSummary = (props) => {
  const { data, showDetails, isDetailsMode } = props;
  let widthStyle = { width: "100%" };
  let cardClassName = "bg-white mx-20 shadow-sm rounded";
  if (!isDetailsMode) {
    cardClassName += cardClassName + " h-100";
    widthStyle = { width: "18rem" };
  } else {
    cardClassName += cardClassName + "d-flex";
  }

  return (
    <>
      <Card style={widthStyle} className={cardClassName} variant="success">
        <Card.Header className="d-flex mb-2 justity-content-left">
          <Badge variant="danger" className="mr-1">
            {data.maid.name}
          </Badge>

          <ReactCountryFlag
            countryCode={data.maid.nationality}
            style={{
              width: "2em",
            }}
            title={data.maid.nationality}
          />
          <Age
            birthYear={data.maid.yearOfBirth}
            birthMonth={data.maid.monthOfBirth}
          ></Age>
        </Card.Header>
        <Card.Body>
          <Card.Title className="d-flex mb-2 justity-content-start">
            {data.categories.map((catogory, idx) => (
              <Badge key={idx} variant="warning">
                {catogory}
              </Badge>
            ))}
          </Card.Title>
          <CaseBody
            isDetailsMode={isDetailsMode}
            details={data.details}
            images={data.images}
            showDetails={showDetails}
          />
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <div className="d-flex justify-content-start">
            <ExternalSource
              name={data.reference.source}
              link={data.reference.link}
            />
          </div>
          <div className="d-flex justify-content-start">
            <Share
              onClick={() => {
                console.log("To Share this post");
              }}
            />
          </div>
          <div className="d-flex justify-content-start">
            <Hate
              hated={true}
              count={100}
              onToggle={() => {
                console.log("Hate icon is clicked");
              }}
            />
          </div>
          <div className="d-flex justify-content-end">
            {" "}
            <small className="text-muted">
              {data.author.name ? data.author.name : null}
              {data.postDate ? data.postDate : null}
            </small>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default CaseSummary;
