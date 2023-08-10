import "./HeaderBurgerMenu.css";
function BurgerIcon(props) {
  const { onClick, addIconLock } = props;
  return (
    <div className="burger_div_icon_conteiner">
      <img
      className="burger_logo"
        src={process.env.PUBLIC_URL + "/image/img_Header_and_Block1/лого.png"}
      />
      <div
        onClick={onClick}
        className={`burger_icon_conteiner ${addIconLock ? "_lockIcon" : ""}`}
      >
        <div className="burger_icon" />
      </div>
    </div>
  );
}
export default BurgerIcon;
