import type { Meta, StoryFn } from "@storybook/react";
import * as React from "react";

import { ScrollArea } from "~/components/ScrollArea";
import { Separator } from "~/components/Separator";

/**
 * ```typescript
 * import { ScrollArea } from "~/components/ScrollArea";
 * ```
 */
export default {
  title: "ScrollArea",
  component: ScrollArea
} satisfies Meta<typeof ScrollArea>;

const tags = Array.from({ length: 50 }).map((_, i, a) => `v0.0.0-dev.${a.length - i}`);

const Template: StoryFn<typeof ScrollArea> = (args) => (
  <ScrollArea {...args} className="h-72 w-48 rounded-md border-2 border-gray-900 bg-gray-100">
    <div className="p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
      {tags.map((tag) => (
        <React.Fragment>
          <div className="font-mono text-sm" key={tag}>
            {tag}
          </div>
          <Separator className="my-2" />
        </React.Fragment>
      ))}
    </div>
  </ScrollArea>
);
export const Primary = Template.bind({});
