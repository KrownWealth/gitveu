'use client'
import { useState } from 'react';
import instance from './axios';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import UsersList from '@/components/UsersList';
import InputField from '@/components/InputField'



export default function Home() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  // const axiosInstance = axios.create({
  //   baseURL: 'https://api.github.com',
  // });

  const fetchUsers = async () => {
    try {
      
      const { data } = await instance.get(
        `/search/users?q=${query}&page=${page}&per_page=${limit}`
      );
      
      return data?.items || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (query) {
      const items = await fetchUsers();
      setUsers(items);
    } else {
      console.log("Your Query is Empty...");
    }
  };

  return (
    <main>
       <Nav
        query={query}
        handleQueryInput={handleQueryInput}
        handleSearchUsers={handleSearchUsers}
      />
      <Header
        query={query}
        handleQueryInput={handleQueryInput}
        handleSearchUsers={handleSearchUsers}
      />
      <div className="inputFieldContainer show-on-mobile">
        <InputField
          query={query}
          handleQueryInput={handleQueryInput}
          handleSearchUsers={handleSearchUsers}
        />
      </div>

      <UsersList
        users={users}
        setUsers={setUsers}
        query={query}
        page={page}
        limit={limit}
        setLimit={setLimit}
        fetchUsers={fetchUsers}
      />
    </main>
  )
}
