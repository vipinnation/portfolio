import React from "react";

type Props = {};

const NavbarComponent = (props: Props) => {
  return (
    <div>
      <nav>
        <div className="container mx-auto flex justify-around items-center">
          <span className="text-2xl font-bold nav-logo">Vipin Meghwal</span>

          <div className="md:flex items-center space-x-4 py-3">
            <a
              href="#"
              className="hover:text-primary py-1 navlink"
            >
              Home
            </a>
            <a href="#about" className="hover:text-primary py-1 navlink">
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
