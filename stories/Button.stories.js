import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  args: {
    label: "Button",
    primary: false,
    variant: "pulsing",
  },
};

const createTemplate = (defaults) =>
  Object.assign((props) => <Button {...props} />, defaults);

const Template = (args) => <Button {...args} />;

export const Primary = createTemplate({
  args: {
    primary: true,
  },
});

export const PrimaryLightMode = createTemplate({
  args: {
    primary: true,
  },
  parameters: {
    cssUserPrefs: {
      "prefers-color-scheme": "light",
    },
  },
});

export const PrimaryDarkMode = createTemplate({
  args: {
    primary: true,
  },
  parameters: {
    cssUserPrefs: {
      "prefers-color-scheme": "dark",
    },
  },
});

export const PrimaryReducedMotion = createTemplate({
  args: {
    primary: true,
  },
  parameters: {
    cssUserPrefs: {
      "prefers-reduced-motion": "reduce",
    },
  },
});

export const Large = createTemplate({
  args: {
    size: "large",
  },
});

export const Secondary = createTemplate({});

export const Small = createTemplate({
  args: {
    size: "small",
  },
});
