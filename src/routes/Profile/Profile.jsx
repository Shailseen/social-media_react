import React, { useEffect } from "react";
import PhotoCameraFrontRoundedIcon from "@mui/icons-material/PhotoCameraFrontRounded";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/PostCard/PostCard";
import { getPostByUsername, getUsersByUserId } from "../../feature/usersSlice";
import { FollowCard } from "../../components/FollowCard/FollowCard";
import {
  editUserDetails,
  followUser,
  unFollowUser,
} from "../../feature/authSlice";

export const Profile = () => {
  const { postsByUsername, profileUser } = useSelector((state) => state.users);
  const { posts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const { status } = useSelector((state) => state.users);
  const params = useParams().username;
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  const {
    _id,
    profileImage,
    backgroundImage,
    firstName,
    lastName,
    username,
    bio,
    follower,
    followings,
  } = profileUser ?? {};

  const getStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : "black",
    fontWeight: "bold",
    fontSize: "large",
    borderBottom: isActive ? "2px solid" : "",
    marginBottom: "-2px",
    paddingBottom: "4px",
    cursor: "pointer",
    paddingLeft: "8px",
    paddingRight: "8px",
  });

  const followUserHandler = () => {
    dispatch(followUser(_id));
  };

  const unfollowUserHandler = () => {
    dispatch(unFollowUser(_id));
  };

  const isUserFollow =
    user && user?.followings?.some((item) => item.username === params);

  useEffect(() => {
    dispatch(getPostByUsername(params));
  }, [posts, params, profileUser]);

  useEffect(() => {
    dispatch(getUsersByUserId(params));
  }, [params, user]);

  const profileImageHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      let userData = {
        ...user,
        profileImage: URL.createObjectURL(event.target.files[0]),
      };
      dispatch(editUserDetails(userData));
    }
  };

  return (
    <div className="mb-14">
      <div className="shadow-md rounded-md bg-white m-4 p-4 pb-2">
        <div className="relative">
          <img
            className="h-52 w-screen rounded-sm"
            src={backgroundImage}
            alt={`${firstName} cover pic`}
          />
          <img
            className="w-40 h-40 rounded-full absolute top-32 left-7 border-4 border-white"
            src={profileImage}
            alt={`${firstName} profile pic`}
          />
          {user?.username === params && (
            <div className="cursor-pointer absolute top-60 left-40 rounded-full bg-white h-8 w-8 flex items-center justify-center">
              <PhotoCameraFrontRoundedIcon
                sx={{ color: "var(--primary-color)",cursor: "pointer" }}
              />
              <input
                type="file"
                id="AddPhotos"
                className="absolute w-8 opacity-0 cursor-pointer"
                accept="image/*"
                onChange={profileImageHandler}
                multiple
              />
            </div>
          )}
        </div>

        {params !== user?.username && !isUserFollow && (
          <button
            onClick={followUserHandler}
            className="bg-primary-color text-white px-3 font-semibold cursor-pointer hover:opacity-90 py-1 rounded-sm float-right mt-2"
          >
            Follow
          </button>
        )}

        {params !== user?.username && isUserFollow && (
          <button
            onClick={unfollowUserHandler}
            className="bg-primary-color text-white px-3 font-semibold cursor-pointer hover:opacity-90 py-1 rounded-sm float-right mt-2"
          >
            UnFollow
          </button>
        )}

        <div className="mt-24 w-fit mx-auto">
          <p className="font-bold text-2xl text-center">{`${firstName} ${lastName}`}</p>
          <p className="font-medium text-slate-500 text-center">{`${username}`}</p>
          <p className="mt-4">{bio}</p>
        </div>
        <div className="flex items-center justify-between border-b-0 border-b-slate-200">
          <NavLink style={getStyle} to={`/profile/${params}/posts`}>
            Posts
          </NavLink>

          <NavLink style={getStyle} to={`/profile/${params}/followers`}>
            Followers
          </NavLink>

          <NavLink style={getStyle} to={`/profile/${params}/following`}>
            Following
          </NavLink>
        </div>
      </div>

      <div>
        {profileUser &&
          location === `/profile/${params}/posts` &&
          postsByUsername &&
          postsByUsername.map((item) => (
            <PostCard key={item._id} postData={item} />
          ))}
        {profileUser &&
          location === `/profile/${params}/posts` &&
          postsByUsername.length === 0 && (
            <div className="shadow-md rounded-md mx-4 bg-white p-4">
              <p className="font-semibold">{`No post by ${params}.`}</p>
            </div>
          )}
      </div>

      <div>
        {profileUser &&
          location === `/profile/${params}/followers` &&
          follower.length > 0 && (
            <div className="flex flex-col shadow-md bg-white mx-4 p-2 rounded-md">
              {follower.map((item) => {
                return <FollowCard user={item} />;
              })}
            </div>
          )}
        {profileUser &&
          location === `/profile/${params}/followers` &&
          follower.length === 0 && (
            <div className="shadow-md rounded-md mx-4 bg-white p-4">
              <p className="font-semibold">No followers by you.</p>
            </div>
          )}
      </div>

      <div>
        {profileUser &&
          location === `/profile/${params}/following` &&
          followings.length > 0 && (
            <div className="flex flex-col shadow-md bg-white mx-4 p-2 rounded-md">
              {followings.map((item) => {
                return <FollowCard user={item} />;
              })}
            </div>
          )}
        {profileUser &&
          location === `/profile/${params}/following` &&
          followings.length === 0 && (
            <div className="shadow-md rounded-md mx-4 bg-white p-4">
              <p className="font-semibold">
                No users follow by you. You can{" "}
                <Link
                  to="/explore"
                  className="text-primary-color cursor-pointer"
                >
                  explore
                </Link>{" "}
                to follow.
              </p>
            </div>
          )}
      </div>
    </div>
  );
};
