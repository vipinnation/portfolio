"use client";
import { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import AboutPage from "./about/page";
import ServicePage from "./services/page";
import CallToAction from "@/components/call-to-action";

type IRedirectJSX = {
  link: string;
  className: string;
  icon: any;
};

export default function Home() {
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
      link: "",
      className: "hover:text-indigo-600",
      icon: <FaFacebookF />,
    },
    {
      link: "",
      className: "hover:text-blue-400",
      icon: <FaTwitter />,
    },
    {
      link: "",
      className: "hover:text-blue-800",
      icon: <FaLinkedin />,
    },
    {
      link: "",
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
            {icon}
          </span>
        </a>
      </>
    );
  };
  return (
    <div>
      <div className="flex items-center justify-center text-center h-[100vh] text-white">
        <div>
          <h3 className="text-2xl font-semibold">Welcome !</h3>
          <div className="header-text-container">
            <span>I am </span>
            <span id="text"></span>
            <span className="underscore-sign" id="console">
              &#95;
            </span>
          </div>
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
              <RedirectJSX
                key={i}
                link={item.link}
                icon={item.icon}
                className={item.className}
              />
            ))}
          </div>
        </div>
      </div>

      <AboutPage />

      <CallToAction />
    </div>
  );
}
