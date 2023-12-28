"use client";
import { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaArrowDown,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import AboutPage from "./about/page";
import CallToAction from "@/components/call-to-action";
import MyProjects from "@/components/my-projects";
import { IoCloseSharp } from "react-icons/io5";
import TextSlideAnimation from "@/components/animation/text-slide.animation";
import RotateAnimation from "@/components/animation/rotate.animation";
import PresenceAnimation from "@/components/animation/presence.animation";
import useMenuAnimation from "@/components/animation/animate.animation";

type IRedirectJSX = {
  link: string;
  className: string;
  icon: any;
};

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const aboutPageRef = useRef<HTMLDivElement | any>(null);
  const homePageRef = useRef<HTMLDivElement | any>(null);
  const myProjectPageRef = useRef<HTMLDivElement | any>(null);
  const callToActionPageRef = useRef<HTMLDivElement | any>(null);

  const scope = useMenuAnimation(isNavOpen);

  useEffect(() => {
    loadTexts(["Developer", "Designer", "Vipin Meghwal"], "text", [
      "tomato",
      "rebeccapurple",
      "lightblue",
    ]);
  }, []);

  const loadTexts = (words: any, id: any, colors: any) => {
    try {
      if (colors === undefined) colors = ["#fff"];
      var visible = true;
      var con: any = document.getElementById("console");
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target: any = document.getElementById(id);
      target.setAttribute("style", "color:" + colors[0]);
      window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(function () {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute("style", "color:" + colors[0]);
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function () {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);
      window.setInterval(function () {
        if (visible === true) {
          con.className = "console-underscore hidden";
          visible = false;
        } else {
          con.className = "console-underscore";

          visible = true;
        }
      }, 400);
    } catch (error) {}
  };

  let socialIcons = [
    {
      link: "https://www.facebook.com/vipinnation/",
      className: "hover:text-indigo-600",
      icon: <FaFacebookF />,
    },
    {
      link: "https://twitter.com/vipinnation",
      className: "hover:text-blue-400",
      icon: <FaXTwitter />,
    },
    {
      link: "https://www.linkedin.com/in/vipinnation",
      className: "hover:text-blue-800",
      icon: <FaLinkedin />,
    },
    {
      link: "https://www.instagram.com/the_coldhand/",
      className: " hover:text-red-400 ",
      icon: <FaInstagram />,
    },
    {
      link: "https://www.github.com/vipinnation",
      className: "hover:text-red-400",
      icon: <FaGithub />,
    },
  ];

  const RedirectJSX: React.FC<IRedirectJSX> = ({ link, className, icon }) => {
    return (
      <>
        <a href={link} target="_blank" className="mx-2">
          <span
            className={`pl-4 text-2xl mx-2 font-semibold hover:scale-125 ease-in duration-100 ${className}`}
          >
            <RotateAnimation> {icon}</RotateAnimation>
          </span>
        </a>
      </>
    );
  };

  return (
    <div>
      <TextSlideAnimation>
        <div>
          <nav className={`${isNavOpen == true ? "fixed" : ""}`}>
            <div className="container mx-auto flex justify-around items-center ">
              <span className="text-2xl font-bold nav-logo py-4 md:py-0">
                Vipin Meghwal
              </span>

              <button
                id="toggle-menu-button"
                className="z-50 md:hidden relative"
                onClick={(e) => {
                  setIsNavOpen((_prev) => true);
                }}
              >
                <span className="sr-only">Toggle Menu</span>
                <div
                  id="open"
                  className="h-7 flex flex-col items-end justify-between"
                >
                  <span className="block h-0.5 w-8 bg-red-900 rounded-full"></span>
                  <span className="block h-0.5 w-6 bg-red-900 rounded-full"></span>
                  <span className="block h-0.5 w-8 bg-red-900 rounded-full"></span>
                </div>
                <div
                  id="close"
                  className="hidden h-7 flex flex-col items-end justify-between"
                >
                  <span className="block h-0.5 w-8  rounded-full origin-left transform rotate-45 translate-y-0.5"></span>
                  <span className="block h-0.5 w-8  rounded-full origin-left transform -rotate-45 -translate-y-0.5"></span>
                </div>
              </button>

              <div className="mobile:hidden md:flex items-center space-x-4 py-3">
                <span
                  className="hover:text-primary py-1 navlink font-semibold cursor-pointer"
                  onClick={() => homePageRef.current.scrollIntoView()}
                >
                  Home
                </span>
                <span
                  className="hover:text-primary py-1 navlink font-semibold cursor-pointer"
                  onClick={() => aboutPageRef.current.scrollIntoView()}
                >
                  About
                </span>
                <span
                  className="hover:text-primary py-1 navlink font-semibold cursor-pointer"
                  onClick={() => myProjectPageRef.current.scrollIntoView()}
                >
                  Projects
                </span>
                <span
                  className="hover:text-primary py-1 navlink font-semibold cursor-pointer"
                  onClick={() => aboutPageRef.current.scrollIntoView()}
                >
                  Skills
                </span>
                <span
                  className="hover:text-primary py-1 navlink font-semibold cursor-pointer"
                  onClick={() => callToActionPageRef.current.scrollIntoView()}
                >
                  Contact
                </span>
              </div>
            </div>
          </nav>
          <div ref={scope}>
            {isNavOpen == true ? (
              <div className="nav-screen text-white">
                <span className="text-white text-5xl">
                  <IoCloseSharp
                    onClick={() => {
                      setIsNavOpen((_prev) => false);
                    }}
                  />
                </span>
                <div className="nav-container">
                  <div className="nav-links">
                    <div id="myMenu">
                      <p
                        className="text-4xl font-semibold my-4 hover:text-red-400 delay-100 uppercase cursor-pointer"
                        onClick={() => {
                          setIsNavOpen((_prev) => false);
                          homePageRef.current.scrollIntoView();
                        }}
                      >
                        home
                      </p>
                      <p
                        className="text-4xl font-semibold my-4 hover:text-red-400 delay-100 uppercase cursor-pointer"
                        onClick={() => {
                          setIsNavOpen((_prev) => false);
                          aboutPageRef.current.scrollIntoView();
                        }}
                      >
                        about
                      </p>
                      <p
                        className="text-4xl font-semibold my-4 hover:text-red-400 delay-100 uppercase cursor-pointer"
                        onClick={() => {
                          setIsNavOpen((_prev) => false);
                          myProjectPageRef.current.scrollIntoView();
                        }}
                      >
                        Projects
                      </p>
                      <p
                        className="text-4xl font-semibold my-4 hover:text-red-400 delay-100 uppercase cursor-pointer"
                        onClick={() => {
                          setIsNavOpen((_prev) => false);
                          aboutPageRef.current.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}
                      >
                        Skills
                      </p>
                      <p
                        className="text-4xl font-semibold my-4 hover:text-red-400 delay-100 uppercase cursor-pointer"
                        onClick={() => {
                          setIsNavOpen((_prev) => false);
                          callToActionPageRef.current.scrollIntoView();
                        }}
                      >
                        Contact
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div
          className="flex items-center justify-center text-center h-[100vh] text-white"
          ref={homePageRef}
        >
          <div>
            <h3 className="text-2xl font-semibold">Welcome !</h3>
            <div className="mobile:text-md header-text-container">
              <span>I am </span>
              <span id="text"></span>
              <span className="underscore-sign" id="console">
                &#95;
              </span>
            </div>

            <PresenceAnimation duration={3}>
              <div className="flex items-center justify-center pt-2 uppercase">
                <span>Designer</span>
                <span className="mx-1">
                  <GoDotFill />
                </span>
                <span>Developer</span>
                <span className="mx-1">
                  <GoDotFill />
                </span>
                <span>Gamer</span>
              </div>

              <div className="flex justify-center items-top">
                {socialIcons.map((item, i) => (
                  <>
                    <RedirectJSX
                      key={i}
                      link={item.link}
                      icon={item.icon}
                      className={item.className}
                    />
                  </>
                ))}
              </div>
            </PresenceAnimation>
            <div className="flex items-center justify-center">
              <div className="bouncing-arrow border-4 rounded-full p-4 mt-32 opacity-50 ">
                <FaArrowDown className="relative bottom-2 right-2 " />
              </div>
            </div>
          </div>
        </div>
      </TextSlideAnimation>

      <div ref={aboutPageRef}>
        <AboutPage />
      </div>

      <div ref={myProjectPageRef}>
        <MyProjects />
      </div>

      <div ref={callToActionPageRef}>
        <CallToAction />
      </div>
    </div>
  );
}
