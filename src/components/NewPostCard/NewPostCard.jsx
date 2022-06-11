import React from "react";

import Modal from "../Modal/Modal";
import { useState } from "react";
import ModalPostCard from "../ModalPostCard/ModalPostCard";
import CardIcons from "../CardIcons/CardIcons";

const NewPostCard = () => {
  const user = JSON.parse(localStorage.getItem("my-user-data"));
  const { profileImage } = user;
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border flex flex-col flex-grow rounded-md my-8 mx-4 w-4/4 bg-white shadow-sm">
      <div className="flex item-center gap-2 m-2">
        <img
          src={profileImage}
          className="rounded-full h-12 w-12"
          alt="profileImage"
        />
        <input
          onClick={() => setIsPostModalOpen(true)}
          type="text"
          className="border rounded-md p-1 w-full text-slate-500 focus:outline-none"
          placeholder="Share your awesome moments of your day 😊"
        />
      </div>

      <div className="m-2 flex justify-between">
        <CardIcons setIsPostModalOpen={setIsPostModalOpen} />
        <button
          onClick={() => setIsPostModalOpen(true)}
          className="bg-[#378fe9] text-white px-3 py-1 rounded-sm hover:opacity-90"
        >
          Create
        </button>
      </div>

      <div>
        <Modal open={isPostModalOpen} onClose={() => setIsOpen(true)}>
          <ModalPostCard
            user={user}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setIsPostModalOpen={setIsPostModalOpen}
          />
        </Modal>
      </div>
    </div>
  );
};

export default NewPostCard;
