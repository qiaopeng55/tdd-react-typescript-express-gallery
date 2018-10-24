import { shallow } from "enzyme";
import * as React from "react";
import { HomePage } from "./HomePage";

const product_total = 1000;
const paginateProducts = jest.fn();

const props = {
  classes: { paperRoot: undefined },
  products: [],
  product_total,
  paginateProducts
};
describe("HomePage", () => {
  const wrap = shallow(<HomePage {...props} />);

  it("renders properly", () => {
    expect(wrap).toMatchSnapshot();
  });

  it("renders the title", () => {
    expect(
      wrap
        .find("#title")
        .children()
        .text()
    ).toEqual("All Products");
  });

  it("renders the correct products total", () => {
    expect(
      wrap
        .find("#product_total")
        .children()
        .text()
    ).toEqual(`${product_total} Products`);
  });

  it("calls the paginateProducts callback", () => {
    expect(paginateProducts).toHaveBeenCalled();
  });

  describe("limit selector", () => {
    it("renders 3 options for limit selector", () => {
      expect(wrap.find("WithStyles(Select)").children().length).toEqual(3);
    });

    it("selects 8 as the default limit", () => {
      expect(wrap.find("WithStyles(Select)").props()["value"]).toEqual(8);
    });

    describe("when changes limit value", () => {
      const limit = 16;

      beforeEach(() => {
        wrap
          .find("WithStyles(Select)")
          .simulate("change", { target: { value: limit } });
      });

      it("changes this.state.limit value", () => {
        expect(wrap.state("limit")).toEqual(limit);
      });

      it("calls the paginateProducts callback with expected parameters", () => {
        const expectedParams = { limit, start: 0 };

        expect(paginateProducts).toHaveBeenCalledWith(expectedParams);
      });
    });
  });

  it("renders pagination buttons", () => {
    expect(wrap.find("WithStyles(Pagination)").exists()).toBeTruthy();
  });

  describe("when clicks pagination button", () => {
    beforeEach(() => {
      wrap.find("WithStyles(Pagination)").simulate("click");
    });

    it("calls the paginateProducts callback", () => {
      expect(paginateProducts).toHaveBeenCalledWith({
        limit: 16,
        start: undefined
      });
    });
  });
});
