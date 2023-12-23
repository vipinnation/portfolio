import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  description: string;
  link: string;
  image: any;
  key: string | number;
};

const ProjectCardComponent: React.FC<Props> = ({
  name,
  description,
  key,
  image,
  link,
}) => {
  return (
    <div key={key} className="py-8 sm:py-0">
      <div className="relative flex sm:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <Image src={image} alt={name} />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            <a href={link} target="_blank">
              {name}
            </a>
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
