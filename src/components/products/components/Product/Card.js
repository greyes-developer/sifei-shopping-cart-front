import React, { useState } from "react";
import { Modal } from "../Modal/Modal";

import "./card.css";

export const ProductCard = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [quantityToBuy, setQuantityToBuy] = useState(0);

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleQuantityValue = ({ target }) => {
    setQuantityToBuy(target.value);
  };

  const addProductToTheShoppingCart = (e) => {
    console.log(props);
  };

  const getTotal = () => {
    const quantityParsed = Number(quantityToBuy);

    if (quantityParsed > 0) {
      return quantityParsed * props.precio_unitario;
    } else {
      return 0;
    }
  };

  return (
    <div className="card">
      <img
        src={props.imagen}
        className="card-img-top"
        alt={props.nombre_producto}
      />
      <div className="card-body">
        <h5 className="card-title">Producto: {props.nombre_producto}</h5>
        <div className="price-add-container">
          <p className="card-text price">Precio: ${props.precio_unitario}</p>
          <Modal
            show={isModalVisible}
            handleLeftButton={hideModal}
            handleRightButton={addProductToTheShoppingCart}
            leftButtonText="Cancelar"
            rightButtonText="Agregar al carrito de compra"
          >
            <div className="product-information-container">
              <p>Producto: ${props.nombre_producto}</p>
              <p>Clave: ${props.id_producto}</p>
              <p>Precio: ${props.precio_unitario}</p>
              <p>Disponible: ${props.cantidad_disponible}</p>
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
  );
};
// export const ProductCard = () => {
//   return (
//     <div>
//       <p>Producto: XXXXX</p>
//       <div>
//         <p>Precio: $10,000</p>
//         <div>+</div>
//       </div>
//       <p>Disponibilidad: 200</p>
//     </div>
//   );
// };

// onClick={() => {
//   Swal.fire({
//     title: `Producto: ${props.nombre_producto}`,
//     html: `<div class="product-information-container">
//        <p>Clave: ${props.id_producto}</p>
//        <p>Precio: $${props.precio_unitario}<p/>
//        <p>Disponible: ${props.cantidad_disponible}</p>
//        <div class="quantity-container">
//         <p class="quantity">Cantidad:</p>
//         <input
//           id="input-add-to-the-shopping-cart"
//           type="text"
//           name="quantity"
//           placeholder="Cantidad"
//           value=${quantityToBuy}
//           />
//        </div>
//        <p>Importe: $${props.precio_unitario}</p>
//     </div>`,
//     showCancelButton: true,
//     confirmButtonText: "Agregar a carrito de compra",
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       console.log("Product saved");
//     }
//   });
//   props.addProduct();
// }}
