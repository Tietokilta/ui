import type { Meta, StoryFn } from "@storybook/react";

import { ChevronsUpDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/components/Collapsible";
import { Button } from "../Button";

/**
 * ```typescript
 * import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "~/components/Collapsible";
 * ```
 */
export default {
  title: "Collapsible",
  component: Collapsible
} satisfies Meta<typeof Collapsible>;

const Template: StoryFn<typeof Collapsible> = (args) => (
  <Collapsible
    {...args}
    className="w-[350px] space-y-2 rounded-md border border-gray-900 bg-gray-100 p-1"
  >
    <CollapsibleTrigger asChild>
      <Button variant="ghost" className="flex w-full items-center justify-between">
        <span>Can I use this in my project?</span>
        <ChevronsUpDown className="h-4 w-4" />
        <span className="sr-only">Toggle</span>
      </Button>
    </CollapsibleTrigger>
    <CollapsibleContent className="px-2">
      Yes. Free to use for personal and commercial projects. No attribution required.
    </CollapsibleContent>
  </Collapsible>
);
export const Primary = Template.bind({});
