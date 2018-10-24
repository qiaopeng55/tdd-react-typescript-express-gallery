import { shallow } from "enzyme";
import * as React from "react";
import ReduxRoot from "./ReduxRoot";

describe("ReduxRoot", () => {
  const Wrapper = shallow(<ReduxRoot />);

  it("renders properly", () => {
    expect(Wrapper).toMatchSnapshot();
  });
});
