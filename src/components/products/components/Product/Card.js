import React from "react";

import "./card.css";

export const ProductCard = (props) => {
  return (
    <div class="card">
      <img
        src={props.imagen}
        class="card-img-top"
        alt={props.nombre_producto}
      />
      <div class="card-body">
        <h5 class="card-title">Producto: {props.nombre_producto}</h5>
        <div className="price-add-container">
          <p class="card-text price">Precio: ${props.precio_unitario}</p>
          <button type="button" className="btn btn-primary">
            + Agregar
          </button>
        </div>
        <p class="card-text">Disponible: {props.cantidad_disponible}</p>
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
