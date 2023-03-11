import { render, screen } from "@testing-library/react";
import * as Tabs from "~/components/Tabs";

describe("Tabs", () => {
  it("renders have defaultTab initially selected", () => {
    render(
      <Tabs.Root defaultValue="1">
        <Tabs.List>
          <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">Tab 1 Content</Tabs.Content>
        <Tabs.Content value="2">Tab 2 Content</Tabs.Content>
      </Tabs.Root>
    );
    expect(screen.getByRole("tablist")).toHaveTextContent("Tab 1");
    expect(screen.getByRole("tablist")).toHaveTextContent("Tab 2");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Tab 1 Content");
    expect(screen.getByRole("tabpanel")).not.toHaveTextContent("Tab 2 Content");
    expect(screen.getByRole("tab", { name: "Tab 1" })).toHaveAttribute("aria-selected", "true");
  });
});
