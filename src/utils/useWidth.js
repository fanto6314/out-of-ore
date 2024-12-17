import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Check if we're running on the client-side
    if (typeof window !== "undefined") {
      const handleResize = () => setWidth(window.innerWidth);

      // Set the initial width
      setWidth(window.innerWidth);

      // Attach the event listener
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return width;
};

export { useWindowWidth };