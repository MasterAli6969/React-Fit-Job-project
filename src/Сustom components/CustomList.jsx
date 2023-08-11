function CustomList(props) {
  const { linkArray, customClass } = props;
  return (
    <ul
      className={`${customClass.customUlStyle} ${customClass.customAddUlStyle}`}
    >
      {linkArray.map((item) => {
        if (item) {
          return (
            <>
              <li className={` ${customClass.customLiStyle}`} key={item.id}>
                <a className={` ${customClass.customAStyle}`} href={item.url}>
                  {item.link}
                </a>
              </li>
              {item.customDiv && (
                <div className={` ${customClass.customSubDivStyle}`}>
                  <img
                    className={`${customClass.customImgStyle}`}
                    src={item.customDiv.image}
                  />
                  <button className={` ${customClass.customButtonStyle}`}>
                    {item.customDiv.button}
                  </button>
                  <p className={` ${customClass.customPStyle}`}>
                    {" "}
                    {item.customDiv.text}
                  </p>
                </div>
              )}
            </>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
}
export default CustomList;
