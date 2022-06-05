import React from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../feature/authSlice";
const Navbar = () => {
  const userProfile = JSON.parse(localStorage.getItem("my-user-data"));
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  const clickHandler = () => {
    const navigate = useNavigate();
    navigate("/home");
  };

  const logoutHandler = () => {
    dispatch(logout());
  }
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className="bg-white backdrop-blur-sm flex items-center justify-between p-2 shadow-sm">
      <div
        onClick={clickHandler}
        className="text-4xl font-semibold text-primary-color cursor-pointer"
      >
        m
        <span className="relative">
          <span className="animate-ping absolute mt-3 text-red-500 inline-flex rounded-full opacity-40 md:mt-4">
            <FavoriteOutlinedIcon />
          </span>
          <FavoriteOutlinedIcon sx={{ color: "red" }} />
        </span>
        ments
      </div>
      {user && (
        <div className="flex items-center gap-2">
          <button onClick={logoutHandler} className="bg-[#378fe9] text-white px-3 py-1 rounded-sm hover:opacity-90">
            Logout
          </button>
          <img
            src={userProfile.profileImage}
            alt="User profile image"
            className="w-14 h-14 rounded-full m-1 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
