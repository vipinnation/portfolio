// import Image from "next/image";
// import React from "react";
// import EdureonProject from "../../assets/images/edureon-project.png";
// type Props = {};

// const TestPage = (props: Props) => {
//   return (
//     <div className="bg-white py-16">
//       <div className="text-white w-9/12 mx-auto mobile:w-[96%]">
//         <div className="project-background px-8 mx-auto  rounded-md grid grid-cols-2 mobile:grid-cols-1">
//           <div className="ml-0 sm:ml-12 sm:py-16 mobile:pt-4">
//             <span className="text-sm leading-none">Sub Title</span>
//             <h1 className="text-3xl py-3 font-semibold">
//               Main Title Lorem ipsum dolor sit amet consectetur adipisicing
//               elit.
//             </h1>
//             <p className="text-sm">
//               Description: Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. Mollitia tempora ut totam aut perspiciatis quod quisquam
//               eveniet asperiores officiis, assumenda, at, reiciendis vero?
//             </p>

//             <button className="uppercase border-2 py-3 px-4 border-gray mt-12 text-yellow-400 font-normal text-sm hover:border-yellow-400 hover:text-white delay-100 mobile:mt-4 ">
//               Visit Website
//             </button>
//           </div>

//           <div className="flex items-center justify-center">
//             <Image
//               src={EdureonProject}
//               alt="Project Image"
//               height={400}
//               width={400}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestPage;

// src/components/MotionComponent.js
"use client";
import { AnimatePresence, motion } from "framer-motion";

const TestPage = () => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={"empty"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Home
      </motion.div>
    </AnimatePresence>
  );
};

export default TestPage;
