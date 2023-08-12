import CustomService from "../../../Сustom components/CustomService";
import "./second_page.css";
function SecondPageContent() {
  const secondPageContentArrayObj = [
    {
      id: 1,
      title: "Персональный тренинг",
      link: "Подробнее",
      url: "#",
      backgroundClass: "second_page_service_cards_img1",
    },
    {
      id: 1,
      title: "Тренажерный зал",
      link: "Подробнее",
      url: "#",
      backgroundClass: "second_page_service_cards_img2",
    },
    {
      id: 1,
      title: "Бассейн и спа зона",
      link: "Подробнее",
      url: "#",
      backgroundClass: "second_page_service_cards_img3",
    },
    {
      id: 1,
      title: "Групповые занятия",
      link: "Подробнее",
      url: "#",
      backgroundClass: "second_page_service_cards_img4",
    },
  ];

  const secondPageContentStyleObj = {
    customSubDivStyle: "second_page_service_cards",
    customSubSubDivStyle: "second_page_service_cards_item",
    customH4Style: "second_page_service_cards_title",
    customAStyle: "second_page_service_cards_lincks",
  };

  return (
    <CustomService
      linkArray={secondPageContentArrayObj}
      customClass={secondPageContentStyleObj}
    />
  );
}
export default SecondPageContent;
