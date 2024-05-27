import React, { useEffect } from "react";
import warning from "../assets/warning.svg";
import { useTranslation, Trans } from "react-i18next";
import LangSelector from "./LangSelector";
import Cookies from "js-cookie";
import { Suspense } from "react";

const ModalHome = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const modal = document.getElementById("my_modal_1");
    if (modal && !Cookies.get("agreed")) {
      modal.showModal();
    }
  }, []);

  const handleAgree = () => {
    Cookies.set("agreed", "true", { expires: 1 }); // 1 day expired
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.close();
    }
  };

  return (
    <Suspense fallback={"loading..."}>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box pt-0">
          <div className="sticky top-0 pt-6 pb-4 bg-white">
            <div className="flex justify-center">
              <p className="flex font-bold text-lg uppercase text-center mb-4">
                {t("modal.title")}
              </p>
            </div>
            <div className="flex items-center gap-1 md:gap-2 absolute top-6 right-0">
              <LangSelector />
            </div>
            <div className="flex justify-center bg-primary text-dope w-full p-2 rounded-xl">
              <img
                src={warning}
                alt="icon warning"
                className="w-6 md:w-8 me-2 flex items-center"
              />
              <p className="text-xs md:text-base text-justify px-1">
                <Trans i18nKey={"fraud"}>
                  <strong>Hindari penipuan!</strong> selalu gunakan aplikasi
                  resmi Cashcepat yang
                  <strong> di Google Playstore</strong>. Hanya gunakan VA yang
                  tertera di aplikasi Cashcepat untuk seluruh transaksi
                  pembayaran Anda.
                </Trans>
              </p>
            </div>
          </div>
          <div className="px-4 max-h-[450px] overflow-y-auto">
            <ol className="list-decimal text-justify">
              <li>{t("modal.paraph-1")}</li>
              <li>{t("modal.paraph-2")}</li>
              <li>{t("modal.paraph-3")}</li>
              <li>{t("modal.paraph-4")}</li>
              <li>{t("modal.paraph-5")}</li>
              <li>{t("modal.paraph-6")}</li>
              <li>{t("modal.paraph-7")}</li>
              <li>{t("modal.paraph-8")}</li>
              <li>{t("modal.paraph-9")}</li>
              <br />
              <p>
                <Trans i18nKey={"modal.paraph-10"}>
                  <strong>PT Artha Permata Makmur</strong> merupakan badan hukum
                  yang didirikan berdasarkan Hukum Republik Indonesia. Berdiri
                  sebagai perusahaan yang telah diatur oleh dan dalam pengawasan
                  Otoritas Jasa Keuangan (OJK) di Indonesia, Perusahaan
                  menyediakan layanan interfacing sebagai penghubung pihak yang
                  memberikan pinjaman dan pihak yang membutuhkan pinjaman
                  meliputi pendanaan dari individu, organisasi, maupun badan
                  hukum kepada individu atau badan hukum tertentu. Perusahaan
                  tidak menyediakan segala bentuk saran atau rekomendasi
                  pendanaan terkait pilihan-pilihan dalam situs ini.
                </Trans>
              </p>
              <br />
              <p>
                <Trans i18nKey={"modal.paraph-11"}>
                  Isi dan materi yang tersedia pada situs{" "}
                  <strong>www.cashcepat.id </strong>
                  dimaksudkan untuk memberikan informasi dan tidak dianggap
                  sebagai sebuah penawaran, permohonan, undangan, saran, maupun
                  rekomendasi untuk menginvestasikan sekuritas, produk pasar
                  modal, atau jasa keuangan lainya. Perusahaan dalam memberikan
                  jasanya hanya terbatas pada fungsi administratif.
                </Trans>
              </p>
              <br />
              <p>
                <Trans i18nKey={"modal.paraph-12"}>
                  Pendanaan dan pinjaman yang ditempatkan di rekening{" "}
                  <strong>Cashcepat</strong> adalah tidak dan tidak akan
                  dianggap sebagai simpanan yang diselenggarakan oleh Perusahaan
                  seperti diatur dalam Peraturan Perundang-Undangan tentang
                  Perbankan di Indonesia. Perusahaan atau setiap Direktur,
                  Pegawai, Karyawan, Wakil, Afiliasi, atau Agen-Agennya tidak
                  memiliki tanggung jawab terkait dengan setiap gangguan atau
                  masalah yang terjadi atau yang dianggap terjadi yang
                  disebabkan oleh minimnya persiapan atau publikasi dari materi
                  yang tercantum pada situs Perusahaan.
                </Trans>
              </p>
            </ol>
            <div className="modal-action mt-4 mb-1 justify-center">
              <form method="dialog">
                <button
                  className="btn uppercase bg-primary rounded-full hover:bg-secondary"
                  onClick={handleAgree}
                >
                  {t("modal.agree")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </Suspense>
  );
};

export default ModalHome;
