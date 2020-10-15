import React from "react";
const AppModal = ({ id, children }) => {
  return (
    <div className="modal" tabIndex="-1" id={id}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AppModal;
