import React, { Suspense } from "react";
// import logo_ojk from "../assets/ojk-new.svg";
import logo_afpi from "../assets/afpi-new-logo.svg";
import logo_legal from "../assets/legal_afpi.svg";
import logo_iso from "../assets/ISO_27001.png";
import logo_kominfo from "../assets/kominfo_logo.svg";
import { useTranslation } from "react-i18next";

const Trusted = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={"Loading..."}>
      <div className="flex flex-col justify-center items-center bg-abu">
        <div className="flex grow p-5 mx-7 justify-center">
          <div>
            <p className="text-center mb-2 text-white bg-primary font-bold px-3 rounded-md">
              {t("trusted.ojk")}
            </p>
            {/* <img src={logo_ojk} alt="logo OJK" className="h-12" /> */}
          </div>
        </div>
        <div className="flex flex-wrap container py-3">
          <div className="flex grow p-5 mx-7 justify-center">
            <div>
              <p className="text-center mb-2 footer-title text-dope">
                {t("trusted.afpi")}
              </p>
              <div className="flex flex-row space-x-5">
                <img src={logo_afpi} alt="logo afpi" className="h-12" />
                <img src={logo_legal} alt="logo legal afpi" className="h-12" />
              </div>
            </div>
          </div>
          <div className="flex grow p-5 mx-7 justify-center">
            <div>
              <p className="text-center mb-2 footer-title text-dope">
                {t("trusted.iso")}
              </p>
              <img src={logo_iso} alt="logo iso" className="h-16 mx-auto" />
            </div>
          </div>
          <div className="flex grow p-5 mx-7 justify-center">
            <div>
              <p className="text-center mb-2 footer-title text-dope">
                {t("trusted.kominfo")}
              </p>
              <img src={logo_kominfo} alt="logo kominfo" className="h-12" />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Trusted;
