import React from "react";
import { Modal, Badge } from "react-bootstrap";

import ReactCountryFlag from "react-country-flag";

const CaseDetails = (props) => {
  const { data, show, handleHide } = props;
  console.log("data", data);

  if (data === null) {
    return null;
  }
  return (
    <Modal dialogClassName="modal-90w" show={true} onHide={handleHide}>
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
      <Modal.Footer className="d-flex justify-content-end">
        <small className="text-muted">
          {data.author.name ? <a>{data.author.name} </a> : null}
          {data.postDate ? data.postDate : null}
        </small>
      </Modal.Footer>
    </Modal>
  );
};

export default CaseDetails;
