// Write a React Hook for useWindowSize that returns the window size
// and updates when the window is resized.  You can use the window
// object directly, but you'll need to use the useEffect hook to
// update the size when the window is resized.

import { useEffect, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}
