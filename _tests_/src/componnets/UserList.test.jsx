import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UsersList from "./UsersList";

describe("UsersList Component", () => {
  it("renders users list and pagination controls", () => {
    // Define sample users data
    const users = [
      {
        id: 1,
        login: "user1",
        // Add more user data as needed
      },
      // Add more users as needed
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

    // Check if users are rendered
    expect(screen.getByText("user1")).toBeInTheDocument();
    // You can add more assertions for other user data

    // Check if pagination controls are rendered
    expect(screen.getByText("prev")).toBeInTheDocument();
    expect(screen.getByText("next")).toBeInTheDocument();
    expect(screen.getByText("Per Page")).toBeInTheDocument();
  });

  it("handles pagination and user deletion", () => {
    // Define sample users data
    const users = [
      {
        id: 1,
        login: "user1",
        // Add more user data as needed
      },
      {
        id: 2,
        login: "user2",
        // Add more user data as needed
      },
      // Add more users as needed
    ];

    // Define mock functions for props
    const setUsers = jest.fn();
    const setLimit = jest.fn();
    const setPage = jest.fn();
    const fetchUsers = jest.fn(() => Promise.resolve([]));

    render(
      <UsersList
        users={users}
        setUsers={setUsers}
        query=""
        page={1}
        limit={10}
        setLimit={setLimit}
        setPage={setPage}
        fetchUsers={fetchUsers}
      />
    );

    // Click the "next" button to test pagination
    fireEvent.click(screen.getByText("next"));
    expect(setPage).toHaveBeenCalledWith(2);

    // Click the "prev" button to test pagination
    fireEvent.click(screen.getByText("prev"));
    expect(setPage).toHaveBeenCalledWith(1);

    // Change the "Per Page" dropdown value to test limit change
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "20" },
    });
    expect(setLimit).toHaveBeenCalledWith(20);

    // Click the delete button on a user card to test user deletion
    fireEvent.click(screen.getByText("Delete"));

    // You can add more assertions to ensure that the corresponding user is deleted
  });
});
