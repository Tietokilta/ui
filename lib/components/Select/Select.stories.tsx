import { Meta, StoryFn } from "@storybook/react";
import * as Select from "~/components/Select";
import { ChevronDown, ChevronUp } from "~/icons";

/**
 * ```typescript
 * import * as Select from "@tietokilta/ui";
 * ```
 */
export default {
  title: "Select",
  component: Select.Root
} satisfies Meta;

const Template: StoryFn<typeof Select.Root> = (args) => (
  <Select.Root {...args}>
    <Select.Trigger className="inline-flex items-center justify-center gap-1 rounded-lg border-2 border-gray-900 bg-gray-100 px-2 py-1 drop-shadow-[4px_4px_black] hover:bg-gray-300 data-[placeholder]:text-gray-500">
      <Select.Value placeholder="Year" />
      <Select.Icon>
        <ChevronDown />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden rounded-lg border-2 border-gray-900 bg-gray-100 drop-shadow-[4px_4px_black]">
        <Select.ScrollUpButton className="flex h-6 cursor-default items-center justify-center bg-gray-100 text-gray-900">
          <ChevronUp />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-2">
          <Select.Group>
            {Array.from({ length: 37 }).map((_, i) => (
              <Select.Item
                value={(2023 - i).toString()}
                key={i}
                className="flex select-none items-center gap-1  px-2 data-[disabled]:pointer-events-none  data-[highlighted]:data-[state=unchecked]:bg-gray-300 data-[state=checked]:bg-gray-400 data-[disabled]:text-gray-400 data-[highlighted]:outline-none"
              >
                <Select.ItemText>{2023 - i}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="flex h-6 cursor-default items-center justify-center bg-gray-100 text-gray-900">
          <ChevronDown />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export const Primary = Template.bind({});
