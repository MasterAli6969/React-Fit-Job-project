function CustomService(props) {
  const { linkArray = [], customClass = {} } = props;
  return (
    <div className={`${customClass.customDivStyle}`}>
      <div
        className={`${customClass.customSubDivStyle} ${customClass.customAddUlStyle}`}
      >
        {linkArray.map((link) => (
          <div className={` ${customClass.customSubSubDivStyle}`} key={link.id}>
            <h4 className={` ${customClass.customH4Style}`}>{link.title}</h4>
            {link.listArray && (
              <ul className={` ${customClass.customUlStyle}`}>
                {link.listArray.map((listItem, index) => (
                  <li className={` ${customClass.customLiStyle}`} key={index}>
                    {listItem.item}
                  </li>
                ))}
              </ul>
            )}
            <p className={` ${customClass.customPStyle}`}> {link.text}</p>
            <a className={` ${customClass.customAStyle}`} href={link.url}>
              {link.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CustomService;
