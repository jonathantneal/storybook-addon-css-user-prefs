import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  args: {
    label: "Button",
    primary: false,
    variant: "none",
  },
  parameters: {
    myAddonParameter: `
<MyComponent boolProp scalarProp={1} complexProp={{ foo: 1, bar: '2' }}>
  <SomeOtherComponent funcProp={(a) => a.id} />
</MyComponent>
`,
  },
};

const Template = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
