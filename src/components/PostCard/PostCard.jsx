import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const PostCard = ({ postData }) => {
  const { content, username, createdAt, profileImage,firstName,lastName } = postData;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = createdAt.split("T")[0].split("-")[2];
  let month = createdAt.split("T")[0].split("-")[1];
  month = monthNames[month - 1];
  return (
    <div className="border w-4/4 mx-4 md:w-2/4 md:mx-auto rounded-md bg-white my-2 shadow-sm">
      <div className="flex border-b-2 p-2">
        {profileImage ? (
          <img src={profileImage} alt="" className="rounded-full w-14 h-14" />
        ) : (
          <img
            src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
            alt=""
            className="rounded-full w-14 h-14"
          />
        )}
        <div className="ml-3">
          <p className="font-bold">{firstName} {lastName}</p>
          <p className="-mt-1 text-slate-400 text-sm">@{username}</p>
          <p className="-mt-1 text-slate-400 text-xs">
            • {day - 0} {month}
          </p>
        </div>
      </div>
      {content[0] && <p className="px-2 pb-4 pt-2">{content[0]}</p>}
      {content[1] && <img src={content[1]} alt="User post image" />}
      <div className="border-t-2 mt-0 flex items-center justify-between p-2 px-4">
        <ThumbUpOutlinedIcon />
        <ModeCommentOutlinedIcon />
        <ShareOutlinedIcon />
        <BookmarkBorderOutlinedIcon />
      </div>
    </div>
  );
};

export default PostCard;
