import React from "react";
import { Link } from "react-router-dom";

export const FollowCard = ({ user }) => {
  const { username, profileImage, firstName, lastName } = user ?? {};
  return (
    <Link to={`/profile/${username}/posts`}
      key={username}
      className="flex shadow items-center my-1 rounded-sm p-1 shadow-primary-color hover:bg-primary-color cursor-pointer hover:text-white"
    >
      <img
        src={profileImage}
        alt={username}
        className="w-12 h-12 rounded-full"
      />
      <div className="mx-2">
        <p className="font-semibold text-lg">
          {firstName} {lastName}
        </p>
        <p className="-mt-2 text-inherit">@{username}</p>
      </div>
    </Link>
  );
};
