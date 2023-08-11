import CustomList from "../../../../Сustom components/CustomList";
function HeaderDesktopMenu() {
  const HeaderDesctopMenuArrayObj = [
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
    {
      id: 6,
      link: null,
      customDiv: {
        image: process.env.PUBLIC_URL + "/image/иконка человек хедер.png",
        button: "Войти",
        text: "Санкт-Петербург",
      },
    },
  ];
  const HeaderDesctopMenuStyleObj = {
    customUlStyle: "header_menu_div",
    customLiStyle: "header_menu_div_links",
    customAStyle: "header_menu_links",
    customPStyle: "header_menu_text",
    customSubDivStyle: "header_menu_sub_div",
    customImgStyle: "header_menu_icon",
    customButtonStyle: "header_menu_button",
  };
  return (
    <CustomList
      linkArray={HeaderDesctopMenuArrayObj}
      customClass={HeaderDesctopMenuStyleObj}
    />
  );
}

export default HeaderDesktopMenu;
