import React from "react";

export const ProductsTable = ({ data = [], handleDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Clave</th>
          <th scope="col">Descripcion</th>
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
                <tr key={`${i}`}>
                  <th scope="row">{item.id_producto}</th>
                  <td>{item.nombre_producto}</td>
                  <td>${item.precio_unitario}</td>
                  <td>{item.cantidad_disponible}</td>
                  <td>${item.precio_unitario}</td>
                  <td>
                    <button className="btn btn-danger" onClick={handleDelete}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};
