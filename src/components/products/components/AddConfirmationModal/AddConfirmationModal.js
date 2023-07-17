import React, { useState } from "react";
import { numberWithCommas } from "../../../../utils";
import { Modal } from "../../../shared/Modal/Modal";

export const AddConfirmationModal = ({
  user_id,
  isModalVisible,
  hideModal,
  addProduct,
  ...props
}) => {
  const [quantityToBuy, setQuantityToBuy] = useState(1);
  const [infoMessage, setInfoMessage] = useState("");

  const handleQuantityValue = ({ target }) => {
    const value = target.value;

    setQuantityToBuy(value);

    if (value && Number(value) === "NaN") {
      setInfoMessage("El valor debe ser numérico.");
    } else if (value.length === 0 || Number(value) === 0) {
      setInfoMessage("Debes agregar al menos 1 unidad.");
    } else if (
      value.length > 0 &&
      Number(value) > 0 &&
      Number(value) <= props.cantidad_disponible
    ) {
      setInfoMessage("");
    } else {
      setInfoMessage("El valor debe ser menor a la cantidad disponible.");
    }
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

    addProduct(body);
  };

  return (
    <Modal
      show={isModalVisible}
      handleLeftButton={hideModal}
      handleRightButton={addProductToTheShoppingCart}
      leftButtonText="Cancelar"
      rightButtonText="Agregar al carrito de compra"
      isRightButtonEnabled={!(infoMessage && infoMessage !== "")}
    >
      <div className="product-information-container">
        <p>Producto: {props.nombre_producto}</p>
        <p>Clave: {props.id_producto}</p>
        <p>Precio: ${numberWithCommas(props.precio_unitario, 2)}</p>
        <p>Disponible: {props.cantidad_disponible}</p>
        <div className="quantity-container">
          <p className="quantity">Cantidad:</p>
          <div className="input-and-info-label-container">
            <input
              id="input-add-to-the-shopping-cart"
              type="text"
              name="quantity"
              placeholder="Cantidad"
              value={quantityToBuy}
              onChange={handleQuantityValue}
            />
            {infoMessage && infoMessage !== "" && (
              <p className="info-label">{infoMessage}</p>
            )}
          </div>
        </div>
        <p>Importe: ${numberWithCommas(getTotal())}</p>
      </div>
    </Modal>
  );
};
