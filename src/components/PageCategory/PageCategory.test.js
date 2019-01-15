import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import PageCategory from "./PageCategory";

describe("PageCategory container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<PageCategory />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
