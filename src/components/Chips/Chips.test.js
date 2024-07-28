import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Chips from "./Chips";
import style from "./Chips.module.css";

describe("Chips", () => {
  test("skillChip style & no delete button", () => {
    render(<Chips skill="HTML" />);
    const chipElement = screen.getByText("HTML");
    expect(chipElement).toHaveClass(style.skillChip);

    const deleteButton = screen.queryByRole("button");
    expect(deleteButton).not.toBeInTheDocument();
  });

  test("Delete button", () => {
    const handleDelete = jest.fn();
    render(<Chips skill="HTML" onDelete={handleDelete} />);
    const deleteButton = screen.getByRole("button");
    expect(deleteButton).toBeInTheDocument();
  });

  test("calls onDelete function", () => {
    const handleDelete = jest.fn();
    render(<Chips skill="HTML" onDelete={handleDelete} />);
    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledWith("HTML");
  });
});
