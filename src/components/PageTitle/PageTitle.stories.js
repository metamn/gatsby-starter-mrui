import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import PageTitle from "./PageTitle";
import description from "./PageTitle.md";

storiesOf("Components/PageTitle", module).add("Overview", () => <PageTitle />, {
  info: {
    inline: true,
    text: description
  }
});
