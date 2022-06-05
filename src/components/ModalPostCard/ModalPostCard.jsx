import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import Picker from "emoji-picker-react";
import { useRef } from "react";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { addPost } from "../../feature/postSlice";

const ModalPostCard = ({
  user: { profileImage, username, firstName, lastName },
  setIsPostModalOpen,isOpen,setIsOpen
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [postStory, setPostStory] = useState("");
  const [showEmojiCard, setShowEmojiCard] = useState("hidden");
  const [cardWidth, setCardWidth] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(
    !selectedImage && !postStory
  );
  const widthRef = useRef();
  const dispatch = useDispatch();

  const photoHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage((prev) => URL.createObjectURL(event.target.files[0]));
    }
  };

  const onChangeHandler = (event) => {
    setPostStory((prev) => event.target.value);
  };

  useEffect(() => {
    setIsButtonDisabled(!selectedImage && !postStory);
  }, [selectedImage, postStory]);

  useEffect(() => {
    const newWidth = widthRef.current.clientWidth;
    setCardWidth(newWidth);
  }, [selectedImage]);

  const emojiHandler = () => {
    showEmojiCard === "hidden"
      ? setShowEmojiCard("visible")
      : setShowEmojiCard("hidden");
  };

  const onEmojiClick = (event, emojiObject) => {
    setPostStory((prev) => prev + emojiObject.emoji);
  };

  const postContent = [postStory, selectedImage];

  const postHandler = () => {
    dispatch(addPost(postContent));
    setIsPostModalOpen(false);
  };

  return (
    <div ref={widthRef} className="bg-white">
      <p className="text-2xl mb-2 font-semibold">Create a post</p>

      <div className="flex items-center gap-2 mb-3">
        <img
          src={profileImage}
          alt="profileImage"
          className="rounded-full h-12 w-12"
        />
        <div>
          <p className="font-semibold text-lg">
            {firstName} {lastName}
          </p>
          <p className="text-slate-400 text-sm -mt-1">@{username}</p>
        </div>
      </div>

      <textarea
        name="userPostData"
        id="userPostData"
        cols="30"
        rows="3"
        maxLength="100"
        value={postStory}
        onChange={onChangeHandler}
        placeholder="Write your journey"
        className="focus:outline-none resize-none"
        autoFocus
      ></textarea>

      {selectedImage && (
        <img
          src={selectedImage}
          alt="user post image"
          className="w-80 h-36 m-auto"
        />
      )}

      <div className="flex items-center mt-4">
        <div className="mr-2">
          <label htmlFor="AddPhotos" className="text-slate-400 cursor-pointer">
            <AddPhotoAlternateOutlinedIcon
              sx={{ color: "#378fe9", fontSize: "30px" }}
            />
            <input
              type="file"
              id="AddPhotos"
              className="hidden"
              accept="image/*"
              onChange={photoHandler}
              multiple
            />
          </label>
        </div>

        <div>
          <label htmlFor="AddEmoji">
            <EmojiEmotionsOutlinedIcon
              onClick={() => emojiHandler()}
              sx={{ color: "#378fe9", fontSize: "30px" }}
            />
            <div className={`${showEmojiCard} absolute -ml-14`}>
              <Picker
                disableSearchBar
                disableSkinTonePicker
                pickerStyle={{
                  height: "12rem",
                  width: { cardWidth } + "px",
                  marginTop: "1.1rem",
                }}
                onEmojiClick={onEmojiClick}
              />
            </div>
          </label>
        </div>

        <div className="w-full flex items-center justify-end gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#378fe9] ml-8 text-white w-20 px-3 py-1 rounded-sm hover:opacity-90"
          >
            Discard
          </button>
          <button
            onClick={postHandler}
            disabled={isButtonDisabled}
            className={` text-white w-20 px-3 py-1 rounded-sm hover:opacity-90 ${
              !isButtonDisabled
                ? `bg-[#378fe9]`
                : `bg-slate-400 cursor-not-allowed`
            } `}
          >
            Post
          </button>
        </div>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-4 w-80 bg-white">
          <p className="text-2xl pb-4 border-b">Discard draft</p>
          <p className="py-2 border-b mb-4">
            You haven't finished your post yet. Are you sure you want to leave
            and discard your draft?
          </p>
          <div className="flex items-center justify-end gap-3 pd-4">
            <button
              onClick={() => setIsPostModalOpen(false)}
              className="bg-[#378fe9] text-white px-3 py-1 rounded-sm hover:opacity-90"
            >
              Discard
            </button>
            <button onClick={() => setIsOpen(false)} className="bg-[#378fe9] text-white px-3 py-1 rounded-sm hover:opacity-90">
              Continue
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPostCard;
