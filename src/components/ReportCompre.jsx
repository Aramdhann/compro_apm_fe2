import React, { useState, useEffect, Suspense } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const ReportCompre = () => {
  const { t } = useTranslation();
  const [detailDataCompre, setDetailDataCompre] = useState({});
  const [income, setIncome] = useState({});
  const [operating, setOperating] = useState({});
  const [other, setOther] = useState({});
  const [profit, setProfit] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    const fetchDataCompre = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/date-compre`).then(function (response) {
          const compre = response.data.data;
          setDetailDataCompre(compre);
          setLoading(false);
          
        }).catch(function (error) {
          console.log(error);
        });;
      } catch (error) {
        console.log("Error fetching date compre data: ", error);
        setLoading(false);
      }
    };
    fetchDataCompre();
  }, []);

  useEffect(() => {
    const fetchIncome = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/income`).then(function (response) {
          const incomes = response.data.data;
          setIncome(incomes);
          setLoading(false);
        });
      } catch (error) {
        console.log("Error fetching income data: ", error);
        setLoading(false);
      }
    };
    fetchIncome();
  }, []);

  useEffect(() => {
    const fetchOperating = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/operating-expense`).then(function (response) {
          const operatings = response.data.data;
          setOperating(operatings);
          setLoading(false);
        });
      } catch (error) {
        console.log("Error fetching operating expense data: ", error);
        setLoading(false);
      }
    };
    fetchOperating();
  }, []);

  useEffect(() => {
    const fetchOtherIncome = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/other-income`).then(function (response) {
          const others = response.data.data;
          setOther(others);
          setLoading(false);
        });
      } catch (error) {
        console.log("error fetch data other income: ", error);
        setLoading(false);
      }
    };
    fetchOtherIncome();
  }, []);

  useEffect(() => {
    const fetchProfit = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/profit`).then(function (response) {
          const profits = response.data.data;
          setProfit(profits);
          setLoading(false);
        });
      } catch (error) {
        console.log("error fetch data other income: ", error);
        setLoading(false);
      }
    };
    fetchProfit();
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

    const reverse = value.toString().split("").reverse().join("");
    const ribuan = reverse.match(/\d{1,3}/g);
    const formatted = ribuan.join(".").split("").reverse().join("");
    return `Rp. ${formatted}`;
  };

  return (
    <Suspense fallback={"Loading..."}>
      <div className="flex flex-col gap-6">
        <div className="font-bold text-xl md:text-2xl">
          <p className="mb-3 text-center w-fit md:w-full">
            {t("report.stateCompre")}
          </p>
          <div className="flex justify-between">
            <p className="text-base font-normal ">
              {t("report.date")}{" "}
              {loading
                ? "Loading..."
                : formatDate(detailDataCompre.data_created)}
            </p>
            <p className="flex text-xs items-center justify-center font-normal bg-secondary px-2 rounded-full">
              {loading ? "Loading..." : detailDataCompre.status}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
            {t("report.income")}
          </p>
          <div className="flex justify-between">
            <p className="font-bold">{t("report.total")}</p>
            <p>{loading ? "Loading..." : formatRupiah(income.total)}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
            {t("report.operating")}
          </p>
          <div className="flex justify-between">
            <p className="font-bold">{t("report.total")}</p>
            <p>{loading ? "Loading..." : formatRupiah(operating.total)}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
            {t("report.otherIncome")}
          </p>
          <div className="flex justify-between">
            <p className="font-bold">{t("report.total")}</p>
            <p>{loading? 'Loading...' : formatRupiah(other.total)}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
            {t("report.compre")}
          </p>
          <div className="flex justify-between">
            <p className="font-bold">{t("report.total")}</p>
            <p>{formatRupiah(profit.total)}</p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ReportCompre;
