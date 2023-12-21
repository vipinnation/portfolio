import React from "react";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <div className="h-[100vh] py-8">
      <div className="text-white text-center">
        <h4 className="text-6xl">Contact Us</h4>
        <span className="text-sm">
          Connecting Dreams, Answering Inquiries – Reach Out, We &apos; re Here for
          You!
        </span>
      </div>
      <div className="w-9/12 mx-auto text-white">
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
    </div>
  );
};

export default CallToAction;
