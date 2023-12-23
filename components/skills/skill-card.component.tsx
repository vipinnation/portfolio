import Image from "next/image";
import React from "react";

type Props = {
  name: String;
  rating: Number;
  icon: any;
};

const SkillCardComponent: React.FC<Props> = ({ name, rating, icon }) => {
  return (
    <div>
      <span className="bg-tranparent mx-4">
        <Image src={icon} alt={name as string} />
      </span>
      {/* <div className="flex items-center py-3">
        <span className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 text-yellow-600 flex items-center justify-center">
          <Image src={icon} alt={name as string} />
        </span>
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <h4 className="text-sm font-bold mr-auto text-gray-700 flex items-center">
              {name}
            </h4>
            <span className="px-2 py-1 rounded-lg bg-green-50 text-green-500 text-xs font-semibold">
              <> {rating} / 10</>
            </span>
          </div>
          <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
            <span
              className={`h-full bg-blue-500 w-full block rounded-full w-[${
                Number(rating) * 10
              }]`}
            ></span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SkillCardComponent;
