import React, { useState } from "react";
import { numberWithCommas } from "../../../../utils";
import { DeleteConfirmationModal } from "../modal/DeleteConfirmationModal";

export const Row = ({ item, deleteProductFromTable }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleDeleteProducts = (item) => {
    deleteProductFromTable(item);
    hideModal();
  };

  return (
    <>
      <DeleteConfirmationModal
        isModalVisible={isModalVisible}
        hideModal={hideModal}
        handleDeleteProducts={() => handleDeleteProducts(item)}
        productName={item.nombre_producto}
      />
      <tr>
        <th scope="row">{item.id_producto}</th>
        <td>{item.nombre_producto}</td>
        <td>${numberWithCommas(item.precio_unitario)}</td>
        <td>{item.quantityToBuy}</td>
        <td>${numberWithCommas(item.total)}</td>
        <td>
          <button className="btn btn-danger" onClick={showModal}>
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};
