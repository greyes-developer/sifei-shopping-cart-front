import React from "react";
import { Modal } from "../../../shared/Modal/Modal";

import "./modal.css";

export const DeleteConfirmationModal = ({
  isModalVisible,
  hideModal,
  handleDeleteProducts,
  productName,
}) => {
  return (
    <Modal
      show={isModalVisible}
      handleLeftButton={hideModal}
      handleRightButton={handleDeleteProducts}
      leftButtonText="Cancelar"
      rightButtonText="Eliminar producto"
    >
      <div className="confirmation-modal-container">
        <h2 className="title">Eliminar</h2>
        <h4 className="description">Estás a punto de eliminar {productName}</h4>
      </div>
    </Modal>
  );
};
