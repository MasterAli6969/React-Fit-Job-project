import React, { useState, useEffect } from "react";
import HeaderDesctopMenu from "./Header-Desktop-Menu/HeaderDesctopMenu";
import HeaderBurger from "./HeaderBurgerMenu/HeaderBurger";
import "./header_menu.css";
function HeaderMenu() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const hendleWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", hendleWidth);
    return () => window.removeEventListener("resize", hendleWidth);
  }, []);
  return (
    <div className="header_menu_conteiner">
      <div className="header_menu_conteiner_left">
        <img
          className="header_menu_logo"
          src={process.env.PUBLIC_URL + "/image/headerNavLogo.png"}
        />
      </div>
      <div className="header_menu_conteiner_Right">
      {windowWidth <= 1080 ? (<HeaderBurger />) : (<HeaderDesctopMenu />)}
      </div>
    </div>
  );
}

export default HeaderMenu;
