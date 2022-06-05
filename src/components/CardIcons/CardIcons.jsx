import React from "react";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

const CardIcons = ({setIsPostModalOpen}) => {
  return (
    <>
      <div className="flex items-center gap-4">
        
        <div onClick={() => setIsPostModalOpen(true)} className="flex items-center gap-1 cursor-pointer">
          <AddPhotoAlternateOutlinedIcon
            sx={{ color: "#378fe9", fontSize: "30px" }}
          />
          <label
            htmlFor="AddPhotos"
            className="text-slate-400 hidden cursor-pointer sm:block"
          >
            Add photos
          </label>
        </div>
        <div onClick={() => setIsPostModalOpen(true)} className="flex items-center gap-1 cursor-pointer">
          <EmojiEmotionsOutlinedIcon
            sx={{ color: "#378fe9", fontSize: "30px"}}
          />
          <label
            htmlFor="Reactions"
            className="text-slate-400 hidden sm:block"
          >
            Reactions
          </label>
        </div>
      </div>
    </>
  );
};

export default CardIcons;
