import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Page from "./Page";

describe("Page container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Page />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});