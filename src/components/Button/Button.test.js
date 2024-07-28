import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Button from "./Button";
import styles from "./Button.module.css";

describe("Button", () => {
  it("Button default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass(styles.primary);
    expect(button).not.toBeDisabled();
  });

  it("Variant prop", () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(styles.secondary);
  });

  it("Disabled prop", () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass(styles.disabled);
  });

  it("OnClick Handler", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Button Disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
