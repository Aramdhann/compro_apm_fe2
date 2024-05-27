import {React, Suspense} from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={'Loading...'}>
      <div className="py-5 bg-gradient-to-r from-white to-primary w-full">
        <div className="flex flex-wrap flex-col md:flex-row items-center mx-auto container">
          <div className="p-5 md:p-14 md:w-6/12">
            <h1 className="font-bold text-3xl sm:text-4xl mb-4 md:text-6xl md:mb-7">
              {t("about.title")}
            </h1>
            <p className="md:text-justify mb-8">{t("about.description")}</p>
          </div>
          <div className="w-full sm:w-3/4 md:w-6/12 md:p-5 lg:p-10 mx-auto">
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/-IvyUwle1cY?playlist=-IvyUwle1cY&rel=0&showinfo=0&autoplay=1&mute=1&loop=1"
              title="#Cashcepat - Pinjaman Online"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full aspect-video"
            ></iframe>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default AboutUs;
