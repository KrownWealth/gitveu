import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserRepos from "@/components/UserRepos";

describe("UserRepos Component", () => {
  it("renders user repositories and load more button", () => {
    // Define sample user repos data
    const userRepos = [
      {
        id: 1,
        name: "Repo 1",
        description: "Description 1",
        language: "JavaScript",
        html_url: "https://github.com/user/repo1",
      },
      // Add more sample repo objects as needed
    ];

    // Render the UserRepos component with sample userRepos
    render(<UserRepos userRepos={userRepos} />);

    // Check if the repositories are rendered
    expect(screen.getByText("Repo 1")).toBeInTheDocument();
    // You can add more assertions for other repo data

    // Check if the "Load More" button is rendered
    expect(screen.getByText("Load More")).toBeInTheDocument();
  });

  it("loads more repositories when 'Load More' button is clicked", () => {
    // Define sample user repos data with more than 'reposToShow' count
    const userRepos = [
      {
        id: 1,
        name: "Repo 1",
        description: "Description 1",
        language: "JavaScript",
        html_url: "https://github.com/user/repo1",
      },
      {
        id: 2,
        name: "Repo 2",
        description: "Description 2",
        language: "Python",
        html_url: "https://github.com/user/repo2",
      },
      // Add more sample repo objects as needed
    ];

    // Render the UserRepos component with sample userRepos
    render(<UserRepos userRepos={userRepos} />);

    // Click the "Load More" button
    fireEvent.click(screen.getByText("Load More"));

    // Check if more repositories are rendered
    expect(screen.getByText("Repo 1")).toBeInTheDocument();
    expect(screen.getByText("Repo 2")).toBeInTheDocument();
    // You can add more assertions for additional repositories
  });
});
