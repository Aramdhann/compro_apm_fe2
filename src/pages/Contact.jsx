import React, { useState, Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ads from "../components/Ads";
import img_serviceHour from "../assets/jam_pelayanan.svg";
import { MdEmail, MdFacebook, MdOutlineArrowDropDown } from "react-icons/md";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import icon_telepon from "../assets/telepon.svg";
import gap from "../assets/gap.svg";
import FraudNav from "../components/FraudNav";
import { Trans, useTranslation } from "react-i18next";
import FlowReport from "../components/FlowReport";
import Loading from "../components/Loading";
import axios from "axios";

const Contact = () => {
  const { t } = useTranslation();
  const [selectedJenisPengaduan, setSelectedJenisPengaduan] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [dropdownError, setDropdownError] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const formatPhoneNumber = (phoneNumber) => {
    // Remove non-numeric characters
    const numericPhoneNumber = phoneNumber.replace(/\D/g, "");

    if (numericPhoneNumber.startsWith("0")) {
      return `wa.me/62${numericPhoneNumber.substring(1)}`;
    } else {
      return `${numericPhoneNumber}`;
    }
  };

  const sendEmail = () => {
    const { subject, name, phoneNumber, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;

    if (!selectedJenisPengaduan) {
      setDropdownError("Please select a type of complaint");
      return;
    }

    let valid = true;
    const newErrors = {
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    };

    if (name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    } else if (!phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must contain only digits";
      valid = false;
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (message.trim() === "") {
      newErrors.message = "Message is required";
      valid = false;
    }

    if (!valid) {
      // If any input is invalid, set error messages and prevent sending email
      setErrors(newErrors);
      return;
    }

    // Format the phone number as wa.me link
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    const emailMessage = {
      // to: "radityamochamad@gmail.com", // just SAMPLE using email developer
      // pass: "B165E90245CB65CB6BC5D23BAC1CF373CC31", // just SAMPLE using email developer
      // subject: subject,
      // body: `Jenis Pengaduan: ${subject}<br/>Name: ${name}<br/>Phone Number: ${formattedPhoneNumber}<br/>Email: ${email}<br/>Message: ${message}`,
      to: "putri.refita@cashcepat.co.id",
      pass: "8CA381C11FA3602A4A8E08079F09BC5873C7",
      subject: subject,
      body: `Jenis Pengaduan: ${subject}<br/>Name: ${name}<br/>Phone Number: ${formattedPhoneNumber}<br/>Email: ${email}<br/>Message: ${message}`,
    };

    window.Email.send({
      // Host: "smtp.elasticemail.com",
      // Username: emailMessage.to,
      // Password: emailMessage.pass,

      // if use secure token, we no need use host, username and password (above) again check details in https://smtpjs.com/
      // SecureToken: "4f426c3a-a319-4056-81e0-3ae8700edc45", // just SAMPLE using email developer
      SecureToken: "4a9849e8-6974-4ae1-bb07-58aab20b4ddb",
      To: emailMessage.to,
      From: emailMessage.to,
      Subject: emailMessage.subject,
      Body: emailMessage.body,
    }).then((message) => setIsEmailSent(true));

    axios
      .post(`${import.meta.env.VITE_API_URL}contact-us/post/all`, formData)
      .then((res) => {
        console.log("Email sent successfully: ", res.data);
        setIsEmailSent(true);
      })
      .catch((error) => {
        console.log("sending email error:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset the error message when user starts typing in the input field
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleJenisPengaduanChange = (selectedValue) => {
    setSelectedJenisPengaduan(selectedValue);
    setFormData({
      ...formData,
      subject: selectedValue,
    });
  };

  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <FraudNav />
      <div className="flex flex-col justify-center mx-auto container">
        <div className="mt-4 mb-10 flex justify-center">
          <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl">
            {t("serviceHour.title-2")}
          </h1>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-5 justify-center mx-auto px-2 sm:px-5">
          <div className="flex flex-col gap-3 sm:gap-5 md:gap-12 justify-center mb-10 md:mb-16">
            <div className="hidden md:flex">
              <img
                src={img_serviceHour}
                alt="img jam pelayanan customer service"
                className="w-3/4"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="font-bold text-xl md:text-2xl">
                {t("serviceHour.title")}
              </h1>
              <div className="flex items-center gap-3 text-primary">
                <img src={icon_telepon} alt="icon telepon" className="w-10" />
                <div className="flex gap-3 items-center text-dope text-base">
                  <div className="text-right">
                    <p className="font-bold leading-none">
                      {t("serviceHour.day-1")}
                    </p>
                    <p>08:00 - 17:00</p>
                  </div>
                  <img src={gap} alt="gap pembatas" className="h-6" />
                  <div className="text-left">
                    <p className="font-bold leading-none">
                      {t("serviceHour.day-2")}
                    </p>
                    <p>09:00 - 13:00</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary w-fit px-3 py-2 md:px-4 md:py-3 rounded-full">
                <p className="text-xl md:text-2xl font-semibold">
                  (021) 83782891/92
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="bg-primary p-2 rounded-md h-fit">
                    <MdEmail size={20} />
                  </div>
                  <a href="mailto:cs@cashcepat.co.id">cs@cashcepat.co.id</a>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary p-2 rounded-md h-fit">
                    <AiFillInstagram size={20} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-primary font-bold">Instagram</p>
                    <a>@cashcepat</a>
                    <a href="https://www.instagram.com/cashcepat/">
                      instagram.com/cashcepat
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary p-2 rounded-md h-fit">
                    <MdFacebook size={20} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-primary font-bold">Facebook</p>
                    <a>Cashcepat</a>
                    <a href="https://web.facebook.com/CashcepatApp">
                      facebook.com/CashcepatApp
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary p-2 rounded-md h-fit">
                    <AiFillYoutube size={20} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-primary font-bold">YouTube</p>
                    <a href="https://www.youtube.com/@cashcepatbetterlife1768">
                      @cashcepatbetterlife1768
                    </a>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-4 bg-abu p-4 rounded-md relative"
                  style={{ width: "300px" }}
                >
                  <div className="circle-1 absolute">
                    <div className="circle-2"></div>
                  </div>
                  <p className="font-bold uppercase bg-red_light p-2 rounded-md">
                    {t("serviceHour.fraud-title")}
                  </p>
                  <p>
                    <Trans i18nKey={"serviceHour.fraud-description"}>
                      Kami juga ingin menekankan bahwa kami{" "}
                      <strong>
                        tidak pernah menawarkan produk atau layanan melalui
                        media sosial selain akun media sosial resmi yang
                        disebutkan di atas
                      </strong>
                      . Ini adalah langkah kami untuk mencegah kemungkinan
                      penipuan atau penipuan. Kami menghimbau pelanggan untuk{" "}
                      <strong>
                        selalu melakukan transaksi melalui aplikasi resmi kami
                        dan waspada terhadap penipuan online
                      </strong>
                    </Trans>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary py-8 px-5 w-full sm:w-96 mb-8 rounded-xl h-fit">
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-bold text-white text-center">
                {t("serviceHour.title-2")}
              </p>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {t("serviceHour.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input input-bordered input-secondary w-full"
                    placeholder={t("serviceHour.type")}
                    required
                  />
                  <span className="text-sm">{errors.name}</span>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {t("serviceHour.phone")}
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="input input-bordered input-secondary w-full"
                    placeholder="example: 08xx"
                    required
                  />
                  <span className="text-sm">{errors.phoneNumber}</span>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input input-bordered input-secondary w-full"
                    placeholder="example: mail@gmail.com"
                    required
                  />
                  <span className="text-sm">{errors.email}</span>
                </div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  {t("serviceHour.message")}
                </label>
                <div className="dropdown">
                  <label
                    tabIndex={0}
                    className={
                      "text-center p-4 rounded-xl hover:bg-[#E1BC3A] w-full flex bg-secondary font-bold justify-between items-center"
                    }
                  >
                    {selectedJenisPengaduan
                      ? t(
                          `serviceHour.complaintTypes.${selectedJenisPengaduan}`
                        )
                      : t("serviceHour.complaintType")}
                    <MdOutlineArrowDropDown />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] w-full mt-2 menu p-2 shadow bg-base-100 rounded-box"
                  >
                    <li>
                      <a
                        onClick={() => handleJenisPengaduanChange("pengajuan")}
                      >
                        {t("serviceHour.complaintTypes.pengajuan")}
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleJenisPengaduanChange("pembayaran")}
                      >
                        {t("serviceHour.complaintTypes.pembayaran")}
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleJenisPengaduanChange("aplikasi")}>
                        {t("serviceHour.complaintTypes.aplikasi")}
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleJenisPengaduanChange("informasi")}
                      >
                        {t("serviceHour.complaintTypes.informasi")}
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleJenisPengaduanChange("lain-lain")}
                      >
                        {t("serviceHour.complaintTypes.lain-lain")}
                      </a>
                    </li>
                  </ul>
                </div>
                {dropdownError && (
                  <span className="text-red-500">{dropdownError}</span>
                )}
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="textarea textarea-secondary w-full"
                    placeholder={t("serviceHour.area")}
                    required
                  ></textarea>
                  <span className="text-sm">{errors.message}</span>
                </div>
              </form>
              <button
                type="button"
                onClick={sendEmail}
                className="text-dope bg-secondary outline-yellow-600 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-full text-xl font-bold px-5 py-2.5 text-center dark:focus:ring-yellow-900"
              >
                {t("serviceHour.send")}
              </button>
              {isEmailSent && (
                <span className="p-5 rounded-xl bg-white border">
                  <p className="font-bold capitalize mb-3">
                    {t("modal-email.title")}
                  </p>
                  <p className="capitalize">{t("modal-email.message")}</p>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <FlowReport />
      <Ads />
      <Footer />
    </Suspense>
  );
};

export default Contact;
