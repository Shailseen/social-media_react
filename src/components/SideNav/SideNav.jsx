import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  let enableStyle = {
    color: "var(--primary-color)",
    textDecoration: "none",
    backgroundColor: "#3790e93e",
    fontSize: "24px",
  };
  const disabledStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "24px",
  };
  return (
    <div className="flex sticky top-24 flex-col w-44 md:w-56 m-4 shadow-md bg-white rounded-md">
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? enableStyle : disabledStyle)}
        className="flex items-center pl-2 py-2"
      >
        <HomeRoundedIcon sx={{ fontSize: "32px" }} />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/a"
        style={({ isActive }) => (isActive ? enableStyle : disabledStyle)}
        className="flex items-center pl-2 py-2"
      >
        <ExploreRoundedIcon sx={{ fontSize: "32px" }} />
        <span>Explore</span>
      </NavLink>
      <NavLink
        to="/b"
        style={({ isActive }) => (isActive ? enableStyle : disabledStyle)}
        className="flex items-center pl-2 py-2"
      >
        <BookmarkIcon sx={{ fontSize: "32px" }} />
        <span>Bookmark</span>
      </NavLink>
      <NavLink
        to="/c"
        style={({ isActive }) => (isActive ? enableStyle : disabledStyle)}
        className="flex items-center pl-2 py-2"
      >
        <PersonIcon sx={{ fontSize: "32px" }} />
        <span>Profile</span>
      </NavLink>
    </div>
  );
};

export default SideNav;
