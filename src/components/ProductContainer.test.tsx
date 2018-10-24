import { shallow } from "enzyme";
import * as React from "react";
// import { MemoryRouter } from "react-router-dom";
import ProductContainer from "./ProductContainer";

const product = {
  id: 5,
  price: "$30.22",
  product_name: "Cyclobenzaprine Hydrochloride",
  description: "reinvent back-end deliverables",
  product_image: "http://dummyimage.com/324x341.bmp/dddddd/000000"
};

describe("ProductContainer", () => {
  const wrapper = shallow(<ProductContainer product={product} />);

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
