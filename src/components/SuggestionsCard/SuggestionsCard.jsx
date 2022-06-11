import React from "react";
import { users } from "../../backend/db/users";

const SuggestionsCard = () => {
  const userProfile = JSON.parse(localStorage.getItem("my-user-data"));
  let totalUser = users.filter(
    (item) => item.username !== userProfile.username
  );
  
  let suggesstionArray = [];
  for (const user of totalUser) {
    let flag = false;
    for (const item of userProfile.following) {
      if (user.username === item.username) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      suggesstionArray = [...suggesstionArray, user];
    }
  }
  return (
    <div className="sticky top-24 my-4 shadow-sm bg-white p-2 w-80">
      {suggesstionArray.map((item) => {
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
            </div>
            <div className="w-fit ml-auto">
              <button className="bg-[#378fe9] text-white px-3 py-1 rounded-sm hover:opacity-90">
                Follow
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SuggestionsCard;
