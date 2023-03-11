import { render, screen } from "@testing-library/react";
import { Select, SelectTrigger, SelectValue } from "~/components/Select";

describe("Select", () => {
  it("should display placeholder text", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Placeholder" />
        </SelectTrigger>
      </Select>
    );
    expect(screen.getByRole("combobox")).toHaveTextContent("Placeholder");
  });
});
