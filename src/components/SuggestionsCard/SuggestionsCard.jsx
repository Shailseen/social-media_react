import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { users } from "../../backend/db/users";
import { followUser } from "../../feature/authSlice";

const SuggestionsCard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  const [suggestionList,setSuggestionList] = useState([]);
  
  useEffect(() => {
    let suggestionArray = user && users.filter((item) => item._id !== user._id);
  if (user) {
    suggestionArray = suggestionArray.filter((item) =>
      !user.followings.find((item1) => item.username === item1.username)
    );
  }
  setSuggestionList(prev=> suggestionArray)
  },[user])
  

  

  const followHandler = (userId) => {
    dispatch(followUser(userId));
  };

  return (
    <div className="sticky top-24 my-4 shadow-md rounded-md bg-white p-2 w-80 lg:w-96">
      <p className="text-lg font-semibold pl-2">Suggestions</p>
      {suggestionList.length ? suggestionList.map((item) => {
        return (
          <div
            key={item._id}
            className="flex w-full shadow-sm items-center mx-auto my-2 rounded-sm p-1 border-2"
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
            </div>
            <div className="w-fit ml-auto">
              <button
                onClick={() => followHandler(item._id)}
                className="bg-[#378fe9] text-white px-3 py-1 rounded-sm hover:opacity-90"
              >
                Follow
              </button>
            </div>
          </div>
        );
      }) : <p className="pl-2 text-slate-400 font-semibold">No more suggestions</p>}
    </div>
  );
};

export default SuggestionsCard;
