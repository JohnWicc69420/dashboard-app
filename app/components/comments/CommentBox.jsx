import React from "react";
import ProfileCard from "../../blog/ProfileCard";

const CommentBox = ({ writerImg, writer, date, comment }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <ProfileCard writerImg={writerImg} writer={writer} date={date} />
      <div className=" line-clamp-2 dark:text-[#ddd]">{comment}</div>
    </div>
  );
};

export default CommentBox;
