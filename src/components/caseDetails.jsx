import React from "react";
import { Modal } from "react-bootstrap";

import CaseSummary from "./caseSummary";

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
      <Modal.Header closeButton />
      <Modal.Body>
        <CaseSummary data={data} isDetailsMode={true} />
      </Modal.Body>
    </Modal>
  );
};

export default CaseDetails;
