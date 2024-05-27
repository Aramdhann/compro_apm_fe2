import { React, Suspense, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Report = () => {
  const { t } = useTranslation();
  const [detailData, setDetailData] = useState([]);
  const [detailDataCompre, setDetailDataCompre] = useState([]);
  const [opini, setOpini] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}finance-report/get/all`
        );
        const getAllFinanceReport = response.data.data;
        setDetailData(getAllFinanceReport);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}comprehensif-report/get/all`
        );
        const getAllComprehensifReport = response.data.data;
        setDetailDataCompre(getAllComprehensifReport);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}opini-audit/get/all`
        );
        const getAllOpiniAudit = response.data.data;
        setOpini(getAllOpiniAudit);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString || dateString === "-") {
      return "-"; // Set default value to '-'
    }
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatRupiah = (value) => {
    if (!value || value === "-") {
      return "-"; // Set default value to '-'
    }
  
    const isNegative = value < 0; // Check if the value is negative
    const absoluteValue = Math.abs(value);
  
    const reverse = absoluteValue.toString().split("").reverse().join("");
    const ribuan = reverse.match(/\d{1,3}/g);
    const formatted = ribuan.join(".").split("").reverse().join("");
    
    return isNegative ? `-${formatted}` : `${formatted}`; // Add negative sign if necessary
  };
  

  return (
    <Suspense fallback={"Loading..."}>
      <div className="flex flex-col gap-14 md:gap-20">
        <div className="flex flex-wrap justify-center mx-auto gap-14 md:gap-28 px-5">
          {detailData.length > 0
            ? detailData.map((item) => (
                <div key={item.id} className="flex flex-col gap-6 w-[300px]">
                  <div className="font-bold text-xl md:text-2xl">
                    <p className="mb-3 text-center">
                      {t("report.stateFinancial")}
                    </p>
                    <div className="flex justify-between">
                      <p className="text-base font-normal">
                        {t("report.date")} {formatDate(item.createdAt)}
                      </p>
                      <p className="flex text-xs items-center justify-center font-normal bg-secondary px-2 rounded-full">
                        {item.createdAt !== undefined && item.createdAt !== null
                          ? "Audited"
                          : "No data"}
                      </p>
                    </div>
                    <p className="text-xs font-normal italic">{t("report.jutaan")}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                      {t("report.asset")}
                    </p>
                    <div className="flex justify-between">
                      <p className="font-bold">{t("report.currentAsset")}</p>
                      <p>{formatRupiah(item.asset_lancar)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-bold">
                        {t("report.non-currentAsset")}
                      </p>
                      <p>{formatRupiah(item.asset_tidak_lancar)}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                      {t("report.liabilities")}
                    </p>
                    <div className="flex justify-between">
                      <p className="font-bold">{t("report.currentAsset")}</p>
                      <p>{formatRupiah(item.liabilitas_lancar)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-bold">
                        {t("report.non-currentAsset")}
                      </p>
                      <p>{formatRupiah(item.liabilitas_tidak_lancar)}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                      {t("report.equity")}
                    </p>
                    <div className="flex justify-between">
                      <p className="font-bold">{t("report.total")}</p>
                      <p>{formatRupiah(item.ekuitas_total)}</p>
                    </div>
                  </div>
                </div>
              ))
            : detailData.length === 0
            ? "Loading Finance Report..."
            : "No data"}
          {detailDataCompre.length > 0
            ? detailDataCompre.map((item) => (
                <div key={item.id} className="flex flex-col gap-6">
                  <div className="font-bold text-xl md:text-2xl">
                    <p className="mb-3 text-center w-fit md:w-full">
                      {t("report.stateCompre")}
                    </p>
                    <div className="flex justify-between">
                      <p className="text-base font-normal ">
                        {t("report.date")} {""} {formatDate(item.createdAt)}
                      </p>
                      <p className="flex text-xs items-center justify-center font-normal bg-secondary px-2 rounded-full">
                        {item.createdAt !== undefined && item.createdAt !== null
                          ? "Audited"
                          : "No data"}
                      </p>
                    </div>
                  <p className="text-xs font-normal italic">{t("report.jutaan")}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                      {t("report.income")}
                    </p>
                    <div className="flex justify-between">
                      <p className="font-bold">{t("report.total")}</p>
                      <p>{formatRupiah(item.income_total)}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                      {t("report.operating")}
                    </p>
                    <div className="flex justify-between">
                      <p className="font-bold">{t("report.total")}</p>
                      <p>{formatRupiah(item.operating_total)}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                      {t("report.otherIncome")}
                    </p>
                    <div className="flex justify-between">
                      <p className="font-bold">{t("report.total")}</p>
                      <p>{formatRupiah(item.other_income_total)}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                      {t("report.compre")}
                    </p>
                    <div className="flex justify-between">
                      <p className="font-bold">{t("report.total")}</p>
                      <p>{formatRupiah(item.profit_loss)}</p>
                    </div>
                  </div>
                </div>
              ))
            : detailDataCompre.length === 0
            ? "Loading Comprehensif Report..."
            : "No data"}
        </div>
        {opini.length > 0
          ? opini.map((item) => (
              <div key={item.id} className="flex mx-auto mb-16 md:mb-28 p-5">
                <div className="font-bold text-xl md:text-2xl">
                  <p className="mb-3">{t("report.opini")}</p>
                  <div className="flex justify-between">
                    <p className="text-base font-normal mr-2 lg:mr-4">
                      {t("report.date")} {formatDate(item.createdAt)}
                    </p>
                    <p className="flex text-xs items-center justify-center font-normal bg-secondary px-2 rounded-lg md:rounded-full">
                      {item !== undefined && item !== null
                        ? item.status
                        : "No data"}
                    </p>
                  </div>
                </div>
              </div>
            ))
          : opini.length === 0
          ? "Loading opini report..."
          : "No data"}
      </div>
    </Suspense>
  );
};

export default Report;
