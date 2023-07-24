import type { Meta, StoryFn } from "@storybook/react";

import { Separator } from "~/components/Separator";

/**
 * ```typescript
 * import { Separator } from "~/components/Separator";
 * ```
 */
export default {
  title: "Separator",
  component: Separator
} satisfies Meta<typeof Separator>;

const Template: StoryFn<typeof Separator> = () => (
  <div>
    <div className="space-y-1">
      <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
      <p className="text-muted-foreground text-sm">An open-source UI component library.</p>
    </div>
    <Separator className="my-4" />
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </div>
);
export const Primary = Template.bind({});
