import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  description: string;
  link: string;
  image: any;
  key: string | number;
  className?: string;
  type: string;
};

const ProjectCardComponent: React.FC<Props> = ({
  name,
  description,
  key,
  image,
  link,
  className,
  type,
}) => {
  return (
    <div className="my-4">
      <div className="text-white mobile:w-[96%]">
        <div className="project-background px-3 sm:px-8 mx-auto  rounded-md grid grid-cols-2 mobile:grid-cols-1">
          <div className="ml-0 sm:ml-12 sm:py-16 mobile:pt-4">
            <span className="text-xs leading-none">{type}</span>
            <h1 className="text-3xl pb-3 font-semibold">{name}</h1>
            <p className="text-sm">{description}</p>
            <a href={link} target="_blank">
              <button className="uppercase border-2 py-3 px-4 border-gray mt-12 text-yellow-400 font-normal text-sm hover:border-yellow-400 hover:text-white delay-100 mobile:mt-4 mobile:w-full ">
                Visit Website
              </button>
            </a>
          </div>

          <div className="flex items-center justify-center mobile:my-4">
            <Image src={image} alt={name} height={400} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
