import React from "react";
import icon_4 from "../assets/4.svg";
import img_unduh from "../assets/unduh_regis.svg";
import img_pilih from "../assets/pilih_produk.svg";
import img_pencairan from "../assets/proses_pencairan.svg";
import img_repayment from "../assets/repayment.svg";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const QuickStep = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={'Loading...'}>
      <div className="flex flex-wrap py-20 sm:py-36 items-center justify-center gap-12 px-10">
        <div className="flex justify-center">
          <div className="flex space-x-5">
            <img src={icon_4} alt="icon 4 langkah" />
            <p className="text-primary text-4xl font-bold w-[170px] bg-white">
              {t("easyWay.title")}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="grow flex-col items-center flex">
            <div className="w-[145px] mb-3">
              <img src={img_unduh} alt="img unduh playstore" />
            </div>
            <div>
              <div className="flex items-center justify-center gap-4">
                <div className="text-primary text-6xl font-bold">1</div>
                <div className="font-bold text-lg leading-tight w-24">
                  {t("easyWay.way-1")}
                </div>
              </div>
            </div>
            <div className="w-40 text-center leading-tight">
              {t("easyWay.desc-1")}
            </div>
          </div>
          <div className="grow flex-col items-center flex">
            <div className="w-[145px]">
              <img src={img_pilih} alt="img pilih" />
            </div>
            <div>
              <div className="flex items-center justify-center gap-4">
                <div className="text-primary text-6xl font-bold">2</div>
                <div className="font-bold text-lg leading-tight w-28">
                  {t("easyWay.way-2")}
                </div>
              </div>
            </div>
            <div className="w-40 text-center leading-tight">
              {t("easyWay.desc-2")}
            </div>
          </div>
          <div className="grow flex-col items-center flex">
            <div className="w-[177px] flex justify-center mb-2">
              <img
                src={img_pencairan}
                alt="img pencairan"
                className="w-11/12"
              />
            </div>
            <div>
              <div className="flex items-center justify-center gap-4">
                <div className="text-primary text-6xl font-bold ">3</div>
                <div className="font-bold text-lg leading-tight w-40">
                  {t("easyWay.way-3")}
                </div>
              </div>
            </div>
            <div className="w-44 text-center leading-tight">
              {t("easyWay.desc-3")}
            </div>
          </div>
          <div className="grow flex-col items-center flex">
            <div className="w-[120px]">
              <img src={img_repayment} alt="img repayment" />
            </div>
            <div>
              <div className="flex items-center justify-center gap-4">
                <div className="text-primary text-6xl font-bold ">4</div>
                <div className="font-bold text-lg leading-tight w-24">
                  {t("easyWay.way-4")}
                </div>
              </div>
            </div>
            <div className="w-40 text-center leading-tight">
              {t("easyWay.desc-4")}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default QuickStep;
