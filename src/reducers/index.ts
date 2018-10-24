import { combineReducers } from "redux";

import paginationReducer from "./pagination";
import productsReducer from "./product";

import { Product, ProductAction } from "../model/model";

interface IPagination {
  product_total: number;
}

export interface IRootState {
  readonly products: Product[];
  readonly pagination: IPagination;
}

export default combineReducers<IRootState, ProductAction<any>>({
  products: productsReducer,
  pagination: paginationReducer
});
