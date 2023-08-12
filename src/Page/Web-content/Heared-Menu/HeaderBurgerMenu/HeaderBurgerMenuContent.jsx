import "./HeaderBurgerMenu.css";
import CustomList from "../../../../Сustom components/CustomList";
function HeaderBurgerMenuContent(props) {
  const { isVisible } = props;
  const HeaderNavLinks = [
    {
      id: 1,
      url: "#",
      link: "Клубы",
    },
    {
      id: 2,
      url: "#",
      link: "Абонементы",
    },
    {
      id: 3,
      url: "#",
      link: "Тренеры",
    },
    {
      id: 4,
      url: "#",
      link: "Тренировки",
    },
    {
      id: 5,
      url: "#",
      link: "Расписание",
    },
  ];

  const headerNavLinksBurgerStyle = {
    customUlStyle: "header_ul_Burger_linck_style",
    customLiStyle: "header_li_Burger_linck_style",
    customAStyle: "header_a_Burger_linck_style",
  };
  return (
    <div
      className={`${"header_div_Burger_linck_style"} ${
        isVisible ? "_modif" : ""
      }`}
    >
      <img
        className="header_Burger_Logo"
        src={
          process.env.PUBLIC_URL + "/image/headerNavLogo.png"
        }
      />
      <CustomList
        linkArray={HeaderNavLinks}
        customClass={headerNavLinksBurgerStyle}
      />
      
    </div>
  );
}
export default HeaderBurgerMenuContent;
