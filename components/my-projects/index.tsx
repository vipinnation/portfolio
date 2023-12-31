import { project_images } from "@/utils/images.utils";
import Image from "next/image";
import React from "react";
import InViewAnimation from "../animation/in-view.animation";
import TextSlideAnimation from "../animation/text-slide.animation";
import ProjectCardComponent from "./project-card.component";

const MyProjects = () => {
  let myProjects = [
    {
      name: "KustomParts",
      description:
        "Discover endless treasures on our vibrant e-commerce platform, offering curated products, seamless shopping, and unparalleled convenience for every need.",
      image: project_images.kustomparts,
      link: "https://kustom-parts.vercel.app/",
      type: "E-Commerce Web Application",
    },
    {
      name: "Chatore",
      description:
        "Connect effortlessly with our innovative chat application. Instant messaging, rich features, and a user-friendly interface for seamless communication and connection.",
      image: project_images.chatore,
      link: "https://chatore.vercel.app/",
      type: "Real-time Chat ",
    },
    {
      name: "Engima",
      description:
        "Revolutionize blogging with our user-friendly web app—seamless writing, collaborative features, and rich media integration. Empower your voice effortlessly.",
      image: project_images.engima,
      link: "https://engima.vercel.app/",
      type: "Blog",
    },
    {
      name: "Edureon",
      description:
        "Transform your learning journey with our dynamic web app. Intuitive interface, interactive lessons, and progress tracking for a personalized educational experience.",
      image: project_images.edureon,
      link: "https://edureon.vercel.app/",
      type: "E-learning Platform",
    },
  ];

  return (
    <div className="mt-16">
      <div className=" min-h-[100vh] text-white p-4">
        <div className="sm:w-9/12 mx-auto">
          <h2 className="text-4xl sm:text-6xl uppercase font-semibold">
            My Project
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-1 sm:w-9/12 mx-auto">
          {myProjects.map((item, i) => (
            <InViewAnimation>
              <TextSlideAnimation>
                <ProjectCardComponent
                  key={i}
                  name={item.name}
                  description={item.description}
                  link={item.link}
                  image={item.image}
                  type={item.type}
                />
              </TextSlideAnimation>
            </InViewAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
