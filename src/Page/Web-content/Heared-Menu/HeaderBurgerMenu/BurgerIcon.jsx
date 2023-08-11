import "./HeaderBurgerMenu.css";
function BurgerIcon(props) {
  const { onClick, addIconLock } = props;
  return (
    <div className="burger_div_icon_conteiner">
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
