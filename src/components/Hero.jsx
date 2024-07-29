import React, { lazy, Suspense } from "react";
import foto_hero from "../assets/foto.jpg";
import foto_fraud from "../assets/fraud_27-7-2024.png";
const DownloadFraud = lazy(() => import("./DownloadFraud"));
const Carousel = lazy(() => import("../components/Carousel"));
import { useTranslation, Trans } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const slides = [foto_fraud, foto_hero];

  return (
    <Suspense fallback={"Loading..."}>
      <div className="py-5 container mx-auto">
        <div className="mx-auto flex flex-wrap items-center">
          <div className="mb-14 md:mb-0 md:w-7/12 px-4">
            <h1 className="font-bold text-2xl sm:text-3xl mb-4 md:text-4xl lg:text-6xl md:mb-7">
              <Trans i18nKey="hero.title">
                Tumbuh Bersama <br /> Untuk Hidup Yang Lebih Baik
              </Trans>
            </h1>
            <p className="md:text-justify mb-8">{t("hero.description")}</p>
            <DownloadFraud />
          </div>
          <div className="md:w-5/12 px-4">
            <Carousel>
              {slides.map((s, index) => (
                <img key={index} src={s} />
              ))}
            </Carousel>
            {/* <img
              src={foto_hero}
              alt="foto hero section"
              className="md:translate-x-8 md:w-10/12 mx-auto"
            /> */}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Hero;
