import React, { createContext, useState, useEffect } from "react";

const ScrollContext = createContext();

const ScrollContextProvider = ({ children }) => {
  const [profile, setProfile] = useState("");
  const [scrollPosition, setScrollPosition] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [windowSize, setWindowSize] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setPrevScrollPosition(scrollPosition);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    const windowSize = window.innerWidth;
    setWindowSize(windowSize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, prevScrollPosition, windowSize]);

  const scrollDirection =
    scrollPosition > prevScrollPosition && scrollPosition > 700
      ? false
      : scrollPosition < prevScrollPosition && scrollPosition > 700
      ? false
      : scrollPosition > prevScrollPosition &&
        scrollPosition >= 450 &&
        windowSize < 1200
      ? false
      : true;

  const scrolls = { scrollDirection, scrollPosition, setProfile, profile };

  return (
    <ScrollContext.Provider value={scrolls}>{children}</ScrollContext.Provider>
  );
};

export { ScrollContext, ScrollContextProvider };
