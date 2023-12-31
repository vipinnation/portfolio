"use client";
import InViewAnimation from "@/components/animation/in-view.animation";
import TextSlideAnimation from "@/components/animation/text-slide.animation";
import VariationAnimation from "@/components/animation/variation.animation";
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
    <div className=" min-h-[100vh] text-white p-4 ">
      <InViewAnimation>
        <TextSlideAnimation>
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
                Vipin Meghwal is a versatile software developer with a strong
                skill set encompassing web, mobile, and desktop applications.
                Proficient in JavaScript, Python, and Java, Vipin excels in
                crafting innovative and high-quality solutions for diverse
                technological challenges.
              </p>
              <p className="py-7">
                Committed to staying current with industry trends, Vipin brings
                a collaborative spirit to cross-functional teams. Their
                effective communication and problem-solving abilities make them
                an asset to any project.
              </p>
              <p>
                Passionate about creating seamless, scalable, and cutting-edge
                applications, Vipin&apos;s track record goes beyond technical
                expertise. They demonstrate a dedication to turning concepts
                into reality in our rapidly evolving digital landscape.
              </p>
            </div>
          </div>

          <div className="sm:w-9/12 mx-auto ">
            <h3 className="font-medium text-2xl mt-16 text-gray-200">
              Top skills
            </h3>
            <div className="py-4 flex flex-wrap">
              <VariationAnimation content={skills} />
            </div>
          </div>
        </TextSlideAnimation>
      </InViewAnimation>
    </div>
  );
};

export default AboutPage;
