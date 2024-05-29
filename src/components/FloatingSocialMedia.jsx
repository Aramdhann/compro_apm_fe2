import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FloatingSocialMedia = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 p-2 flex flex-col space-y-2 bg-secondary rounded-tr-lg">
      <a
        href="mailto:cs@cashcepat.co.id"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dope hover:opacity-50 hover:transition-all ease-in-out duration-300"
      >
        <MdEmail size={28} />
      </a>
      <a
        href="https://web.facebook.com/CashcepatApp"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dope hover:opacity-50 hover:transition-all ease-in-out duration-300"
      >
        <FaFacebook size={28} />
      </a>
      <a
        href="https://www.youtube.com/@cashcepatbetterlife1768"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dope hover:opacity-50 hover:transition-all ease-in-out duration-300"
      >
        <FaYoutube size={28} />
      </a>
      <a
        href="https://www.instagram.com/cashcepat/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dope hover:opacity-50 hover:transition-all ease-in-out duration-300"
      >
        <FaInstagram size={28} />
      </a>
    </div>
  );
};

export default FloatingSocialMedia;
