import React from "react";

import "./modal.css";

export const Modal = ({
  leftButtonText = "",
  rightButtonText = "",
  handleLeftButton,
  handleRightButton,
  show,
  children,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={`${showHideClassName}`}>
      <section className="modal-main">
        {children}
        <div className="btns-container">
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleLeftButton}
          >
            {leftButtonText}
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleRightButton}
          >
            {rightButtonText}
          </button>
        </div>
      </section>
    </div>
  );
};
