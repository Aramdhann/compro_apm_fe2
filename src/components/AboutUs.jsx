import {React, Suspense} from "react";
import { useTranslation } from "react-i18next";
import Carousel from "./Carousel";
import compro_1 from '../assets/compro_1.png'
import compro_2 from '../assets/compro_2.png'
import compro_3 from '../assets/compro_3.png'
import compro_4 from '../assets/compro_4.png'
import compro_5 from '../assets/compro_5.png'

const AboutUs = () => {
  const { t } = useTranslation();

  const slides = [compro_1, compro_2, compro_3, compro_4, compro_5];

  
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
          <div className="p-2 sm:p-0 w-full sm:w-3/4 md:w-6/12 md:p-5 lg:p-10 mx-auto">
            {/* <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/-IvyUwle1cY?playlist=-IvyUwle1cY&rel=0&showinfo=0&autoplay=1&mute=1&loop=1"
              title="#Cashcepat - Pinjaman Online"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full aspect-video"
            ></iframe> */}
            <Carousel autoSlideInterval={[5000]} showPrevNextButtons={false} showPaginationDots={false}>
            {slides.map((s, index) => (
                <img key={index} src={s} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default AboutUs;
