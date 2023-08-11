import CustomService from "../../../Сustom components/CustomService";
import "./fourth_block.css";

function FourthBlockContentUp() {
  const fourthPageContentArrayObj = [
    {
      id: 1,
      title: "Клубная картана 1 месяц",
      listArray: [
        { id: 1, item: "— Безлимитный фитнес 24/7" },
        { id: 2, item: "— Тренировка с фитнес-коучем" },
        { id: 3, item: "— Пакет групповых тренировок" },
        { id: 4, item: "— 7 дней заморозки" },
      ],
      link: "Подробнее",
      url: "#",
    },
    {
      id: 2,
      title: "Клубная карта на 12 месяцев",
      listArray: [
        { id: 1, item: "— Безлимитный фитнес 24/7" },
        { id: 2, item: "— Тренировка с фитнес-коучем" },
        { id: 3, item: "— Пакет групповых тренировок" },
        { id: 4, item: "— 90 дней заморозки" },
      ],
      link: "Подробнее",
      url: "#",
    },
    {
      id: 3,
      title: "Клубная карта на 6 месяцев",
      listArray: [
        { id: 1, item: "— Безлимитный фитнес 24/7" },
        { id: 2, item: "— Тренировка с фитнес-коучем" },
        { id: 3, item: "— Пакет групповых тренировок" },
        { id: 4, item: "— 30 дней заморозки" },
      ],
      link: "Подробнее",
      url: "#",
    },
    {
      id: 4,
      title: "Гостевой визит",
      listArray: [
        {
          id: 1,
          item: "У вас есть возможность посетить 3 бесплатные тренировки",
        },
      ],
      link: "Подробнее",
      url: "#",
    },
  ];

  const fourthPageContentStyleObj = {
    customSubDivStyle: "fourth_page_service_cards",
    customSubSubDivStyle: "fourth_page_service_cards_item",
    customH4Style: "fourth_page_service_cards_title",
    customUlStyle: "fourth_page_service_cards_list",
    customAStyle: "fourth_page_service_cards_lincks",
  };

  return (
    <CustomService
      linkArray={fourthPageContentArrayObj}
      customClass={fourthPageContentStyleObj}
    />
  );
}

export default FourthBlockContentUp;