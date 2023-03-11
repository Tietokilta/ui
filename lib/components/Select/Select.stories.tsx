import type { Meta, StoryFn } from "@storybook/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/Select";

/**
 * ```typescript
 * import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@tietokilta/ui";
 * ```
 */
export default {
  title: "Select",
  component: Select
} satisfies Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => (
  <Select {...args}>
    <SelectTrigger>
      <SelectValue placeholder="Year" />
    </SelectTrigger>
    <SelectContent>
      {Array.from({ length: 37 }).map((_, i) => (
        <SelectItem value={(2023 - i).toString()} key={i} disabled={i > 1 && i < 4}>
          {2023 - i}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export const Primary = Template.bind({});
