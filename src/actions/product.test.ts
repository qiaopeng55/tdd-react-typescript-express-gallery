import axios from "axios";
import * as constants from "./constant";
import * as actions from "./product";

import { ProductAction } from "../model/model";

let expectedAction: ProductAction<any>;

describe("invoke paginateProducts action", () => {
  beforeAll(() => {
    // set up mock for axios.get
    const mock = jest.spyOn(axios, "get");
    const mockResponse = Promise.resolve({ products: [1, 2, 3] });
    mock.mockReturnValueOnce(mockResponse);

    expectedAction = {
      type: constants.PAGINATE_PRODUCTS,
      payload: mockResponse
    };
  });

  it("creates an action to paginateProducts", () => {
    expect(actions.paginateProducts({ start: 20, limit: 20 })).toEqual(
      expectedAction
    );
  });

  it("call /api/products with correct start , limit parameters", () => {
    expect(axios.get).toHaveBeenCalledWith("/api/products?_start=20&_limit=20");
  });
});
