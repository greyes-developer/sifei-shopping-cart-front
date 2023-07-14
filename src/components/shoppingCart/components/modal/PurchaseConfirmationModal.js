import React from "react";
import { Modal } from "../../../shared/Modal/Modal";

import "./modal.css";

export const PurchaseConfirmationModal = ({
  isModalVisible,
  hideModal,
  handleBuyProducts,
  total,
}) => {
  return (
    <Modal
      show={isModalVisible}
      handleLeftButton={hideModal}
      handleRightButton={handleBuyProducts}
      leftButtonText="Cancelar"
      rightButtonText="Confirmar compra"
    >
      <div className="confirmation-modal-container">
        <h2 className="title">Compra</h2>
        <h4 className="description">
          Está a punto de realizar una compra por el total de ${total}
        </h4>
      </div>
    </Modal>
  );
};
