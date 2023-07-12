import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { productsReducer } from "./productsReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});
