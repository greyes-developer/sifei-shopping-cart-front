import React from "react";
import { Row } from "./Row";

export const ProductsTable = ({ data = [], handleDelete }) => {
  const deleteProductFromTable = (item) => {
    handleDelete(item);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Clave</th>
          <th scope="col">Descripción</th>
          <th scope="col">Precio unitario</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Importe</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0
          ? data.map((item, i) => {
              return (
                <Row
                  key={`${i}`}
                  item={item}
                  deleteProductFromTable={deleteProductFromTable}
                />
              );
            })
          : null}
      </tbody>
    </table>
  );
};
