import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "../../Theme/Theme";
import { Form } from "../Form";

const mockProps = {
  onSubmit: () => null,
};

describe("Form", () => {
  it("Should render correctly", () => {
    const { container } = render(
      <ThemeProvider>
        <Form {...mockProps}>Example</Form>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
