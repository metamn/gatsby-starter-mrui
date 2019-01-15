import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import PageExcerpt from "./PageExcerpt";
import description from "./PageExcerpt.md";

storiesOf("Components/PageExcerpt", module).add(
  "Overview",
  () => <PageExcerpt />,
  {
    info: {
      inline: true,
      text: description
    }
  }
);
