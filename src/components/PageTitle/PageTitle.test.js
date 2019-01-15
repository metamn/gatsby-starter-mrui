import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import PageTitle from "./PageTitle";

describe("PageTitle container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<PageTitle />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
