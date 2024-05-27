import React from "react";
import icon_agreement from "../assets/agreement.svg";
import icon_anggota from "../assets/anggota_afpi.svg";
import icon_hourglass from "../assets/hourglass.svg";
import icon_bunga from "../assets/bunga.svg";
import icon_gift from "../assets/gift.svg";
import { Trans, useTranslation } from "react-i18next";
import { Suspense } from "react";

const why = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={'Loading...'}>
      <div className="pt-16 pb-10 sm:pt-20 sm:pb-14 bg-primary">
        <h1 className="font-bold px-5 text-2xl md:text-4xl text-center mb-24 md:mb-32">
          {t("why.title")}
        </h1>
        <div className="flex flex-wrap justify-center gap-3 container mx-auto">
          <div className="flex justify-center flex-wrap grow gap-8">
            <div className="w-[300px] bg-white rounded-[15px] relative mb-16">
              <div className="absolute w-full">
                <img
                  src={icon_agreement}
                  alt="icon agreement"
                  className="mx-auto -translate-y-[80px]"
                />
              </div>
              <p className="px-5 pb-3 pt-11 text-xl text-center">
                <Trans i18nKey={"why.reason-1"}>
                  <strong>Berizin dan Diawasi</strong>
                  <br />
                  <strong>OJK</strong> (Otoritas Jasa Keuangan)
                </Trans>
              </p>
            </div>
            <div className="w-[300px] bg-white rounded-[15px] relative mb-16">
              <div className="absolute w-full">
                <img
                  src={icon_anggota}
                  alt="icon anggota"
                  className="mx-auto -translate-y-[80px]"
                />
              </div>
              <p className="px-5 pb-3 pt-11 text-xl text-center">
                <Trans i18nKey={"why.reason-2"}>
                  <strong>Anggota dari AFPI</strong>
                  <br />
                  (Asosiasi Fintech Pendanaan Bersama Indonesia)
                </Trans>
              </p>
            </div>
            <div className="w-[300px] bg-white rounded-[15px] relative mb-16">
              <div className="absolute w-full">
                <img
                  src={icon_hourglass}
                  alt="icon houtglass"
                  className="mx-auto -translate-y-[70px]"
                />
              </div>
              <p className="px-5 pb-3 pt-11 text-xl text-center">
                <br />
                <strong>{t("why.reason-3")}</strong>
              </p>
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-8">
            <div className="w-[300px] bg-white rounded-[15px] relative mb-16">
              <div className="absolute w-full">
                <img
                  src={icon_bunga}
                  alt="icon bunga"
                  className="mx-auto -translate-y-[60px]"
                />
              </div>
              <p className="px-5 pb-3 pt-11 text-xl text-center">
                <strong>{t("why.reason-4")}</strong>
              </p>
            </div>
            <div className="w-[300px] bg-white rounded-[15px] relative mb-16">
              <div className="absolute w-full">
                <img
                  src={icon_gift}
                  alt="icon gift"
                  className="mx-auto -translate-y-[60px]"
                />
              </div>
              <p className="px-5 pb-3 pt-11 text-xl text-center">
                <strong>
                  {t("why.reason-5")}{" "}
                  <strong className="italic">{t("why.reason-5-2")}</strong>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default why;
