// components/InteractiveDot.tsx
import { useEffect, useState } from "react";

const InteractiveDot: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [pulsed, setPulsed] = useState(false);
  const [initialAnimationComplete, setInitialAnimationComplete] =
    useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleButtonEnter = () => {
      setHovered(true);
      setPulsed(false);
    };

    const handleButtonLeave = () => {
      setHovered(false);
    };

    const handleAnimation = () => {
      // Your animation logic here

      if (!initialAnimationComplete) {
        // Perform the initial left-to-right animation
        setPosition((prevPosition) => ({
          x: prevPosition.x + 1, // Adjust the speed of the animation by changing this value
          y: prevPosition.y,
        }));

        if (position.x >= window.innerWidth / 2) {
          setInitialAnimationComplete(true);
        }
      } else if (hovered) {
        // Check if the dot is close to the cursor position
        if (
          Math.abs(position.x - window.innerWidth / 2) < 10 &&
          Math.abs(position.y - window.innerHeight / 2) < 10
        ) {
          if (!pulsed) {
            setPulsed(true);
          }
        }
      }

      requestAnimationFrame(handleAnimation);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const button = document.querySelector(".button") as HTMLElement;
    if (button) {
      button.addEventListener("mouseenter", handleButtonEnter);
      button.addEventListener("mouseleave", handleButtonLeave);
    }

    handleAnimation(); // Start animation loop

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (button) {
        button.removeEventListener("mouseenter", handleButtonEnter);
        button.removeEventListener("mouseleave", handleButtonLeave);
      }
    };
  }, [position, hovered, pulsed, initialAnimationComplete]);

  return (
    <div
      className={`dot ${hovered ? "button-hover" : ""} ${
        pulsed ? "pulse" : ""
      }`}
      style={{
        left: position.x,
        top: position.y,
        background: "white", // Set the background color to white
        width: "20px", // Set the width and height for visibility
        height: "20px",
        position: "absolute",
        borderRadius: "50%", // Optional: Round the corners for a circular appearance
      }}
    ></div>
  );
};

export default InteractiveDot;
