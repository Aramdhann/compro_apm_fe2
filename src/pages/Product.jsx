import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ads from "../components/Ads";
import logo_ojk from "../assets/ojk-new.svg";
import logo_afpi from "../assets/afpi-new-logo.svg";
import logo_legal from "../assets/legal_afpi.svg";
import logo_iso from "../assets/ISO_27001.svg";
import logo_kominfo from "../assets/kominfo_logo.svg";
import FraudNav from "../components/FraudNav";
import { useTranslation } from "react-i18next";
import axios from "axios";
// import bg from "../assets/bg_product.svg";

const Product = () => {
  const { t } = useTranslation();

  const interestRate = 0.003; //bunga perhari
  const step = 50000; // step in rupiah
  const maxLoan = 4000000; // max loan
  const installmentAmounts = 3; // max tenor
  const stepInstallment = 1; // step installment
  const days = 31; // total days in a month

  const [tenor, setTenor] = useState(1); // State for tenor (in months)
  const [value, setValue] = useState(1000000); // Initial value set to 3,000,000
  const [valueRepayment, setValueRepayment] = useState(0); // initial value of interest
  const [showRepayment, setShowRepayment] = useState(false); // show value repayment
  const [salary, setSalary] = useState("");
  const [rawValueSalary, setRawValueSalary] = useState("");
  const [showInputRequired, setShowInputRequired] = useState(false);
  const [allInputsFilled, setAllInputsFilled] = useState(false);

  useEffect(() => {
    calculateInterest();
  }, [value, tenor]);

  useEffect(() => {
    if (allInputsFilled) {
      const timer = setTimeout(() => {
        handleButtonClick();
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [allInputsFilled]);

  const sendDataToBackend = () => {
    const formData = {
      salary: rawValueSalary,
      loan: value,
      tenor: tenor,
    };

    console.log("Sending data to backend:", formData);

    axios
      .post(
        `${import.meta.env.VITE_API_URL}simulation-product/post/all`,
        formData
      )
      .then((res) => {
        console.log("Data sent successfully: ", res.data);
      })
      .catch((error) => {
        console.log("Sending data error:", error);
      });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const calculateInterest = () => {
    const daysTotal = tenor * days;
    const interestTotal = value * interestRate * daysTotal;
    const valueRepayment = (value + interestTotal) / tenor;
    setValueRepayment(valueRepayment);
  };

  const handleChange = (event) => {
    const roundedValue = Math.round(event.target.value / step) * step;
    const progress = (roundedValue / maxLoan) * 100;
    event.target.style.background = `linear-gradient(to right, #FFBA26 ${progress}%, #ccc ${progress}%)`;
    setValue(roundedValue);
    checkAllInputsFilled(); // Check if all inputs are filled when input changes
  };

  const handleTenorChange = (event) => {
    const roundedValue =
      Math.round(event.target.value / stepInstallment) * stepInstallment;
    const progress = (roundedValue / installmentAmounts) * 100;
    event.target.style.background = `linear-gradient(to right, #FFBA26 ${progress}%, #ccc ${progress}%)`;
    setTenor(roundedValue);
    checkAllInputsFilled(); // Check if all inputs are filled when input changes
  };

  const handleButtonClick = () => {
    if (isSalaryEmpty()) {
      setShowInputRequired(true);
    } else {
      setShowInputRequired(false);
      calculateInterest();
      setShowRepayment(true);
      sendDataToBackend();
    }
  };

  const handleInputChange = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, "");

    if (numericValue === "0") {
      return; // Ignore the input if it is "0"
    }

    const formatted = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 3,
    }).format(numericValue);

    const formattedWithDot = formatted.replace(/,/g, ".");

    setRawValueSalary(numericValue);
    setSalary(`Rp. ${formattedWithDot}`);
    checkAllInputsFilled(); // Check if all inputs are filled when input changes
  };

  const isSalaryEmpty = () => {
    return salary.trim() === "" || salary === "Rp. 0";
  };

  const checkAllInputsFilled = () => {
    // Check if all inputs are filled
    if (salary.trim() !== "" && value > 0 && tenor > 0) {
      setAllInputsFilled(true);
    } else {
      setAllInputsFilled(false);
    }
  };

  return (
    <>
      <Navbar />
      <FraudNav />
      <div className="flex justify-center">
        <div className="py-10 md:mx-14 md:my-9 p-5 mx-auto flex flex-wrap gap-10 items-center justify-center bg-image">
          <div className="mb-5 md:mb-0 lg:w-6/12">
            <h1 className="font-bold text-2xl sm:text-3xl mb-4 md:text-5xl md:mb-7">
              {t("product.title")}
            </h1>
            <p className="md:text-justify mb-8 w-3/4">
              {t("product.description")}
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div>
                  <p className="mb-2 text-white bg-primary font-bold px-3 rounded-md">
                    {t("trusted.ojk")}
                  </p>
                  {/* <img src={logo_ojk} alt="logo OJK" className="h-12" /> */}
                </div>
              </div>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div>
                    <p className="mb-2 footer-title text-dope">
                      {t("trusted.afpi")}
                    </p>
                    <div className="flex flex-row gap-5">
                      <img src={logo_afpi} alt="logo afpi" className="h-12" />
                      <img
                        src={logo_legal}
                        alt="logo legal afpi"
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="mb-2 footer-title text-dope">
                      {t("trusted.iso")}
                    </p>
                    <img src={logo_iso} alt="logo iso" className="h-16" />
                  </div>
                </div>
                <div>
                  <div>
                    <p className="mb-2 footer-title text-dope">
                      {t("trusted.kominfo")}
                    </p>
                    <img
                      src={logo_kominfo}
                      alt="logo kominfo"
                      className="h-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-primary py-8 px-8 md:w-96 rounded-xl">
              <div className="flex flex-col gap-5">
                <p className="text-4xl font-bold text-white text-center uppercase">
                  {t("product.simulation")}
                </p>
                {/* loan */}
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-dope font-medium text-sm md:text-base">
                      {t("product.salary")}
                    </label>
                    <input
                      value={salary}
                      onChange={handleInputChange}
                      className="input input-bordered input-secondary w-full"
                      placeholder="example: 4000000"
                      required
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-dope font-medium text-sm md:text-base">
                      {t("product.loan")}
                    </p>
                    <p className="text-dope font-bold text-base md:text-xl">
                      {formatCurrency(value)}
                    </p>
                  </div>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max={maxLoan}
                      step={step}
                      value={value}
                      onChange={handleChange}
                      id="range"
                      className="w-full cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between text-xs md:text-base">
                    <p className="text-dope font-medium">0</p>
                    <p className="text-dope font-medium">
                      {formatCurrency(maxLoan)}
                    </p>
                  </div>
                </div>
                {/* tenor */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <p className="text-dope font-medium text-sm md:text-base">
                      {t("product.tenor")}
                    </p>
                    <p className="text-dope font-bold text-base md:text-xl">
                      {tenor} {t("product.month")}
                    </p>
                  </div>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max={installmentAmounts}
                      step={stepInstallment}
                      value={tenor}
                      onChange={handleTenorChange}
                      id="range"
                      className="w-full cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between text-xs md:text-base">
                    <p className="text-dope font-medium">0</p>
                    <p className="text-dope font-medium">
                      {installmentAmounts} {t("product.month")}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-center text-2xl font-semibold leading-none">
                      {/* Biaya */}
                      {t("product.instalment")}
                    </p>
                    <p className="text-center text-sm">
                      {t("product.interest")}
                    </p>
                  </div>
                  {showRepayment && (
                    <p className="text-center text-white text-2xl font-bold">
                      {formatCurrency(valueRepayment)}
                    </p>
                  )}
                </div>
                <div className="mx-auto w-fit flex flex-col items-center gap-2">
                  {isSalaryEmpty() && showInputRequired && (
                    <div className="block max-w-[250px] text-center py-1 px-2 rounded-lg bg-error text-white text-sm">
                      <p>{t("product.salaryRequired")}</p>
                      {/* <p>{t("product.month")}</p> */}
                    </div>
                  )}
                  <button
                    onClick={handleButtonClick}
                    type="button"
                    className={`w-fit text-dope rounded-full text-xl font-bold px-5 py-2.5 text-center ${
                      isSalaryEmpty()
                        ? "bg-abu"
                        : "bg-secondary outline-yellow-600 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
                    }`}
                  >
                    {t("product.submission")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ads />
      <Footer />
    </>
  );
};

export default Product;
