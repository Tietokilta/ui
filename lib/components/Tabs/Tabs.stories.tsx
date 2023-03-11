import { Meta, StoryFn } from "@storybook/react";
import Tabs from ".";

export default {
  title: "Tabs",
  component: Tabs
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
