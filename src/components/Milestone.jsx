import React from "react";
import img_milestone from "../assets/milestone_id_2.svg";
import img_milestone_en from "../assets/milestone_en_2.svg";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const Milestone = () => {
  const { t, i18n } = useTranslation();
  const milestoneImage =
    i18n.language === "en" ? img_milestone_en : img_milestone;

  return (
    <Suspense fallback={'Loading...'}>
      <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-4 mb-20 sm:mb-36">
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">
            {t("milestone.title")}
          </h1>
          <p className="text-center text-xs sm:text-sm md:text-base">
            PT. Artha Permata Makmur
          </p>
        </div>
        <div data-aos-delay="300" className="flex p-8">
          <img src={milestoneImage} alt="gambar milestone cashcepat" />
        </div>
      </div>
    </Suspense>
  );
};

export default Milestone;
