import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import * as router from "react-router-dom";
import ErrorPage from "./ErrorPage";

jest.mock("react-router-dom", () => ({
  useRouteError: jest.fn(),
}));

describe("ErrorPage", () => {
  test("Error statusText", () => {
    const error = { statusText: "Not Found" };
    router.useRouteError.mockReturnValue(error);
    render(<ErrorPage />);

    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });

  test("Error message when statusText is not available", () => {
    const error = { message: "Something went wrong" };
    router.useRouteError.mockReturnValue(error);
    render(<ErrorPage />);

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  test("renders the error message with a statusText", () => {
    const error = {
      statusText: "Forbidden",
      message: "You do not have permission to access this page.",
    };
    router.useRouteError.mockReturnValue(error);
    render(<ErrorPage />);

    expect(screen.getByText("Forbidden")).toBeInTheDocument();
  });
});
