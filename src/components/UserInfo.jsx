import React, { useState, useEffect } from "react";
import axios from "@/app/axios";
import Image from "next/image";

const UserInfo = ({ userInfo }) => {
  return (
    <div className="user-info">
      <div className="custom-image">
        {userInfo && userInfo.avatar_url ? (
          <Image
            src={userInfo.avatar_url}
            alt={`Avatar for ${userInfo.login}`}
            width={200}
            height={200}
          />
        ) : (
          <p>Loading avatar...</p>
        )}
      </div>

      <div className="card_info_2">
        <h4>
          <b>{userInfo?.name}</b>
        </h4>
        <small>{userInfo.login}</small>

        {userInfo.bio && (
          <p>
            {userInfo.bio}
          </p>
        )}
        <p>
          {userInfo?.followers}&nbsp; Follower{" "}
          <span>{userInfo?.following} &nbsp;Following</span>
        </p>
        <p>
          {userInfo?.location}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
