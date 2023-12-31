import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import axios from "axios";

type Props = {};

const CallToAction = (props: Props) => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("Write your message here");
  const [response, setResponse] = useState({
    isError: false,
    message: "",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const submitHandler = async (data: any) => {
    try {
      setIsLoading((_prev) => true);
      let res = await axios.post(
        "https://portfolio-9qwy.onrender.com/request",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponse({
        isError: false,
        message:
          "Your request has been sent successfully. Our representative will contact you shortly",
      });
      setIsDisplay((_prev) => true);
      removeResponseMessage();
      reset();
      setMessage((_prev) => "Write your message here");
      setIsLoading((_prev) => false);
    } catch (error) {
      setIsLoading((_prev) => false);
      console.log(error);
      setIsDisplay((_prev) => true);
      setResponse({
        isError: true,
        message: "Something went wrong, Please try again",
      });
      removeResponseMessage();
      reset();
      setMessage((_prev) => "Write your message here");
    }
  };

  const removeResponseMessage = () => {
    try {
      let timout = setTimeout(() => {
        setIsDisplay((_prev) => false);
        clearTimeout(timout);
      }, 3000);
    } catch (error) {}
  };

  return (
    <div className="mobile:h-[120vh] h[100vh] py-8">
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
            <form id="form" noValidate onSubmit={handleSubmit(submitHandler)}>
              {isDisplay == true ? (
                <div
                  className={`w-full text-white px-3 rounded-md text-lg  mb-4 ${
                    response.isError == true ? "bg-yellow-500 " : "bg-green-400"
                  }`}
                >
                  <span>{response.message}</span>
                </div>
              ) : null}
              <div className="flex">
                <div className="relative z-0 w-full mb-5">
                  <input
                    type="text"
                    placeholder=" "
                    {...register("name", { required: "Name is required" })}
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />
                  <label
                    htmlFor="name"
                    className="absolute duration-300 top-3 -z-1 origin-0"
                  >
                    Enter name
                  </label>
                  {errors.name ? (
                    <span className="text-sm text-red-600" id="error">
                      {errors.name.message as any}
                    </span>
                  ) : null}
                </div>

                <div className="relative z-0 w-full mb-5 ml-8">
                  <input
                    type="email"
                    placeholder=" "
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />
                  <label
                    htmlFor="email"
                    className="absolute duration-300 top-3 -z-1 origin-0"
                  >
                    Enter email
                  </label>
                  {errors.email ? (
                    <span className="text-sm text-red-600" id="error">
                      {errors.email.message as any}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="relative z-0 w-full mb-5">
                <input
                  type="text"
                  placeholder=" "
                  {...register("subject", { required: "Subject is required" })}
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label
                  htmlFor="subject"
                  className="absolute duration-300 top-3 -z-1 origin-0"
                >
                  Subject
                </label>
                {errors.subject ? (
                  <span className="text-sm text-red-600" id="error">
                    {errors.subject.message as any}
                  </span>
                ) : null}
              </div>
              <div className="relative z-0 w-full mb-5">
                <textarea
                  value={message}
                  {...register("message", { required: "Message is required" })}
                  rows={8}
                  onChange={(e) => {
                    setValue("message", e.target.value);
                    setMessage(e.target.value);
                  }}
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label
                  htmlFor="message"
                  className="absolute duration-300 top-3 -z-1 origin-0"
                >
                  Message
                </label>
                {errors.message ? (
                  <span className="text-sm text-red-600" id="error">
                    {errors.message.message as any}
                  </span>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-600 hover:bg-gray-400 hover:shadow-lg focus:outline-none flex items-center justify-center"
              >
                {isLoading == true ? (
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        values="1 40;90 40;90 40"
                        keyTimes="0; 0.5; 1"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                ) : null}
                <span className="mx-2"> Send your message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="sm:w-9/12 mx-auto text-white ">
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
