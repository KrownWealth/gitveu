import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import UserDetail from "@/components/UserDetail";

// Mock axios
jest.mock("@/app/axios", () => ({
  get: jest.fn().mockResolvedValue({ data: {} }),
}));

describe("UserDetail Component", () => {
  it("renders user detail correctly", async () => {
    // Define sample login data
    const login = "testuser";

    // Render the UserDetail component with sample login
    render(<UserDetail login={login} />);

    // Wait for the component to fetch and render user info and user repos
    await waitFor(() => {
      expect(screen.getByText("User Profile")).toBeInTheDocument();
      expect(screen.getByText("Go Back")).toBeInTheDocument();
      // You can add more assertions for other elements as needed
    });
  });

  it("renders loading state if login is null", async () => {
    // Render the UserDetail component with null login
    render(<UserDetail login={null} />);

    // Wait for the component to render the loading state
    await waitFor(() => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });
});
