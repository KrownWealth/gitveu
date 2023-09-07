'use client'
import { useState, useEffect } from "react";
import UserCard from './UserCard'

const UsersList = ({
  users,
  setUsers,
  query,
  page,
  limit,
  setLimit,
  setPage,
  fetchUsers,
}) => {
  const handlePrevPage = () => {
    // Ensure page doesn't go below 1
    setPage((page) => Math.max(1, page - 1));
  };

  const handleNextPage = () => {
    setPage((page) => page + 1);
  };

  const handlePageLimit = (e) => {
    const value = parseInt(e.target.value);
    setLimit(value);
  };

  const handleDeleteUser = (userLogin) => {
    // Filter out the user with the specified login
    const updatedList = users.filter((user) => user.login !== userLogin);
    setUsers(updatedList);
  };

  useEffect(() => {
    const displayUsersOnChange = async () => {
      if (query) {
        const items = await fetchUsers();
        setUsers(items);
      }
    };
    displayUsersOnChange();
  }, [page, limit]);

  return (
    <div className="userslist-container">
      <div className="more-options">
        <label>
          <small>Per Page</small>
          <select onChange={handlePageLimit} value={limit}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
          </select>
        </label>
        <div className="pagination">
          <button onClick={handlePrevPage}>prev</button>
          <button onClick={handleNextPage}>next</button>
        </div>
      </div>
      <div className="userList">
        {/* {users.length > 0 ? ( */}
        {users ? (
          users.map((user) => {
            return (
              <UserCard user={user} key={user.id} onDelete={handleDeleteUser} />
            );
          })
        ) : (
          <h2>There is nothing to display...</h2>
        )}
      </div>
    </div>
  );
};

export default UsersList;
