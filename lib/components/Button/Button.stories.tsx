import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    action: {
      options: ["primary", "secondary", "tertiary"]
    },
    destructive: {
      control: {
        type: "boolean"
      }
    },
    children: {
      name: "text"
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  action: "primary",
  destructive: false,
  children: "My Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  action: "secondary"
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Primary.args,
  action: "tertiary"
};
