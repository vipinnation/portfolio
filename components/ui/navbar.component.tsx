"use client";
import React from "react";
import ScrollToSection from "./scrollpage.component";

type Props = {};

const NavbarComponent = (props: Props) => {
  const scrollPage = () => {
    try {
      window.scrollBy(0, window.innerHeight);
    } catch (error) {}
  };
  return (
    <div>
      <nav>
        <div className="container mx-auto flex justify-around items-center">
          <span className="text-2xl font-bold nav-logo text-lg">Vipin Meghwal</span>

          <div className="md:flex items-center space-x-4 py-3 hidden">
            <a href="#" className="hover:text-primary py-1 navlink">
              Home
            </a>
            <a
              href="#about"
              className="hover:text-primary py-1 navlink"
              onClick={(e) => {}}
            >
              About
            </a>
            <a href="#projects" className="hover:text-primary py-1 navlink">
              Projects
            </a>
            <a href="#skills" className="hover:text-primary py-1 navlink">
              Skills
            </a>
            <a href="#contact" className="hover:text-primary py-1 navlink">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
