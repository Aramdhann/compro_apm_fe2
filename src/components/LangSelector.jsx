import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import id_lang from "../assets/id_icon.png";
import en_lang from "../assets/en_icon.png";
import id_lang_gray from "../assets/id_icon_gray.png";
import en_lang_gray from "../assets/en_icon_gray.png";
import gap from "../assets/gap.svg";

const LangSelector = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("id");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <>
      <a
        href="#"
        onClick={() => changeLanguage("id")}
        className={currentLanguage === "id" ? "active" : ""}
      >
        <img
          src={currentLanguage === "id" ? id_lang : id_lang_gray}
          alt="bahasa indonesia"
          className="w-6 md:w-8"
        />
      </a>
      <img src={gap} alt="gap" className="h-4 md:h-6" />
      <a
        href="#"
        onClick={() => changeLanguage("en")}
        className={currentLanguage === "en" ? "active" : ""}
      >
        <img
          src={currentLanguage === "en" ? en_lang : en_lang_gray}
          alt="bahasa inggris"
          className="w-6 md:w-8"
        />
      </a>
    </>
  );
};

export default LangSelector;
