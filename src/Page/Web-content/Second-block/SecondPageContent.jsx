import CustomService from "../../../Сustom components/CustomService";
function SecondPageContent() {
  const secondPageContentArrayObj = [
    {
      id: 1,
      title: "Персональный тренинг",
      link: "Подробнее",
      url: "#",
    },
    {
      id: 1,
      title: "Тренажерный зал",
      link: "Подробнее",
      url: "#",
    },
    {
      id: 1,
      title: "Бассейн и спа зона",
      link: "Подробнее",
      url: "#",
    },
    {
      id: 1,
      title: "Групповые занятия",
      link: "Подробнее",
      url: "#",
    },
  ];

  const secondPageContentStyleObj = {
    customUlStyle: "second_page_service_cards",
    customLiStyle: "second_page_service_cards_item",
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
