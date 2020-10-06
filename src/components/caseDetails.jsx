import React from "react";
import { Modal, Badge } from "react-bootstrap";

import ReactCountryFlag from "react-country-flag";

import Hate from "./hate";
import Share from "./share";

const CaseDetails = (props) => {
  const { data, handleHide } = props;
  console.log("data", data);

  if (data === null) {
    return null;
  }
  return (
    <Modal
      centered={true}
      dialogClassName="modal-90w"
      keyboard={true}
      onHide={handleHide}
      scrollable={true}
      show={true}
      size="lg"
    >
      <Modal.Header closeButton>
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
      </Modal.Header>
      <Modal.Body>
        {data.categories.map((catogory, idx) => (
          <Badge key={idx} variant="warning">
            {catogory}
          </Badge>
        ))}
        <p>{data.details}</p>
      </Modal.Body>
      <Modal.Footer>
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
      </Modal.Footer>
    </Modal>
  );
};

export default CaseDetails;
