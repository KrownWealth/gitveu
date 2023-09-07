import React, { useState, useEffect } from "react";
import axios from "@/app/axios";

const UserRepos = ({ userRepos }) => {
  const [reposToShow, setReposToShow] = useState(10);
  const increment = 2;

  const handleLoadMoreBtn = () => {
    setReposToShow((prevRepos) => prevRepos + increment);
  };

  return (
    <div className="repos">
      <h2 className="repo-heading">Repositories</h2>
      {userRepos.slice(0, reposToShow).map((repo) => (
        <div key={repo.id}>
          <h4>
            <a href={repo.html_url}>{repo.name}</a>
          </h4>
          <p>{repo.description}</p>
          {repo.language && <small>Developed with: {repo.language}</small>}
          <hr />
        </div>
      ))}
      {reposToShow < userRepos.length && (
        <button className="button" onClick={handleLoadMoreBtn}>
          Load More
        </button>
      )}
    </div>
  );
};

export default UserRepos;
