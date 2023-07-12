import React, { useEffect, useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { ProductsTable } from "./components/table/Table";

import "./shoppingCart.css";
import { useSelector } from "react-redux";

export const ShoppingCartScreen = () => {
  const todayDate = new Date().toLocaleDateString();
  const user = useSelector((state) => state.auth?.data);
  const referenceNumber = "123";

  const localStorageKey = `${user?.id_usuario}-${user?.nombre_usuario}`;
  const resultLocalStorage = localStorage.getItem(localStorageKey);
  const resultLocalStorageParsed = JSON.parse(resultLocalStorage);
  const [products, setProducts] = useState(resultLocalStorageParsed);

  const [deleteProductCounter, setDeleteProductCounter] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const res = localStorage.getItem(localStorageKey);
    const resParsed = JSON.parse(res);
    setProducts(resParsed);

    let totalResult = 0;
    resParsed.forEach((element) => {
      totalResult += element?.total;
    });
    setTotal(totalResult);
  }, [deleteProductCounter, user]);

  const deleteProductFromShoppingCart = (item) => {
    const result = products?.filter((element) => {
      return element.id_producto !== item.id_producto;
    });

    const localStorageValue = JSON.stringify(result);
    localStorage.setItem(localStorageKey, localStorageValue);
    setDeleteProductCounter((value) => value + 1);
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
        data={products}
        handleDelete={deleteProductFromShoppingCart}
      />

      <div className="total-and-buy-container">
        <p className="total-label">Total: ${total}</p>
        <button className="btn btn-primary">Comprar</button>
      </div>
    </div>
  );
};
