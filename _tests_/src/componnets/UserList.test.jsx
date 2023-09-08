import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UsersList from "@/components/UsersList";

describe("UsersList Component", () => {
  it("renders users list and pagination controls", () => {
    // Define sample users data
    const users = [
      {
        id: 1,
        login: "user1",
      },
    ];

    render(
      <UsersList
        users={users}
        setUsers={() => {}}
        query=""
        page={1}
        limit={10}
        setLimit={() => {}}
        setPage={() => {}}
        fetchUsers={() => Promise.resolve([])}
      />
    );
    expect(screen.getByText("user1")).toBeInTheDocument();

    // Check if pagination controls are rendered
    expect(screen.getByText("prev")).toBeInTheDocument();
    expect(screen.getByText("next")).toBeInTheDocument();
    expect(screen.getByText("Per Page")).toBeInTheDocument();
  });

});