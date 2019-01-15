import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import PageTags from "./PageTags";
import description from "./PageTags.md";

storiesOf("Components/PageTags", module).add("Overview", () => <PageTags />, {
  info: {
    inline: true,
    text: description
  }
});
