import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import PageExcerpt from "./PageExcerpt";

describe("PageExcerpt container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<PageExcerpt />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
