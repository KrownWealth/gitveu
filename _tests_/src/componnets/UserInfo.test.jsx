import React from "react";
import { render, screen } from "@testing-library/react";
import UserInfo from "@/components/UserInfo";

describe("UserInfo Component", () => {
  it("renders user info correctly", () => {
    // Define sample userInfo data
    const userInfo = {
      login: "testuser",
      name: "Test User",
      avatar_url: "https://example.com/avatar.jpg",
      bio: "This is a test bio.",
      followers: 100,
      following: 50,
      location: "Test Location",
    };

    // Render the UserInfo component with sample data
    const { getByText, getByAltText } = render(<UserInfo userInfo={userInfo} />);

    // Assert that user info elements are rendered correctly
    expect(screen.getByAltText(`Avatar for ${userInfo.login}`)).toBeInTheDocument();
    expect(screen.getByText(userInfo.name)).toBeInTheDocument();
    expect(screen.getByText(userInfo.login)).toBeInTheDocument();
    expect(screen.getByText(userInfo.bio)).toBeInTheDocument();
    expect(screen.getByText(`${userInfo.followers} Follower`)).toBeInTheDocument();
    expect(screen.getByText(`${userInfo.following} Following`)).toBeInTheDocument();
    expect(screen.getByText(userInfo.location)).toBeInTheDocument();
  });

  it("renders loading state if userInfo is null", () => {
    // Render the UserInfo component with null userInfo
    const { getByText } = render(<UserInfo userInfo={null} />);

    // Assert that loading state is rendered
    expect(screen.getByText("Loading User Information...")).toBeInTheDocument();
  });
});
