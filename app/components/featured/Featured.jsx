import React from "react";
import Link from "next/link";

const Featured = () => {
  const data = {
    id: "656f39b23a5b3146e98def9c",
    writer: "Amelia Sterling",
    writerImg: "/w1.png",
    img: "/js.png",
    date: "11-02-2023",
    bgColor: "bg-[#F0755D]",
    lightBgColor: "bg-[#E0F1FD]",
    cat: "Coding",
    title: "Mastering JavaScript: A Guide to Modern Web Development",
    desc: 'In the ever-evolving landscape of web development, proficiency in JavaScript is not merely an advantage; it is a necessity. "Mastering JavaScript: A Guide to Modern Web Development" is an immersive journey into the heart of this versatile programming language, designed to equip developers with the skills and knowledge needed to navigate the complexities of contemporary web development.\n\nJavaScript, initially conceived as a client-side scripting language for enhancing the interactivity of web pages, has transcended its humble origins. Today, it stands as a cornerstone of full-stack development, powering both the client and server sides of applications. This guide, spanning from the basics to advanced concepts, serves as a comprehensive resource for individuals looking to master JavaScript in the context of modern web development.\n\nAt its core, JavaScript is renowned for its asynchronous capabilities, enabling the creation of dynamic and responsive user interfaces. The guide commences with a meticulous exploration of the fundamental building blocks, such as variables, data types, and control structures. It provides a solid foundation, ensuring that beginners grasp the essentials before venturing into the more intricate realms of the language.\n\nAs the journey progresses, attention shifts towards advanced topics, including functions, closures, and the concept of asynchronous programming. Readers are introduced to the principles that underlie the development of single-page applications (SPAs) and the popular JavaScript frameworks that facilitate their creation. Whether it\'s React with its component-based architecture, Angular with its comprehensive ecosystem, or Vue.js with its simplicity and flexibility, this guide demystifies the intricacies of these frameworks.\n\nOne of the defining features of modern web development is the prevalence of server-side JavaScript. Node.js, a JavaScript runtime built on the V8 JavaScript engine, enables developers to extend their expertise to server-side programming. The guide explores the fundamentals of Node.js and its popular web application framework, Express. Understanding how to build scalable and efficient server-side applications becomes an integral part of the learning journey.\n\nIn addition to frameworks, the guide touches on tools that have become essential in the developer\'s toolkit. Topics such as package management with npm (Node Package Manager), version control with Git, and task automation with tools like Webpack are demystified, empowering developers to streamline their workflows.\n\nThe evolving nature of web development demands an awareness of industry best practices and an ability to adapt to new methodologies. "Mastering JavaScript" incorporates discussions on topics like test-driven development (TDD), code optimization, and debugging techniques. Real-world examples and hands-on exercises ensure that theoretical knowledge is translated into practical skills.\n\nThe guide also emphasizes the significance of staying abreast of the JavaScript ecosystem\'s constant evolution. Updates to ECMAScript, the language specification on which JavaScript is based, are explored to ensure that developers are equipped to leverage the latest language features and enhancements.\n\nUltimately, "Mastering JavaScript: A Guide to Modern Web Development" is more than just a tutorial; it\'s a roadmap to becoming a proficient and adaptable web developer. By combining theoretical understanding with practical application, this guide empowers developers to not only navigate the intricacies of JavaScript but also to contribute meaningfully to the dynamic world of modern web development. Whether you\'re embarking on your coding journey or seeking to enhance your existing skills, this guide is your comprehensive companion in the pursuit of mastering JavaScript.',
  };

  return (
    <>
      <div className="h-full md:pt-10 pt-4 mb-12">
        <p className="lg:text-6xl md:text-4xl text-3xl line-clamp-3">
          <div className="lg:leading-[76px] md:leading-[50px] sm:leading-[40px]">
            <span className=" font-semibold">Hey, smag dev here!</span> Discover
            my stories and creative ideas.
          </div>
        </p>
        <div
          className="bottom flex md:flex-row flex-col items-center
         md:pt-10 pt-6 md:gap-10 gap-6"
        >
          <Link href={`blog/${data?.id}`}>
            <div
              className="left cursor-pointer rounded-3xl flex items-center justify-center overflow-hidden
          md:h-[280px] md:min-w-[350px]
         lg:h-[360px] lg:min-w-[450px] 
         2xl:h-[440px] 2xl:min-w-[550px] "
            >
              <img
                className="object-cover hover:scale-103 transition-pic h-full w-full"
                src={data?.img}
                alt=""
              />
            </div>
          </Link>
          <div className="right flex flex-col items-start">
            <h1 className=" lg:text-3xl lg:font-bold text-xl line-clamp-2 font-bold">
              {data?.title}
            </h1>
            <p className="text-[#a6a6a6] my-4 lg:text-base text-sm line-clamp-6 font-medium">
              {data?.desc}
            </p>
            <Link href={`blog/${data?.id}`}>
              <button
                className="bg-[#ECECEC] p-3 font-medium rounded-md 
            text-sm text-[#000]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
