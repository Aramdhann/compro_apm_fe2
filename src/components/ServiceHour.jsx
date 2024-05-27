import React from "react";
import img_serviceHour from "../assets/jam_pelayanan.svg";
import { MdEmail, MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import icon_telepon from "../assets/telepon.svg";
import gap from "../assets/gap.svg";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const ServiceHour = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={'Loading...'}>
      <div className="flex gap-3 sm:gap-5 md:gap-16 mx-auto justify-center py-20 sm:py-36 w-11/12">
        <div className="hidden md:flex">
          <img src={img_serviceHour} alt="img jam pelayanan customer service" />
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="font-bold text-2xl md:text-4xl">
            {t("serviceHour.title")}
          </h1>
          <div className="flex items-center gap-3 text-primary">
            <img src={icon_telepon} alt="icon telepon" className="w-10" />
            <div className="flex gap-3 items-center text-dope text-base">
              <div className="text-right">
                <p className="font-bold leading-none">
                  {t("serviceHour.day-1")}
                </p>
                <p>08:00 - 17:00</p>
              </div>
              <img src={gap} alt="gap pembatas" className="h-6" />
              <div className="text-up">
                <p className="font-bold leading-none">
                  {t("serviceHour.day-2")}
                </p>
                <p>09:00 - 13:00</p>
              </div>
            </div>
          </div>
          <div className="bg-primary w-fit px-3 py-2 md:px-4 md:py-3 rounded-full">
            <p className="text-xl md:text-2xl font-semibold">
              (021) 83782891/92
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="bg-primary p-2 rounded-md h-fit">
                <MdEmail size={20} />
              </div>
              <a href="mailto:cs@cashcepat.co.id">cs@cashcepat.co.id</a>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary p-2 rounded-md h-fit">
                <AiFillInstagram size={20} />
              </div>
              <div className="flex flex-col">
                <p className="text-primary font-bold">Instagram</p>
                <a>@cashcepat</a>
                <a href="https://www.instagram.com/cashcepat/">
                  instagram.com/cashcepat
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary p-2 rounded-md h-fit">
                <MdFacebook size={20} />
              </div>
              <div className="flex flex-col">
                <p className="text-primary font-bold">Facebook</p>
                <a>Cashcepat</a>
                <a href="https://web.facebook.com/CashcepatApp">
                  facebook.com/CashcepatApp
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary p-2 rounded-md h-fit">
                <AiFillYoutube size={20} />
              </div>
              <div className="flex flex-col">
                <p className="text-primary font-bold">YouTube</p>
                <a href="https://www.youtube.com/@cashcepatbetterlife1768">
                  @cashcepatbetterlife1768
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ServiceHour;
