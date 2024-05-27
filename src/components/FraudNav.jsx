import React from "react";
import warning from "../assets/warning.svg";
import "../styles/fraudNav.css";
import { Trans } from "react-i18next";
import { Suspense } from "react";

const FraudNav = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <div className="bg-primary z-20 sticky top-0 ">
        <marquee scrolldelay="100" className="container flex mx-auto">
          <div className="flex justify-center">
            <img
              src={warning}
              alt="icon warning"
              className="w-4 md:w-7 me-1 md:me-2 flex items-center"
            />
            <p className="py-1 text-xs md:text-base">
              <Trans i18nKey="fraud">
                <strong>Hindari penipuan!</strong> selalu gunakan aplikasi resmi
                Cashcepat yang
                <strong> di Google Playstore</strong>. Hanya gunakan VA yang
                tertera di aplikasi Cashcepat untuk seluruh transaksi pembayaran
                Anda.
              </Trans>
            </p>
          </div>
        </marquee>
      </div>
    </Suspense>
  );
};

export default FraudNav;
