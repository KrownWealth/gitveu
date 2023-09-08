'use client'
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";
import Nav from "./Nav";
import Header from "./Header";
import axios from "../app/axios";
import Link from "next/link";


const UserDetail = () => {
  //To get the login string 
  const { login } = useParams();

  const [userInfo, setUserInfo] = useState([]);
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (login) {
        try {
          const response = await Promise.all([
            axios.get(`/users/${login}`),
            axios.get(`/users/${login}/repos`),
          ]);
          const [userInfoResponse, userReposResponse] = response;
          setUserInfo(userInfoResponse.data);
          setUserRepos(userReposResponse.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUserInfo();
  }, [login]);

  if (!login) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Nav />
      <Header />
    <div className="container">
      <div className="repo-nav">
      <h1>User Profile</h1>
      <Link href='/'> 
      <button className="button">Go Back</button>
      </Link>
      </div>
      <div className="detail-card">
      
        <UserInfo userInfo={userInfo} />
        
      </div>
      <div className="user-repos">
      {userRepos ? (
  <UserRepos userRepos={userRepos} />
) : (
  <h2>No Repos for this User</h2>
)}

      </div>
    </div>
    </>
  );
};
export default UserDetail