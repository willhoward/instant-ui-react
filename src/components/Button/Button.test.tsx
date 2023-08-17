import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";
import { ButtonProps } from "./Button.types";
import { ThemeProvider } from "../Theme/Theme";

const mockProps: ButtonProps = {
  text: "Example",
  disabled: false,
  primary: true,
  onClick: () => null,
};

describe("App", function () {
  it("should display pass in number", function () {
    render(
      <ThemeProvider>
        <Button {...mockProps} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("button")).toHaveTextContent("Example");
  });
});
