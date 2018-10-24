import rootReducer from "./index";
import { applyMiddleware, createStore, Store } from "redux";

describe("rootReducer", () => {
  it("initializes the default state", () => {
    const expectedState = {
      pagination: {
        product_total: 0
      },
      products: []
    };

    expect(rootReducer(undefined, { type: "" })).toEqual(expectedState);
  });
});
