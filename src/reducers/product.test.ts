import * as constant from "../actions/constant";
import productReducer from "./product";

describe("cardsReducer", () => {
  it("should return the initial state", () => {
    expect(productReducer(undefined, {})).toEqual([]);
  });

  it("should handle PAGINATE_PRODUCTS", () => {
    const expectedState: any[] = [];

    expect(
      productReducer(undefined, {
        type: constant.PAGINATE_PRODUCTS
      })
    ).toEqual(expectedState);
  });

  it("should handle PAGINATE_PRODUCTS_FULFILLED", () => {
    const expectedState = [1, 2, 3];
    expect(
      productReducer(undefined, {
        type: constant.PAGINATE_PRODUCTS_FULFILLED,
        payload: { data: [1, 2, 3] }
      })
    ).toEqual(expectedState);
  });
});
