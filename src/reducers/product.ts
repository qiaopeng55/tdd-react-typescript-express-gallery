import * as constant from "../actions/constant";

const reducer = (state = [], action: any) => {
  switch (action.type) {
    case constant.PAGINATE_PRODUCTS:
      return [];
    case constant.PAGINATE_PRODUCTS_FULFILLED:
      return [...action.payload.data];
    default:
      return state;
  }
};

export default reducer;
