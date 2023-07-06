import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { ProductsTable } from "./components/table/Table";
import { products_data } from "../../mock/products";

import "./shoppingCart.css";

export const ShoppingCartScreen = () => {
  const todayDate = new Date().toLocaleDateString();
  const referenceNumber = "123";

  const deleteProductFromShoppingCart = () => {
    console.log("delete product");
  };

  return (
    <div className="container">
      <Navbar />

      <div className="date-and-reference-container">
        <p>Fecha: {todayDate}</p>
        <p className="reference-number">
          Número de referencia: {referenceNumber}
        </p>
      </div>

      <ProductsTable
        data={products_data}
        handleDelete={deleteProductFromShoppingCart}
      />

      <div className="total-and-buy-container">
        <p className="total-label">Total: $1000,000.00</p>
        <button className="btn btn-primary">Comprar</button>
      </div>
    </div>
  );
};
