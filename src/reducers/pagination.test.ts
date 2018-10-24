import * as constant from "../actions/constant";
import paginationReducer from "./pagination";

describe("cardsReducer", () => {
  it("should return the initial state", () => {
    expect(paginationReducer(undefined, {})).toEqual({ product_total: 0 });
  });

  it("should handle PAGINATE_PRODUCTS by reset product_total to 0", () => {
    const expectedState = { product_total: 0 };

    expect(
      paginationReducer(
        { product_total: 1000 },
        {
          type: constant.PAGINATE_PRODUCTS
        }
      )
    ).toEqual(expectedState);
  });

  it("should handle PAGINATE_PRODUCTS_FULFILLED", () => {
    const mockTotal = 500;
    const expectedState = { product_total: mockTotal };
    expect(
      paginationReducer(
        { product_total: 1000 },
        {
          type: constant.PAGINATE_PRODUCTS_FULFILLED,
          payload: { headers: { ["x-total-count"]: mockTotal } }
        }
      )
    ).toEqual(expectedState);
  });
});
