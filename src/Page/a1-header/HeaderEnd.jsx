import React, { useState, useEffect } from "react";
import HeaderBurger from "./HeaderBurgerMenu/HeaderBurger";
import HeaderDesktop from "./HeaderDesktop";

function HeaderEnd() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const hendleWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", hendleWidth);
    return () => window.removeEventListener("resize", hendleWidth);
  }, []);

  return <>{windowWidth <= 1080 ? <HeaderBurger /> : <HeaderDesktop />}</>;
}

export default HeaderEnd;
