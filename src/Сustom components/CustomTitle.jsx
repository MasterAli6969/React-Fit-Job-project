import React from "react";

const CustomTitle = ({ textData, customClass = {} }) => (
  <>
    {textData.map((item) => (
      <div className={customClass.customDivStyle} key={item.id}>
        <div className={customClass.customTextConteiner} key={item.id}>
          {item.text.split(" ").map((word, wordIndex) => (
            <span
              className={
                item.coloredWords.includes(word)
                  ? customClass.customSpecialWord
                  : customClass.customWord
              }
              key={wordIndex}
            >
              {word}{" "}
            </span>
          ))}
        </div>
        <div>
          {item.button1 && (
            <button className={customClass.customButtonStyle1}>
              {item.button1}
            </button>
          )}
          {item.button2 && (
            <button className={customClass.customButtonStyle2}>
              {item.button2}
            </button>
          )}
        </div>
      </div>
    ))}
  </>
);

export default CustomTitle;
