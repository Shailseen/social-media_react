import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { users } from "../../backend/db/users";
import { useEffect } from "react";
export const Search = () => {
  const [searchText, setSearchText] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (searchText) {
      const result = users.filter(
        (user) =>
          user.firstName.toLowerCase().search(searchText.toLowerCase()) !==
            -1 ||
          user.lastName.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
          user.username.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
          user.email.toLowerCase().search(searchText.toLowerCase()) !== -1
      );
      setSearchResult(result);
    } else setSearchResult([]);
  }, [searchText]);

  const inputSearchHandler = (e) => {
    setSearchText((prev) => e.target.value);
  };

  return (
    <div className="relative">
      <div className={`flex items-center mx-4 mt-4 border-2 ${searchText ? "border-l-primary-color border-t-primary-color border-r-primary-color border-b-white rounded-t-md" : "rounded-md border-primary-color"}`}>
        <input
          type="text"
          className={`w-full p-2 focus:outline-none rounded-md`}
          placeholder="Search peoples by Name, Username, Email..."
          value={searchText}
          onChange={inputSearchHandler}
        />
        <SearchOutlinedIcon
          sx={{
            backgroundColor: "white",
            height: "2.5rem",
            width: "2rem",
            fontSize: 20,
            paddingRight: "4px",
          }}
          className="text-primary-color rounded-md"
        />
      </div>
      <div className={`bg-white absolute mx-4 top-11 left-0 right-0 border-l-2 border-b-2 border-r-2 border-l-primary-color border-b-primary-color border-r-primary-color ${searchText ? "visible rounded-b-md" : "hidden"}`}>
        {searchResult.length ? (
          searchResult.map((item) => {
            return (
              <div
                key={item._id}
                className="hover:bg-blue-100 cursor-pointer flex shadow-sm items-center m-2 rounded-sm p-1 border-2"
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
              </div>
            );
          })
        ) : (
          <p className="pl-2 w-full text-slate-400 font-semibold">
            No user found.
          </p>
        )}
      </div>
    </div>
  );
};
