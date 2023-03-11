import { Tab, type TabGroupProps } from "@headlessui/react";
import { Fragment } from "react";

const tabs = [
  { name: "Tab 1", content: "Tab 1 content" },
  { name: "Tab 2", content: "Tab 2 content" },
  { name: "Tab 3", content: "Tab 3 content" },
  { name: "Tab 4", content: "Tab 4 content" },
  { name: "Tab 5", content: "Tab 5 content" }
];

const Tabs = ({ ...props }: TabGroupProps<"div">) => (
  <Tab.Group {...props}>
    <Tab.List className="m-2 w-fit">
      {tabs.map((tab) => (
        <Tab key={tab.name} as={Fragment}>
          <button
            className={
              "border-2 border-gray-900 px-4 py-1 font-mono font-bold outline-none first:rounded-l-lg last:rounded-r-lg ui-selected:translate-x-1 ui-selected:translate-y-1 ui-selected:border-l-0 ui-selected:border-r-0 ui-selected:bg-gray-400 ui-selected:first:border-l-2 ui-selected:last:border-r-2 ui-not-selected:bg-gray-100 ui-not-selected:drop-shadow-[4px_4px_black]"
            }
          >
            {tab.name}
          </button>
        </Tab>
      ))}
    </Tab.List>
    <Tab.Panels>
      {tabs.map((tab) => (
        <Tab.Panel key={tab.name}>
          <p>{tab.content}</p>
        </Tab.Panel>
      ))}
    </Tab.Panels>
  </Tab.Group>
);

export default Tabs;
