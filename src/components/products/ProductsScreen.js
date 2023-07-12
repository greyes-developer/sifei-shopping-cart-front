import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/products";
import { NavBar } from "../navbar/Navbar";
import { ProductCard } from "./components/Product/Card";

import "./products.css";

export const ProductsScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products?.data);
  const userData = useSelector((state) => state.auth?.data);

  const addProduct = (item) => {
    const localStorageKey = `${userData?.id_usuario}-${userData?.nombre_usuario}`;
    const getLocalStorageData = localStorage.getItem(localStorageKey);
    const localStorageDataParsed = JSON.parse(getLocalStorageData);
    let localStorageValue;

    if (localStorageDataParsed)
      localStorageValue = JSON.stringify([...localStorageDataParsed, item]);
    else localStorageValue = JSON.stringify([item]);

    localStorage.setItem(localStorageKey, localStorageValue);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="container">
      <NavBar />
      <div className="row row-cols-2 row-cols-md-3 g-4">
        {data &&
          data.length > 0 &&
          data.map((item, i) => {
            return (
              <ProductCard key={`${i}`} addProduct={addProduct} {...item} />
            );
          })}
      </div>
    </div>
  );
};
