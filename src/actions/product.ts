import axios from "axios";
import * as constants from "./constant";

export const paginateProducts = ({ start, limit }: constants.IPaginate) => {
  return {
    type: constants.PAGINATE_PRODUCTS,
    payload: axios.get(`/api/products?_start=${start}&_limit=${limit}`)
  };
};
