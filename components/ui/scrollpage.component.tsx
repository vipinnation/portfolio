import { useEffect, useRef } from "react";
import { scroller } from "react-scroll";

interface ScrollToSectionProps {
  targetRef: React.RefObject<HTMLElement>;
  smooth?: boolean;
  duration?: number;
}

const ScrollToSection: React.FC<ScrollToSectionProps> = ({
  targetRef,
  smooth = true,
  duration = 500,
}) => {
  useEffect(() => {
    if (targetRef.current) {
      const scrollOptions = {
        smooth,
        duration,
        offset: -targetRef.current.offsetTop, // Use negative offset to scroll to the target position
      };

      scroller.scrollTo(targetRef.current.id, scrollOptions);
    }
  }, [targetRef, smooth, duration]);

  return null;
};

export default ScrollToSection;
