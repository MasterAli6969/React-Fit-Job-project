function CustomList(props) {
  const { linkArray, customClass } = props;
  return (
    <div className={`${customClass.customDivStyle}`}>
      <ul
        className={`${customClass.customUlStyle} ${customClass.customAddUlStyle}`}
      >
        {linkArray.map((link) => {
          return (
            <li className={` ${customClass.customLiStyle}`} key={link.id}>
              <h4 className={` ${customClass.customH4Style}`}></h4>
              <p className={` ${customClass.customPStyle}`}> {link.text}</p>
              <a className={` ${customClass.customAStyle}`} href={link.url}>
                {link.link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default CustomList;
