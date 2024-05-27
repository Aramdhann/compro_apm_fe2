import { React, Suspense, useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import axios from "axios";

const DetailBisnis = () => {
  const { t } = useTranslation();
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}business-detail/get/all`
        );
        const getAllBusinessDetail = response.data.data;
        setDetailData(getAllBusinessDetail);
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

    const reverse = value.toString().split("").reverse().join("");
    const ribuan = reverse.match(/\d{1,3}/g);
    const formatted = ribuan.join(".").split("").reverse().join("");
    return `Rp. ${formatted}`;
  };

  const formatNumber = (number) => {
    if (!number || number === "-") {
      return "-"; // Set default value to '-'
    }

    const reverse = number.toString().split("").reverse().join("");
    const ribuan = reverse.match(/\d{1,3}/g);
    const formatted = ribuan.join(".").split("").reverse().join("");
    return `${formatted}`;
  };

  return (
    <Suspense fallback={"Loading..."}>
      {detailData.length > 0
        ? detailData.map((item) => (
            <div key={item.id} className="mb-16 md:mb-28 flex flex-col justify-center items-center">
              <div className="font-bold text-2xl md:text-4xl text-center mb-14">
                {t("detail.title")}
              </div>
              <div className="flex flex-wrap gap-10 justify-center mb-8">
                <div className="flex flex-col gap-2 items-center">
                  <dt className="text-primary font-bold text-xl md:text-3xl">
                    {formatRupiah(item.loan_total)}
                  </dt>
                  <dd className="text-center w-10/12">
                    {t("detail.loanTotal")}
                  </dd>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <dt className="text-primary font-bold text-xl md:text-3xl">
                    {formatRupiah(item.loan_current)}
                  </dt>
                  <dd className="text-center w-10/12">
                    {t("detail.loanCurrent")}
                  </dd>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <dt className="text-primary font-bold text-xl md:text-3xl">
                    {formatRupiah(item.loan_outstanding)}
                  </dt>
                  <dd className="text-center w-10/12">
                    {t("detail.loanOutstanding")}
                  </dd>
                </div>
              </div>
              <div className="flex flex-wrap gap-10 justify-center w-6/12 mb-8">
                <div className="flex flex-col gap-2 items-center">
                  <div className="flex gap-8">
                    <div className="flex flex-col">
                      <dt className="text-primary font-bold text-xl md:text-3xl">
                        {formatNumber(item.total_individu_borrower)}
                      </dt>
                      <p className="font-bold">{t("detail.individu")}</p>
                    </div>
                    <div className="flex flex-col">
                      <dt className="text-primary font-bold text-xl md:text-3xl">
                        {formatNumber(item.total_institution_borrower)}
                      </dt>
                      <p className="font-bold">{t("detail.institution")}</p>
                    </div>
                  </div>
                  <dd className="text-center w-10/12">{t("detail.loan")}</dd>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="flex gap-8">
                    <div className="flex flex-col">
                      <dt className="text-primary font-bold text-xl md:text-3xl">
                        {formatNumber(item.detail_individu_borrower_active)}
                      </dt>
                      <p className="font-bold">{t("detail.individu")}</p>
                    </div>
                    <div className="flex flex-col">
                      <dt className="text-primary font-bold text-xl md:text-3xl">
                        {formatNumber(item.detail_institution_borrower_active)}
                      </dt>
                      <p className="font-bold">{t("detail.institution")}</p>
                    </div>
                  </div>
                  <dd className="text-center w-10/12">
                    {t("detail.activeBorrower")}
                  </dd>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <dt className="text-primary font-bold text-xl md:text-3xl">
                    {formatNumber(item.active_account)}
                  </dt>
                  <dd className="text-center">
                    <Trans i18nKey={"details.uniqueAccount"}>
                      Jumlah Peminjam <br /> (Unique Account)
                    </Trans>
                  </dd>
                </div>
              </div>
              <p className="flex w-1/2 text-abu text-sm md:text-base">
                {t("detail.lastUpdate")} {formatDate(item.createdAt)}
              </p>
            </div>
          ))
        : detailData.length === 0
        ? "Loading Detail Bisnis..."
        : "No data"}
    </Suspense>
  );
};

export default DetailBisnis;
