import "./fourth_block.css";
function FourthBlockFooterForm() {
  return (
    <div className="fourth_block_footer_form_coneiner">
      <h1 className="fourth_block_footer_form_title">
        Желаете узнать подробнее, оставьте заявку и мы вам перезвоним
      </h1>
      <div>
        <input
          className="fourth_block_footer_form_input"
          type="text"
          placeholder="Имя"
        />
        <input
          className="fourth_block_footer_form_input"
          type="tel"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          placeholder="+7"
          required
        ></input>
      </div>

      <br />
      <div>
        <input
          className="fourth_block_footer_form_checkbox"
          type="checkbox"
          name="subscribe"
          value="yes"
        />{" "}
        <label
          className="fourth_block_footer_form_label_checkbox"
          for="subscribe"
        >
          Согласие на обработку персональных данных
        </label>
      </div>
      <br />
      <button className="fourth_block_footer_form_button">Позвонить</button>
      <p className="fourth_block_footer_form_text_1">
        Или просто позвоните нам:
      </p>
      <p className="fourth_block_footer_form_text_2">+7 (911) 775-89-23</p>
    </div>
  );
}
export default FourthBlockFooterForm;
