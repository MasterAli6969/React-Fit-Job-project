import HeaderMenu from "../Heared-Menu/HeaderMenu";
import FirstBlockContent from "./FirstBlockContent";
import "./first_block.css";
function FirstBlock() {
  return (
    <div className="firstBlock_conteiner">
      <HeaderMenu />
      <FirstBlockContent/>
    </div>
  );
}

export default FirstBlock;
