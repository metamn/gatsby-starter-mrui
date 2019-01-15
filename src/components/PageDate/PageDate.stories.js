import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import PageDate from "./PageDate";
import description from "./PageDate.md";

storiesOf("Components/PageDate", module).add("Overview", () => <PageDate />, {
  info: {
    inline: true,
    text: description
  }
});
