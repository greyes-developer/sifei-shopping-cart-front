import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  addProduct as addProductAction,
} from "../../actions/products";
import { NavBar } from "../navbar/Navbar";
import { ProductCard } from "./components/Product/Card";

import "./products.css";

export const ProductsScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products?.data);
  const userData = useSelector((state) => state.auth?.data);

  console.log(`data: ${JSON.stringify(data, null, 3)}`);

  const addProduct = (item) => {
    const localStorageKey = `${userData?.id_usuario}-${userData?.nombre_usuario}`;
    const getLocalStorageData = localStorage.getItem(localStorageKey);
    const localStorageDataParsed = JSON.parse(getLocalStorageData);
    let localStorageValue;

    if (localStorageDataParsed)
      localStorageValue = JSON.stringify([...localStorageDataParsed, item]);
    else localStorageValue = JSON.stringify([item]);

    localStorage.setItem(localStorageKey, localStorageValue);
    dispatch(addProductAction(item));
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
