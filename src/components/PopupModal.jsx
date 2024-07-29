import React, { useEffect, useState } from 'react';
import foto_fraud from "../assets/fraud_27-7-2024.png";

export default function PopupModal() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-2 md:p-4 m-9 relative lg:max-w-[720px] lg:max-h-[720px] h-auto">
            <button
              className="bg-white rounded-full h-[20px] w-[20px] absolute top-[-20px] right-[-20px] text-gray-500 hover:text-gray-700 flex justify-center items-center"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={foto_fraud} // Replace with your image URL
              alt="Announcement"
              className="rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
