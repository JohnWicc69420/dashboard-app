import React from "react";
import Link from "next/link";
import CommentBox from "./CommentBox";

const commentsData = [
  {
    id: 1,
    writerImg: "/w1.png",
    writer: "Luna Bloggerson",
    date: "15-07-2023",
    comment:
      "Insightful post! I love how this blog always provides fresh perspectives. The depth of analysis and clarity make it a joy to read.",
  },
  {
    id: 2,
    writerImg: "/w2.png",
    writer: "Max Wanderer",
    date: "28-09-2023",
    comment:
      "Captivating writing! The content is always thought-provoking. Great work! Your ability to engage readers with compelling narratives is commendable.",
  },
  {
    id: 3,
    writerImg: "/w3.png",
    writer: "Aria Insightful",
    date: "03-04-2023",
    comment:
      "This blog never disappoints. I'm always eager to read the latest posts. The diverse range of topics covered and the depth of research set this blog apart.",
  },
  {
    id: 4,
    writerImg: "/w4.png",
    writer: "Ethan Explorer",
    date: "12-11-2023",
    comment:
      "Attention to detail is commendable. Keep up the fantastic work! Your articles not only inform but also spark introspection. The thoughtful exploration of ideas resonates with readers.",
  },
  {
    id: 5,
    writerImg: "/w5.png",
    writer: "Olivia Observer",
    date: "19-01-2023",
    comment:
      "A regular reader, and I must say, the content is consistently top-notch. Well done! The way you blend information with personal insight makes for a compelling read.",
  },
  {
    id: 6,
    writerImg: "/w6.png",
    writer: "Leo Literati",
    date: "07-06-2023",
    comment:
      "This blog is a gem. The writer's unique voice adds value to each article. Bravo! The thought-provoking content stimulates intellectual curiosity, and the eloquent expression is a testament to your writing prowess.",
  },
];

const Comments = () => {
  return (
    <>
      <div className="text-[#626262] dark:text-[#a6a6a6] flex flex-col items-start gap-10">
        <h1 className="text-3xl font-bold">Comments</h1>
        <div className="pb-6 flex flex-col gap-10">
          {commentsData.map((item) => (
            <CommentBox
              key={item.id}
              writerImg={item.writerImg}
              writer={item.writer}
              date={item.date}
              comment={item.comment}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
