import React from "react";
import arrow from "../assets/arrow-right.svg";
import { Trans, useTranslation } from "react-i18next";
import cs from "../assets/customer-service.png";
import clock from "../assets/clockwise.png";
import mail from "../assets/mail.png";
import { Suspense } from "react";

const FlowReport = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={'Loading...'}>
      <h1 className="text-center mb-8 font-bold text-2xl sm:text-3xl md:text-4xl">
        Customer Service FLow
      </h1>
      <div className="flex justify-center px-5 mb-20">
        <div className="overflow-x-auto">
          <div className="flex items-center gap-5">
            <div className="card border flex-none">
              <div className="flex p-5 items-center gap-5">
                <img
                  className="w-20 h-fit"
                  src={cs}
                  alt="customer service icon"
                />
                <p className="w-64">
                  <Trans i18nKey={"cs.flow-1"}>
                    konsumen melakukan pengaduan melalui, kontak cashcepat{" "}
                    <strong>(021) 83782891/92</strong>, email cashcepat{" "}
                    <strong>(cs@cashcepat.co.id)</strong>, atau mengisi form{" "}
                    <strong>'Hubungi Kami'</strong>
                  </Trans>
                </p>
              </div>
            </div>
            <img src={arrow} className="w-6 sm:w-10 md:w-14" />
            <div className="card border flex-none">
              <div className="flex p-5 items-center gap-5">
                <img
                  className="w-20 h-fit"
                  src={clock}
                  alt="customer service icon"
                />
                <p className="w-64">{t("cs.flow-2")}</p>
              </div>
            </div>
            <img src={arrow} className="w-6 sm:w-10 md:w-14" />
            <div className="card border flex-none">
              <div className="flex p-5 items-center gap-5">
                <img
                  className="w-20 h-fit"
                  src={mail}
                  alt="customer service icon"
                />
                <p className="w-64">{t("cs.flow-3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default FlowReport;
