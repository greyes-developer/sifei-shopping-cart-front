import React, { useState } from "react";
import { Modal } from "../../../shared/Modal/Modal";

export const AddConfirmationModal = ({
  user_id,
  isModalVisible,
  hideModal,
  addProduct,
  ...props
}) => {
  const [quantityToBuy, setQuantityToBuy] = useState(1);

  const handleQuantityValue = ({ target }) => {
    setQuantityToBuy(target.value);
  };

  const getTotal = () => {
    const quantityParsed = Number(quantityToBuy);

    if (quantityParsed > 0) {
      return quantityParsed * props.precio_unitario;
    } else {
      return 0;
    }
  };

  const addProductToTheShoppingCart = () => {
    const body = {
      ...props,
      quantityToBuy: quantityToBuy >= 0 ? Number(quantityToBuy) : 0,
      total: getTotal(),
    };
    console.log("holaaa")
    addProduct(body);
  };

  return (
    <Modal
      show={isModalVisible}
      handleLeftButton={hideModal}
      handleRightButton={addProductToTheShoppingCart}
      leftButtonText="Cancelar"
      rightButtonText="Agregar al carrito de compra"
    >
      <div className="product-information-container">
        <p>Producto: {props.nombre_producto}</p>
        <p>Clave: {props.id_producto}</p>
        <p>Precio: ${props.precio_unitario}</p>
        <p>Disponible: {props.cantidad_disponible}</p>
        <div className="quantity-container">
          <p className="quantity">Cantidad:</p>
          <input
            id="input-add-to-the-shopping-cart"
            type="text"
            name="quantity"
            placeholder="Cantidad"
            value={quantityToBuy}
            onChange={handleQuantityValue}
          />
        </div>
        <p>Importe: ${getTotal()}</p>
      </div>
    </Modal>
  );
};
