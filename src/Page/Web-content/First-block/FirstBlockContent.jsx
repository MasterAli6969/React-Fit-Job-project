import "./first_block.css";
function FirstBlockContent() {
  return (
    <div className="first_block_sub_conteiner">
      <div className="first_block_sub_conteiner_title">
        <h1 className="first_block_sub_big_title">
          <span className="red_text">FITJOB</span> ФИТНЕС-КЛУБЫ{" "}
          <span className="red_text">ПРЕМИУМ КЛАССА</span> В САНКТ-ПЕТЕРБУРГЕ
        </h1>
        <p className="first_block_sub_small_title">
          У вас есть возможность посетить{" "}
          <span className="red_text">3 бесплатные</span> тренировки
        </p>
        <button className="first_block_button_1">
          Бесплатная консультация
        </button>
        <button className="first_block_button_2">Стать клиентом</button>
      </div>
      <img className="first_block_img_fit" src="" />
    </div>
  );
}

export default FirstBlockContent;
