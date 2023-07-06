import React, { useState } from "react";
import { products_data } from "../../mock/products";
import { NavBar } from "../navbar/Navbar";
import { ProductCard } from "./components/Product/Card";

import "./products.css";

export const ProductsScreen = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="row row-cols-md-3 g-4">
        {products_data.map((item, i) => {
          return <ProductCard key={`${i}`} {...item} />;
        })}
      </div>
    </div>
  );
};