import React from "react";
const AppModal = ({ id, children }) => {
  return (
    <div class="modal" tabindex="-1" id={id}>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AppModal;
