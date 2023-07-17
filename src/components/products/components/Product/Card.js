import React, { useState } from "react";
import { AddConfirmationModal } from "../AddConfirmationModal/AddConfirmationModal";
import Swal from "sweetalert2";

import "./card.css";
import { numberWithCommas } from "../../../../utils";

export const ProductCard = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const addProductAndCloseModal = (item) => {
    props.addProduct(item);
    Swal.fire("Operación exitosa", "Producto guardado", "success");
    hideModal();
  };

  return (
    <div className="col">
      <div className="card product-card">
        <img
          src={props.img_url}
          className="card-img-top-product"
          alt={props.nombre_producto}
        />
        <div className="card-body">
          <h5 className="card-title">Producto: {props.nombre_producto}</h5>
          <div className="price-add-container">
            <p className="card-text price">
              Precio: ${numberWithCommas(props.precio_unitario, 2)}
            </p>
            <AddConfirmationModal
              {...props}
              isModalVisible={isModalVisible}
              hideModal={hideModal}
              addProduct={addProductAndCloseModal}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setIsModalVisible(true)}
            >
              + Agregar
            </button>
          </div>
          <p className="card-text">Disponible: {props.cantidad_disponible}</p>
        </div>
      </div>
    </div>
  );
};
