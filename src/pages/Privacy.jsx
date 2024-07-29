import React from "react";
import logo_cashcepat from "../assets/logo_cashcepat.svg";
import { useTranslation, Trans } from "react-i18next";
import LangSelector from "../components/LangSelector";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="sticky top-0 py-4 bg-dope">
        <img
          src={logo_cashcepat}
          alt="Logo cashcepat"
          className="w-28 md:w-36 bg-cover block mx-auto"
        />
        <div className="flex items-center gap-1 md:gap-2 absolute top-6 right-3">
          <LangSelector />
        </div>
      </div>
      <div className="bg-white lg:w-1/2 md:w-3/4 mx-auto min-h-screen">
        <div className="text-dope py-6">
          <p className="font-bold lg:text-2xl text-lg text-center">Kebijakan Privasi</p>
          <p className="italic lg:text-lg text-base text-center">Privacy Policy</p>
        </div>
        <div className="px-10 pb-10">
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
          </div>
      </div>
    </div>
  );
};

export default Privacy;
