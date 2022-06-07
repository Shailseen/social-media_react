import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import EditModalPostCard from "../EditModalPostCard/EditModalPostCard";
import Modal from "../Modal/Modal";

const PostCard = ({ postData }) => {
  const {
    content,
    username,
    createdAt,
    profileImage,
    firstName,
    lastName,
  } = postData;
  // console.log(content);
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
  const userProfile = JSON.parse(localStorage.getItem("my-user-data"));
  const day = createdAt.split("T")[0].split("-")[2];
  let month = createdAt.split("T")[0].split("-")[1];
  month = monthNames[month - 1];
  const [isTooltipVisible, setIsTooltipVisible] = useState("hidden");
  const [isEditPostModalOpen, setIsEditPostModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const tooltipHandler = () => {
    isTooltipVisible === "hidden"
      ? setIsTooltipVisible((prev) => "visible")
      : setIsTooltipVisible((prev) => "hidden");
  };
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
          <p className="font-bold">
            {firstName} {lastName}
          </p>
          <p className="-mt-1 text-slate-400 text-sm">@{username}</p>
          <p className="-mt-1 text-slate-400 text-xs">
            • {day - 0} {month}
          </p>
        </div>
        <div
          className={`ml-auto relative ${
            username === userProfile.username ? "visible" : "hidden"
          }`}
        >
          <MoreVertIcon
            sx={{ width: "2rem", height: "2rem", padding: "0.2rem" }}
            className="hover:bg-slate-200 rounded-full cursor-pointer"
            onClick={tooltipHandler}
          />
          <div
            className={`border rounded-sm absolute right-2 bg-white ${isTooltipVisible}`}
          >
            <div className="flex m-1 border-b gap-2 hover:bg-slate-200 cursor-pointer rounded-sm p-1" onClick={() => setIsEditPostModalOpen(true)}>
              <EditIcon />
              <p className="text-sm">edit</p>
            </div>
            <div className="flex m-1 gap-2 hover:bg-slate-200 cursor-pointer rounded-sm p-1">
              <DeleteIcon />
              <p className="text-sm">delete</p>
            </div>
          </div>
        </div>
      </div>
      <Modal open={isEditPostModalOpen} onClose={() => setIsOpen(true)}>
        <EditModalPostCard
          user={userProfile}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsPostModalOpen={setIsEditPostModalOpen}
          postData={postData}
        />
      </Modal>
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
