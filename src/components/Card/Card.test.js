import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import Card from "./Card";
import styles from "./Card.module.css";

describe("Card", () => {
  test("applies styles correctly and render children", () => {
    render(<Card>Hi</Card>);
    const cardElement = screen.getByText("Hi");
    expect(cardElement).toHaveClass(styles.card);
    expect(screen.getByText("Hi")).toBeInTheDocument();
  });

  test("custom class", () => {
    const customClass = "customClass";
    render(<Card className={customClass}>Hi</Card>);
    const cardElement = screen.getByText("Hi");
    expect(cardElement).toHaveClass(customClass);
  });

  test("fullWidth prop", () => {
    render(<Card fullWidth>Hi</Card>);
    const cardElement = screen.getByText("Hi");
    expect(cardElement).toHaveClass(styles.fullWidth);
  });
});
