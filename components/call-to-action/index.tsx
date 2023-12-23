import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <div className="h-[100vh] py-8">
      <div className="text-white text-center">
        <h4 className="text-5xl sm:text-6xl">Contact Us</h4>
        <span className="text-sm mx-5">
          Connecting Dreams, Answering Inquiries – Reach Out, &nbsp;
          <br className="sm:hidden" />
          We&apos;re &nbsp; Here for You!
        </span>
      </div>
      <div className="flex flex-row mobile:flex-col">
        <div className="sm:w-9/12 mx-auto text-white">
          <div className="mx-auto  px-6 py-12 border-0 shadow-lg sm:rounded-3xl w-full">
            <form id="form" noValidate>
              <div className="flex">
                <div className="relative z-0 w-full mb-5">
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    required
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />
                  <label
                    htmlFor="name"
                    className="absolute duration-300 top-3 -z-1 origin-0"
                  >
                    Enter name
                  </label>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Name is required
                  </span>
                </div>

                <div className="relative z-0 w-full mb-5 ml-8">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    required
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />
                  <label
                    htmlFor="name"
                    className="absolute duration-300 top-3 -z-1 origin-0"
                  >
                    Enter email
                  </label>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Email is required
                  </span>
                </div>
              </div>

              <div className="relative z-0 w-full mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label
                  htmlFor="name"
                  className="absolute duration-300 top-3 -z-1 origin-0"
                >
                  Subject
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Subject is required
                </span>
              </div>
              <div className="relative z-0 w-full mb-5">
                <textarea
                  name="name"
                  value="Write your message here "
                  required
                  rows={8}
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label
                  htmlFor="name"
                  className="absolute duration-300 top-3 -z-1 origin-0"
                >
                  Message
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Message is required
                </span>
              </div>

              <button
                id="button"
                type="button"
                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-600 hover:bg-gray-400 hover:shadow-lg focus:outline-none"
              >
                Send your message
              </button>
            </form>
          </div>
        </div>

        <div className="sm:w-9/12 mx-auto text-white">
          <div className="mx-auto  px-6 py-24 border-0 shadow-lg sm:rounded-3xl w-full">
            <div>
              <p className="flex items-center">
                <span className="text-3xl">
                  <HiOutlineLocationMarker />
                </span>
                <span className="text-xl mx-4">Jodhpur, Rajasthan</span>
              </p>
              <p className="flex items-center mx-1 my-3">
                <span className="text-2xl">
                  <FaPhoneAlt />
                </span>
                <span className="text-xl mx-4">+91 9983809222</span>
              </p>
              <p className="flex items-center mx-1 my-2">
                <span className="text-2xl">
                  <IoMail />
                </span>
                <span className="text-xl mx-4">vipinnation@gmail.com</span>
              </p>
            </div>

            <hr className="my-8" />
            <div className="social-media-list flex items-center">
              <a href="https://www.github.com/vipinnation" target="_blank">
                <FaGithub className="icon-list text-5xl bg-black-900 py-2 rounded-full text-white hover:bg-white hover:text-black border-4 mx-1 hover:leading-loose delay-100 ease-in-out" />
              </a>
              <a href="https://www.linkedin/in/vipinnation" target="_blank">
                <FaLinkedin className="icon-list text-5xl bg-black-900 py-2 rounded-full text-white hover:bg-white hover:text-blue-600 border-4 mx-1 hover:leading-loose delay-100 ease-in-out" />
              </a>
              <a target="_blank" href="https://www.instagram.com/the_coldhand/">
                <FaInstagram className="icon-list text-5xl bg-black-900 py-2 rounded-full text-white hover:bg-white hover:text-red-500 border-4 mx-1 hover:leading-loose delay-100 ease-in-out" />
              </a>
              <a target="_blank" href="https://twitter.com/vipinnation">
                <FaXTwitter className="icon-list text-5xl bg-black-900 py-2 rounded-full text-white hover:bg-white hover:text-indigo-600 border-4 mx-1 hover:leading-loose delay-100 ease-in-out" />
              </a>
              <a target="_blank" href="https://medium.com/@vipinnation/">
                <FaMedium className="icon-list text-5xl bg-black-900 py-2 rounded-full text-white hover:bg-white hover:text-black border-4 mx-1 hover:leading-loose delay-100 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
