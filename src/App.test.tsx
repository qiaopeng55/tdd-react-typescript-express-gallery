import { shallow } from "enzyme";
import * as React from "react";
// import { MemoryRouter } from "react-router-dom";
import { App } from "./App";

const props = {
  products: [],
  getPaginationInfo: () => {},
  paginateProducts: ({ start, limit }: any) => {}
};
describe("App", () => {
  const app = shallow(<App {...props} />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });
});
