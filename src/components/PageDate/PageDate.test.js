import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import PageDate from "./PageDate";

describe("PageDate container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<PageDate />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
