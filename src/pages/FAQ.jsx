import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ads from "../components/Ads";
import Item from "../components/Item";
import FraudNav from "../components/FraudNav";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { IoSearchCircle } from "react-icons/io5";
import { PiCoinsFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import Loading from "../components/Loading";

const FAQ = () => {
  const { t, i18n } = useTranslation();

  const faqs_id = [
    {
      id: 1,
      category: "Pengajuan",
      icon: <GiReceiveMoney size={20} />,
      questions: [
        {
          question: "Informasi apa saja yang perlu disediakan untuk pengajuan?",
          answered:
            "Mengajukan pinjaman dilakukan di dalam aplikasi. Anda hanya perlu mengikuti petunjuk yang telah tersedia di aplikasi untuk pengajuan.",
        },
        {
          question:
            "Dapatkah saya mengajukan beberapa akun Cashcepat untuk meminjam uang?",
          answered:
            "Tidak, satu orang hanya dapat menggunakan satu akun Cashcepat. Jika Anda menggunakan abanyak akun untuk meminjam uang, kami akan menolak permohonan pinjaman Anda.",
        },
        {
          question: "Dapatkah saya membatalkan setelah aplikasi diajukan?",
          answered:
            "Umumnya tidak dapat dibatalkan setelah permohonan pinjaman diajukan. Jika Anda benar-benar perlu membatalkan pinjaman, Anda dapat menghubungi layanan pelanggan untuk membatalkan jika status permohonan pinjaman Anda adlaah `Sedang diproses`, pinjaman telah dilepaskan dan tidak dapat dibatalkan saat ini.",
        },
        {
          question:
            "Jika terdapat kesalahan dalam mengajukan permohonan? Apakah dapat diubah?",
          answered: "Tidak dapat diubah.",
        },
      ],
    },
    {
      id: 2,
      category: "Pengembalian",
      icon: <GiPayMoney size={20} />,
      questions: [
        {
          question: "Apa saja jenis metode pembayaran?",
          answered:
            "(1) Pembayaran melalui Mobile Banking. (2) Pembayaran melalui ATM. (3) Pembayaran kembali melalui DOKU.",
        },
        {
          question: "Hari apa yang dimaksud dengan tanggal pembayaran?",
          answered:
            "Tanggal pembayaran adalah hari dimana pinjaman Anda jatuh tempo.",
        },
        {
          question: "Bisakah saya membayar lebih awal?",
          answered: "Anda bisa membayar lebih.",
        },
        {
          question: "Bagaimana jika saya terlambat membayar?",
          answered:
            "Peminjam harus benar-benar melaksanakan kewajiban pelunasannya. Jika tidak ada pembayaran penuh pada tanggal pembayaran yang ditetapkan dalam perjanjian pinjaman, yang mengakibatkan periode jatuh tempo, peminjam harus membayar bunga penalti yang telah jatuh tempo. Setelah periode jatuh tempo terjadi, dapat hubungi layanan pelanggan: 021-79180081 untuk membantu pembayaran.",
        },
      ],
    },
    {
      id: 3,
      category: "Analisis",
      icon: <IoSearchCircle size={20} />,
      questions: [
        {
          question: "Bagaimana proses analisisnya?",
          answered:
            "Setelah Anda mengajukan aplikasi pinjaman, Langkah pertama: Tinjauan awal sistem kontrol, Langkah kedua: Petugas kami akan memverifikasi identitas, Langkah ketiga: Peninjauan akhir dan beri tahu hasil audit.",
        },
        {
          question: "Setelah pengajuan berapa lama akan menerima hasil audit?",
          answered:
            "Batas waktu untuk audit normal adalah 24 jam pada hari kerja. JIka terdapat hari libur, maka analisis akan tertunda. Harap maklum dan tunggu dengan sabar.",
        },
        {
          question:
            "Ketika petugas kami menelepon, pertanyaannya salah/panggilan tidak terjawab, apa yang harus di lakukan?",
          answered:
            "Petugas yang menyetujui akan menilai apakah ada kebutuhan untuk menghubungi lagi berdasarkan situasi keseluruhan, harap perhatikan panggilan nanti. Jika perlu, Anda dapat menghubungi layanan pelanggan untuk melakukan pengingat, hotline layanan pelanggan: 021-79180081.",
        },
      ],
    },
    {
      id: 4,
      category: "Pinjaman",
      icon: <PiCoinsFill size={20} />,
      questions: [
        {
          question: "Bank mana yang mendukung pinjaman?",
          answered:
            "Bank pada umumnya dapat mendukung. Jika Anda mengalami tidak mendukung pinjaman, dapat menghubungi layanan pelanggan dan menginformasikan situasi secara spesifik.",
        },
        {
          question: "Berapa lama pinjaman itu masuk ke rekening?",
          answered:
            "Jika permohonan pinjaman Anda disetujui, pinjaman akan dikreditkan ke rekening dalam waktu 24 jam dari hari kerja normal. Pada waktu spesifik akan didasarkan pada waktu kedatangan dan pemberitahuan dari bank penerima.",
        },
        {
          question: "Apakah dapat meminjam dana di akhir pekan dan hari libur?",
          answered:
            "Cashcepat meminjamkan uang pada akhir pekan dan hari libur.",
        },
      ],
    },
  ];

  const faqs_en = [
    {
      id: 1,
      category: "Application",
      icon: <GiReceiveMoney size={20} />,
      questions: [
        {
          question:
            "What information do I need to provide for the application?",
          answered:
            "Applying for a loan is done within the application. You just need to follow the instructions provided in the application for the application.",
        },
        {
          question:
            "Can I apply for multiple Cashcepat accounts to borrow money?",
          answered:
            "No, one person can only use one Cashcepat account. If you use multiple accounts to borrow money, we will reject your loan application.",
        },
        {
          question: "Can I cancel after the application is submitted?",
          answered:
            "Generally, it cannot be canceled after the loan application is submitted. If you really need to cancel the loan, you can contact customer service to cancel if the status of your loan application is 'Being processed', the loan has been released and cannot be canceled at this time.",
        },
        {
          question:
            "If there is a mistake in the application? Can it be changed?",
          answered: "Cannot be changed.",
        },
      ],
    },
    {
      id: 2,
      category: "Repayment",
      icon: <GiPayMoney size={20} />,
      questions: [
        {
          question: "What are the payment methods?",
          answered:
            "(1) Payment via Mobile Banking. (2) Payment via ATM. (3) Repayment through DOKU.",
        },
        {
          question: "What day is meant by the payment date?",
          answered: "The payment date is the day when your loan is due.",
        },
        {
          question: "Can I pay early?",
          answered: "You can pay more.",
        },
        {
          question: "What if I'm late in payment?",
          answered:
            "Borrowers must fully comply with their repayment obligations. If there is no full payment on the payment date specified in the loan agreement, resulting in the grace period, the borrower must pay the overdue penalty interest. After the grace period occurs, you can contact customer service: 021-79180081 to assist with payment.",
        },
      ],
    },
    {
      id: 3,
      category: "Analysis",
      icon: <IoSearchCircle size={20} />,
      questions: [
        {
          question: "What is the analysis process?",
          answered:
            "After you submit a loan application, Step 1: Initial review of the control system, Step 2: Our officers will verify your identity, Step 3: Final review and inform the audit results.",
        },
        {
          question:
            "How long will it take to receive the audit results after submission?",
          answered:
            "The deadline for normal audit is 24 hours on working days. If there are holidays, the analysis will be delayed. Please understand and wait patiently.",
        },
        {
          question:
            "When our officers call, the questions are wrong/the call is not answered, what should be done?",
          answered:
            "Approving officers will assess whether there is a need to call again based on the overall situation, please pay attention to the call later. If necessary, you can contact customer service for a reminder, customer service hotline: 021-79180081.",
        },
      ],
    },
    {
      id: 4,
      category: "Loan",
      icon: <PiCoinsFill size={20} />,
      questions: [
        {
          question: "Which banks support loans?",
          answered:
            "Banks in general can support. If you experience unsupported loans, you can contact customer service and inform the situation specifically.",
        },
        {
          question:
            "How long does it take for the loan to be credited to the account?",
          answered:
            "If your loan application is approved, the loan will be credited to your account within 24 hours of normal working days. The specific time will be based on the arrival time and notification from the receiving bank.",
        },
        {
          question: "Can I borrow money on weekends and holidays?",
          answered: "Cashcepat lends money on weekends and holidays.",
        },
      ],
    },
  ];

  const selectedFaqs = i18n.language === "en" ? faqs_en : faqs_id;

  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const filteredFaqs = selectedFaqs.find(
    (category) => category.id === selectedCategoryId
  );

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <FraudNav />
      <div className="flex flex-col items-center container mx-auto">
        <div className="my-4 flex justify-center">
          <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-5">
            {t("faqTitle")}
          </h1>
        </div>
        <div className="mb-10">
          <ul className="menu menu-horizontal bg-base-200 rounded-xl space-x-1">
            {selectedFaqs.map((category, index) => (
              <li
                className={`hover:bg-secondary rounded-lg p-0 font-bold ${
                  selectedCategoryId === category.id ? "bg-secondary" : ""
                }`}
                key={index}
                onClick={() => handleCategoryChange(category.id)}
              >
                <div className="flex items-center">
                  <div>{category.icon}</div>
                  <a className="text-lg hidden sm:flex">{category.category}</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Suspense fallback={'Loading...'}>
          <div className="mb-12 p-4 md:w-8/12">
            {filteredFaqs.questions.map((item, key) => (
              <Item q={t(item.question)} a={item.answered} key={key} />
            ))}
          </div>
        </Suspense>
      </div>
      <Ads />
      <Footer />
    </Suspense>
  );
};

export default FAQ;
