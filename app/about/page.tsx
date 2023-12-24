import SkillCardComponent from "@/components/skills/skill-card.component";
import { skills_images } from "@/utils/images.utils";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  let skills = [
    { name: "JavaScript", rating: 9.8, icon: skills_images.javascript },
    { name: "Java", rating: 9.4, icon: skills_images.java },
    { name: "NodeJs", rating: 9.6, icon: skills_images.nodejs },
    { name: "MongoDB", rating: 8.8, icon: skills_images.mongodb },
    { name: "React Js", rating: 9.9, icon: skills_images.reactjs },
    { name: "NextJS", rating: 9.0, icon: skills_images.nextjs },
    { name: "Angular", rating: 9.5, icon: skills_images.angular },
    { name: "Rust", rating: 9.6, icon: skills_images.rust },
    { name: "Docker", rating: 9.7, icon: skills_images.docker },
  ];
  return (
    <div className="bg-black min-h-[100vh] text-white p-4 ">
      <div className=" sm:w-9/12 mx-auto">
        <h2 className=" text-5xl sm:text-6xl uppercase font-semibold">
          About Me
        </h2>
        <span className="uppercase mobile:text-xs">
          Web Designer and
          <strong className="text-yellow-400"> Web developer</strong>
        </span>

        <div className="mt-8 text-md sm:text-lg !leading-loose">
          <p>
            Vipin Meghwal is a versatile software developer with a strong skill
            set encompassing web, mobile, and desktop applications. Proficient
            in JavaScript, Python, and Java, Vipin excels in crafting innovative
            and high-quality solutions for diverse technological challenges.
          </p>
          <p className="py-7">
            Committed to staying current with industry trends, Vipin brings a
            collaborative spirit to cross-functional teams. Their effective
            communication and problem-solving abilities make them an asset to
            any project.
          </p>
          <p>
            Passionate about creating seamless, scalable, and cutting-edge
            applications, Vipin&apos;s track record goes beyond technical
            expertise. They demonstrate a dedication to turning concepts into
            reality in our rapidly evolving digital landscape.
          </p>
        </div>
      </div>

      <div className="sm:w-9/12 mx-auto ">
        <h3 className="font-medium text-2xl mt-16 text-gray-200">Top skills</h3>
        <div className="py-4 flex flex-wrap">
          {skills.map((item, i) => (
            <div
              className="mx-4 w-48 h-28 mobile:w-32"
              key={Math.floor(Math.random() * 1e4)}
            >
              <SkillCardComponent
                key={i}
                name={item.name}
                rating={item.rating}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex items-center justify-center mt-4 sm:w-9/12 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-lg shadow-gray-300 bg-white">
          <header className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 shrink-0 w-6 h-6 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 19l16 0"></path>
              <path d="M4 15l4 -6l4 2l4 -5l4 4"></path>
            </svg>
            <h3 className="font-medium text-lg text-black">Top skills</h3>
          </header>

          <div className="py-4 grid sm:grid-cols-2 gap-x-6">
            {skills.map((item, i) => (
              <SkillCardComponent
                key={i}
                name={item.name}
                rating={item.rating}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutPage;
