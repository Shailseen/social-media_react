import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentPost, deleteCommentPost } from "../../feature/postSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../Loader/Loader";

const Comments = ({ comments, postId, user }) => {
  const { status } = useSelector((state) => state.post);
  Object.freeze(comments);
  let commentsCopy = [...comments];
  commentsCopy = commentsCopy.reverse();
  const { profileImage } = user;
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setCommentText(e.target.value);
  };

  const commentData = { postId: postId, commentData: commentText };

  const postCommentHandler = () => {
    setCommentText("");
    dispatch(commentPost(commentData));
  };

  const deleteCommentHandler = (commentId) => {
    dispatch(deleteCommentPost({ postId: postId, commentId: commentId }));
  };

  return (
    <div>
      <div className="flex items-center gap-2 mx-2">
        <img
          src={profileImage}
          alt="user pic"
          className="w-12 h-12 rounded-full"
        />
        <textarea
          type="text"
          rows="1"
          placeholder="Write your comment..."
          className="focus:outline-none border-2 p-1 rounded-sm border-primary-color w-full resize-none"
          value={commentText}
          autoFocus
          onChange={inputHandler}
        />
      </div>
      <div className="w-fit ml-auto mr-2">
        <button
          className={`bg-[#378fe9] text-white px-3 py-1 rounded-sm hover:opacity-90 ${
            !commentText.length
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          onClick={postCommentHandler}
        >
          Post
        </button>
      </div>
      <p className="font-semibold pl-2 pb-2">Comments</p>
      {status === "loading" && (
        <div className="w-fit mx-auto">
          <Loader />
        </div>
      )}
      {commentsCopy.map((item) => {
        return (
          <div
            key={item._id}
            className="flex items-center m-2 rounded-sm shadow-md p-1 bg-slate-50"
          >
            <img
              src={item.profileImage}
              alt={item.username}
              className="w-12 h-12 rounded-full"
            />
            <div className="mx-2">
              <p className="font-semibold text-lg">
                {item.firstName} {item.lastName}
              </p>
              <p className="-mt-2 text-gray-400">@{item.username}</p>
              <p>{item.text}</p>
            </div>
            {user.username === item.username && (
              <DeleteIcon
                sx={{ fontSize: 40 }}
                className="ml-auto hover:text-primary-color cursor-pointer"
                onClick={() => deleteCommentHandler(item._id)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
