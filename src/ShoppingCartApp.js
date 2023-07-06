import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./route/AppRouter";

import { store } from "./store/store";

export const ShoppingCartApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
