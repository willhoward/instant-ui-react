import React from "react";
import { render } from "@testing-library/react";
import { Card } from "../Card";
import { ThemeProvider } from "../../Theme/Theme";

describe("Card", () => {
  it("Should render child content correctly", () => {
    const { container } = render(
      <ThemeProvider>
        <Card>Example</Card>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
