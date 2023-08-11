import "./third_page.css";
function ThirdPage() {
  return (
    <div className="third_page_global_conteiner">
      <div className="third_page_sub_global_conteiner">
        <h1 className="third_block_sub_big_title">
          ПРЕДЛОЖЕНИЕ
          <span className="red_text"> МЕСЯЦА </span>В ФИТНЕС-КЛУБАХ
          <span className="red_text"> FITJOB </span>
        </h1>
      
      <div className="third_block_sub_conteiner_title_small">
        <p className="third_block_sub_small_title">
          У вас есть возможность посетить{" "}
          <span className="red_text">3 бесплатные</span> тренировки
        </p>
        <button className="third_block_button">Купить абонимент</button>
      </div>
    </div>
    </div>
    
  );
}
export default ThirdPage;
