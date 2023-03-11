import * as Tabs from "@radix-ui/react-tabs";

export type TabsProps = Tabs.TabsProps;
export type TabsListProps = Tabs.TabsListProps;
export type TabsTriggerProps = Tabs.TabsTriggerProps;
export type TabsContentProps = Tabs.TabsContentProps;

export const Root = Tabs.Root;
export const List = Tabs.List;
export const Content = Tabs.Content;

export const Trigger = ({ children, className, ...props }: Tabs.TabsTriggerProps) => (
  <Tabs.Trigger
    {...props}
    className={`border-2 border-gray-900 bg-gray-100 px-4 py-1 font-mono font-bold outline-none drop-shadow-[4px_4px_black] first:rounded-l-lg last:rounded-r-lg data-[state=active]:translate-x-1 data-[state=active]:translate-y-1 data-[state=active]:border-l-0 data-[state=active]:border-r-0 data-[state=active]:bg-gray-400 data-[state=active]:drop-shadow-none data-[state=active]:first:border-l-2 data-[state=active]:last:border-r-2 ${className}`}
  >
    {children}
  </Tabs.Trigger>
);
