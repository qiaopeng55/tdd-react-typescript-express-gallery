import { shallow } from "enzyme";
import * as React from "react";
import { Divider, WhiteSpace } from "./StyledComponents";

describe("WhiteSpace", () => {
  const wrapper = shallow(<WhiteSpace />);

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Divider", () => {
  const wrapper = shallow(<Divider />);

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
