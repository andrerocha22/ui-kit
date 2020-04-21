import { withInfo } from "@storybook/addon-info";
import { configure, addParameters, addDecorator } from "@storybook/react";
import centered from "@storybook/addon-centered/react";

import theme from "./theme";

import "./reset.css";

addParameters({
  options: {
    theme,
  },
});

addDecorator(withInfo);
addDecorator(centered);

configure(require.context("../stories", true, /\.stories\.tsx$/), module);
