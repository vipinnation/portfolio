import { project_images } from "@/utils/images.utils";
import Image from "next/image";
import React from "react";
import ProjectCardComponent from "./project-card.component";

const MyProjects = () => {
  let myProjects = [
    {
      name: "Engima",
      description:
        "Revolutionize blogging with our user-friendly web app—seamless writing, collaborative features, and rich media integration. Empower your voice effortlessly.",
      image: project_images.engima,
      link: "https://engima.vercel.app/",
    },
    {
      name: "Edureon",
      description:
        "Transform your learning journey with our dynamic web app. Intuitive interface, interactive lessons, and progress tracking for a personalized educational experience.",
      image: project_images.edureon,
      link: "https://edureon.vercel.app/",
    },
  ];

  return (
    <div className="mt-16">
      <div className=" min-h-[100vh] text-white p-4">
        <div className="w-9/12 mx-auto">
          <h2 className="text-6xl uppercase font-semibold">My Project</h2>
        </div>

        <div className="mt-16 grid grid-cols-2 w-9/12 mx-auto">
          {myProjects.map((item, i) => (
            <ProjectCardComponent
              key={i}
              name={item.name}
              description={item.description}
              link={item.link}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
