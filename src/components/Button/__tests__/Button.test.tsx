import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../Button";
import { ButtonProps } from "../Button.types";

const mockProps: ButtonProps = {
  text: "Example",
  disabled: false,
  priority: "primary",
  onClick: () => null,
};

describe("App", function () {
  it("should display pass in number", function () {
    render(<Button {...mockProps} />);

    expect(screen.getByRole("button")).toMatchSnapshot();
  });
});
