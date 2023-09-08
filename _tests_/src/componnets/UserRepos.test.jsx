import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserRepos from "@/components/UserRepos";

describe("UserRepos Component", () => {
  it("renders user repositories", () => {
    // Define sample user repos data
    const userRepos = [
      {
        id: 1,
        name: "Repo 1",
        description: "Description 1",
        language: "JavaScript",
        html_url: "https://github.com/user/repo1",
      },
    ];

    // Render the UserRepos component with sample userRepos
    render(<UserRepos userRepos={userRepos} />);

    // Check if the repositories are rendered
    expect(screen.getByText("Repo 1")).toBeInTheDocument();
    // You can add more assertions for other
  });

  // it("should have load more button", async () => {
  //   // Render the UserRepos component with an empty array for userRepos
  //   render(<UserRepos userRepos={[]} />);
    
  //   // Use waitFor to wait for the button to appear
  //   await waitFor(() => {
  //     screen.getByRole("button", { name: "Load More" });
  //   });
  });

