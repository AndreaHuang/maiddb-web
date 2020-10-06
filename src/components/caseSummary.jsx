import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

import ReactCountryFlag from "react-country-flag";
import _ from "lodash";

const CaseSummary = (props) => {
  const { data, showDetails } = props;
  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="bg-white h-100 mx-20 shadow-sm rounded"
        variant="success"
      >
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
        </Card.Header>
        <Card.Body>
          <Card.Title className="d-flex mb-2 justity-content-start">
            {data.categories.map((catogory, idx) => (
              <Badge key={idx} variant="warning">
                {catogory}
              </Badge>
            ))}
          </Card.Title>

          <Card.Text>{data.details} </Card.Text>
          <Button
            variant="outline-success"
            size="sm"
            onClick={() => {
              console.log("show Details");
              showDetails();
            }}
          >
            ...
          </Button>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          {data.postDate ? (
            <small className="text-muted">Posted at {data.postDate}</small>
          ) : null}
        </Card.Footer>
      </Card>
    </>
  );
};

export default CaseSummary;
