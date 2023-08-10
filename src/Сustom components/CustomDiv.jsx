function CustomDiv(props) {
  const { divArray, customClass = {} } = props;
  return (
    <>
      {divArray.map((component) => (
        <div
          className={`${customClass.customDivStyleConteiner} ${customClass.additionalivStyleConteiner}`}
          key={component.id}
        >
          <>
            <div
              className={`${customClass.customDivStyleSubConteinerLeft} ${customClass.additionalDivStyleSubConteinerLeft}`}
            >
              {component.componentOne}
            </div>
            <div
              className={`${customClass.customDivStyleSubConteinerRight} ${customClass.additionalClassDivStyleSubConteinerRight}`}
            >
              {component.componentTwo}
            </div>
          </>
        </div>
      ))}
    </>
  );
}
export default CustomDiv;
