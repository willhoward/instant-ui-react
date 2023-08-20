import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../Button";
import { ButtonProps } from "../Button.types";
import { ThemeProvider } from "../../Theme/Theme";

const mockProps: ButtonProps = {
  type: "button",
  text: "Example",
  disabled: false,
  primary: true,
  onClick: () => null,
  fullWidth: false,
};

describe("App", () => {
  it("Should render button text correctly", function () {
    const { container } = render(
      <ThemeProvider>
        <Button {...mockProps} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
