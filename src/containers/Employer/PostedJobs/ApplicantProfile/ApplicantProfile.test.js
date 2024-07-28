import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFreelancer } from "../../../../redux/features/freelancer/freelanceSlice";
import ApplicantProfile from "./ApplicantProfile";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

jest.mock("../../../../redux/features/freelancer/freelanceSlice", () => ({
  getFreelancer: jest.fn(),
}));

describe("ApplicantProfile component", () => {
  const dispatchMock = jest.fn();
  const profile = {
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "1234567890",
    yoe: 5,
    location: "New York",
    skills: ["JavaScript", "React"],
    github: "github.com/johndoe",
  };
  const repos = [
    { id: 1, name: "Repo 1" },
    { id: 2, name: "Repo 2" },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
    useParams.mockReturnValue({ id: "1" });
    useSelector.mockImplementation((selectorFn) =>
      selectorFn({
        freelance: { profile, repos },
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with profile data", () => {
    render(<ApplicantProfile />);

    expect(screen.getByText("Profile of freelancer")).toBeInTheDocument();
    expect(screen.getByText("Name:")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Email:")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("Phone Number:")).toBeInTheDocument();
    expect(screen.getByText("1234567890")).toBeInTheDocument();
    expect(screen.getByText("Year of Experience:")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("Location:")).toBeInTheDocument();
    expect(screen.getByText("New York")).toBeInTheDocument();
    expect(screen.getByText("Skills:")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Github Profile:")).toBeInTheDocument();
    expect(screen.getByText("github.com/johndoe")).toBeInTheDocument();
    expect(screen.getByText("Projects:")).toBeInTheDocument();
    expect(screen.getByText("Repo 1")).toBeInTheDocument();
    expect(screen.getByText("Repo 2")).toBeInTheDocument();
  });

  it("calls dispatch with getFreelancer action on mount", () => {
    render(<ApplicantProfile />);
    expect(dispatchMock).toHaveBeenCalledWith(getFreelancer({ id: "1" }));
  });

  it('displays "No Project listed" when repos are empty', () => {
    useSelector.mockImplementation((selectorFn) =>
      selectorFn({
        freelance: { profile, repos: [] },
      })
    );
    render(<ApplicantProfile />);

    expect(screen.getByText("No Project listed")).toBeInTheDocument();
  });
});
