import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const BottomNav = () => {
  const { user } = useSelector((state) => state.auth);
  let enableStyle = {
    color: "var(--primary-color)",
    textDecoration: "none",
  };
  const disabledStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <div className="flex w-full justify-between bg-white p-2 px-4 shadow-md">
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? enableStyle : disabledStyle)}
        className=""
      >
        <HomeRoundedIcon sx={{ fontSize: "32px" }} />
      </NavLink>
      <NavLink
        to="/a"
        style={({ isActive }) => (isActive ? enableStyle : disabledStyle)}
        className=""
      >
        <ExploreRoundedIcon sx={{ fontSize: "32px" }} />
      </NavLink>
      <NavLink
        to="/b"
        style={({ isActive }) => (isActive ? enableStyle : disabledStyle)}
        className=""
      >
        <BookmarkIcon sx={{ fontSize: "32px" }} />
      </NavLink>
      <NavLink
        to={`/profile/${user.username}/posts`}
        style={({ isActive }) => (isActive ? enableStyle : disabledStyle)}
        className=""
      >
        <PersonIcon sx={{ fontSize: "32px" }} />
      </NavLink>
    </div>
  );
};
