import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyProducts } from "../../actions/products";
import { PurchaseConfirmationModal } from "./components/modal/PurchaseConfirmationModal";

import { Navbar } from "./components/navbar/Navbar";
import { ProductsTable } from "./components/table/Table";

import "./shoppingCart.css";

export const ShoppingCartScreen = () => {
  const todayDate = new Date().toLocaleDateString();
  const user = useSelector((state) => state.auth?.data);
  const dispatch = useDispatch();
  const referenceNumber = "123";
  const [isPurchaseModalVisible, setIsPurchaseModalVisible] = useState(false);

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
    resParsed?.forEach((element) => {
      totalResult += element?.total;
    });
    setTotal(totalResult);
  }, [deleteProductCounter, user, localStorageKey]);

  const deleteProductFromTable = (item) => {
    const result = products?.filter((element) => {
      return element.id_producto !== item.id_producto;
    });

    const localStorageValue = JSON.stringify(result);
    localStorage.setItem(localStorageKey, localStorageValue);
    setDeleteProductCounter((value) => value + 1);
  };

  const hidePurchaseModal = () => {
    setIsPurchaseModalVisible(false);
  };

  const handleBuyProducts = () => {
    const currentDate = new Date();
    const payload = {
      total,
      fecha_compra: currentDate.toISOString().slice(0, 19).replace("T", " "),
      nombre_usuario: user?.nombre_usuario,
      id_usuario: user?.id_usuario,
      compra_ref: referenceNumber,
      productos: getProductCollectionFormmated(),
    };

    hidePurchaseModal();
    dispatch(buyProducts(payload));
  };

  const getProductCollectionFormmated = () => {
    return products?.map((item) => {
      const {
        id_producto,
        cantidad_disponible,
        quantityToBuy: cantidad_a_comprar,
      } = item;
      return {
        id_producto,
        cantidad_disponible,
        cantidad_a_comprar,
      };
    });
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

      <PurchaseConfirmationModal
        isModalVisible={isPurchaseModalVisible}
        hideModal={hidePurchaseModal}
        handleBuyProducts={handleBuyProducts}
        total={total}
      />

      <ProductsTable data={products} handleDelete={deleteProductFromTable} />
      {((products && products?.length < 1) || !products) && (
        <h3 className="there-are-no-products">No hay productos agregados</h3>
      )}
      <div className="total-and-buy-container">
        <p className="total-label">Total: ${total}</p>
        <button
          className={`btn ${
            products && products.length > 0 ? "btn-primary" : "btn-secondary"
          }`}
          onClick={
            products && products.length > 0
              ? () => setIsPurchaseModalVisible(true)
              : null
          }
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
