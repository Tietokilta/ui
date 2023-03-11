import { Meta, StoryFn } from "@storybook/react";
import * as Tabs from "~/components/Tabs";

/**
 * ```typescript
 * import * as Tabs from "@tietokilta/ui";
 * ```
 */
export default {
  title: "Tabs",
  component: Tabs.Root
} satisfies Meta<typeof Tabs.Root>;

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan nisi a arcu auctor, et placerat massa congue. Sed finibus interdum lectus a semper. Nulla erat leo, fermentum sit amet dolor at, euismod vehicula ex. Duis arcu elit, gravida eu sapien nec, pellentesque commodo massa. Aliquam commodo at elit elementum feugiat. Morbi egestas est id augue ornare, eu auctor tortor ornare. Donec in ipsum augue. Nunc scelerisque erat erat, ut tempor neque luctus quis. Mauris vel ex quis elit mattis mollis porttitor et ligula. Vivamus accumsan nibh tempor tortor tempus luctus. Donec finibus tincidunt sapien, eget hendrerit tellus tincidunt vel. Vivamus vulputate enim vel lorem sagittis mattis. Sed tristique fermentum tortor vitae malesuada.";

const Template: StoryFn<typeof Tabs.Root> = (args) => (
  <Tabs.Root {...args} defaultValue="1">
    <Tabs.List className="m-2 w-fit">
      <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>
      <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>
      <Tabs.Trigger value="3">Tab 3</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="1">
      <h2 className="text-xl">Content 1</h2>
      <p>{lorem}</p>
    </Tabs.Content>
    <Tabs.Content value="2">
      <h2 className="text-xl">Content 2</h2>
      <p>{lorem}</p>
    </Tabs.Content>
    <Tabs.Content value="3">
      <h2 className="text-xl">Content 3</h2>
      <p>{lorem}</p>
    </Tabs.Content>
  </Tabs.Root>
);

export const Primary = Template.bind({});
