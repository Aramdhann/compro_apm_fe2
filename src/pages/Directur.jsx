import React, { useEffect } from "react";
import logo_cashcepat from "../assets/logo_cashcepat.svg";
import { useTranslation } from "react-i18next";
import LangSelector from "../components/LangSelector";
import Directur from "../components/Directur";

const Director = () => {
  const { t } = useTranslation();

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="sticky top-0 py-4 bg-dope">
        <img
          src={logo_cashcepat}
          alt="Logo cashcepat"
          className="w-28 md:w-36 bg-cover block mx-auto"
        />
        <div className="flex items-center gap-1 md:gap-2 absolute top-6 right-3">
          <LangSelector />
        </div>
      </div>
      <div className="bg-white lg:w-3/4 md:w-full mx-auto min-h-screen py-6">
        <Directur />
      </div>
    </div>
  );
};

export default Director;
