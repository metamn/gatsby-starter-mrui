import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import PageCategory from "./PageCategory";
import description from "./PageCategory.md";

storiesOf("Components/PageCategory", module).add(
  "Overview",
  () => <PageCategory />,
  {
    info: {
      inline: true,
      text: description
    }
  }
);
