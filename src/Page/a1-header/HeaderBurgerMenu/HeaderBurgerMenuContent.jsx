import "./HeaderBurgerMenu.css";
import CustomList from "../../../Сustom components/CustomList";
function HeaderBurgerMenuContent(props) {
  const { isVisible } = props;
  const HeaderNavLinks = [
    {
      url: "#",
      link: "О компании",
    },
    {
      url: "#",
      link: "Проекты",
    },
    {
      url: "#",
      link: "Услуги",
    },
    {
      url: "#",
      link: "Образование",
    },
    {
      url: "#",
      link: "Отзывы",
    },
    {
      url: "#",
      link: "Контакты",
    },
  ];

  const IconLinksSocialWebArray = [
    {
      id: "0",
      url: "#",
      text: "+7 926 996 14 55",
    },
    {
      id: "1",
      url: "#",
      image:
        process.env.PUBLIC_URL +
        "/image/img_Header_and_Block1/иконка почты.png",
    },
    {
      id: "2",
      url: "#",
      image:
        process.env.PUBLIC_URL +
        "/image/img_Header_and_Block1/иконка звонка.png",
    },
    {
      id: "3",
      url: "#",
      image:
        process.env.PUBLIC_URL +
        "/image/img_Header_and_Block1/иконка телеги.png",
    },
  ];
  const headerNavLinksBurgerStyle = {
    customUlStyle: "header_ul_Burger_linck_style",
    customLiStyle: "header_li_Burger_linck_style",
    customAStyle: "header_a_Burger_linck_style",
  };

  const iconLinksSocialWebBurgerStyle = {
    customUlStyle: "header_ul_number_icon_style",
    customLiStyle: "header_burger_li_number_icon_style",
    customPStyle: "header_number_style",
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
          process.env.PUBLIC_URL + "/image/img_Header_and_Block1/ЛогоБургер.png"
        }
      />
      <CustomList
        linkArray={HeaderNavLinks}
        customClass={headerNavLinksBurgerStyle}
      />
      <div className="header_div_Burger_IconNumbe_linck">
        <CustomList
          linkArray={IconLinksSocialWebArray}
          customClass={iconLinksSocialWebBurgerStyle}
        />
      </div>
    </div>
  );
}
export default HeaderBurgerMenuContent;
