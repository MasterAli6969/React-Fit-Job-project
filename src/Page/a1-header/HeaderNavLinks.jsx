import "./Header.css";
import CustomList from "../../Сustom components/CustomList";
function HeaderNavLinks() {
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
      url: "/second",
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
  const headerNavLinksStyle = {
    customUlStyle: "header_ul_linck_style",
    customLiStyle: "header_li_linck_style",
    customAStyle: "header_a_linck_style",
  };
  return (
    <CustomList linkArray={HeaderNavLinks} customClass={headerNavLinksStyle} />
  );
}
export default HeaderNavLinks;
