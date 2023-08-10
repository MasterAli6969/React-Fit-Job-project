import React from "react";

const CustomTitle = (props) => {
  const { textData, customClass, coloredWords } = props;
  return (
    <>
      {textData.map((item) => (
        <div className={`${customClass.customDivStyle}`}>
          <p className={`${customClass.customText}`} key={item.id}>
            {item.text.split(" ").map((word, wordIndex) =>
              coloredWords.includes(word) ? (
                <span
                  className={`${customClass.customSpecialWord}`}
                  key={wordIndex}
                >
                  {word}{" "}
                </span>
              ) : (
                <span className={`${customClass.customWord}`} key={wordIndex}>
                  {word}{" "}
                </span>
              )
            )}
          </p>
          <button className={`${customClass.customButtonStyle}`}></button>
        </div>
      ))}
    </>
  );
};

export default CustomTitle;
