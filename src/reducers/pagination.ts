import * as constant from "../actions/constant";

const reducer = (state = { product_total: 0 }, action: any) => {
  switch (action.type) {
    case constant.PAGINATE_PRODUCTS:
      return { product_total: 0 };
    case constant.PAGINATE_PRODUCTS_FULFILLED:
      return { product_total: action.payload.headers["x-total-count"] };
    default:
      return state;
  }
};

export default reducer;
