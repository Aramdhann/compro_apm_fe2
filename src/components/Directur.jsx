import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import directors_en from "../../src/locales/en/directur_en.json";
import directors_id from "../../src/locales/id/directur_id.json";
import { Suspense } from "react";

const Directur = () => {
  const { t, i18n } = useTranslation();
  const [selectedDirectur, setSelectedDirectur] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const directurs = i18n.language === "en" ? directors_en : directors_id;

  const handleReadMoreClick = (directur) => {
    setSelectedDirectur(directur);
    setModalVisible(true);
  };

  useEffect(() => {
    if (modalVisible && selectedDirectur) {
      const modal = document.getElementById("my_modal_dir");
      if (modal) {
        modal.showModal();
      }
    }
  }, [modalVisible, selectedDirectur]);

  return (
    <Suspense fallback={'Loading...'}>
      <div className="flex flex-col gap-8 mb-16 md:mb-28 items-center">
        <div className="font-bold text-2xl md:text-4xl text-center">
          {t("director.title")}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {directurs.map((directur, index) => (
            <div
              className="flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
              onClick={() => handleReadMoreClick(directur)}
              key={index}
            >
              <div className="rounded-t-3xl h-auto w-48">
                {directur.images.map((image, index) => (
                  <img
                    className="object-cover rounded-t-3xl"
                    src={image}
                    alt={`direksi dan pemegang saham ${directur.name}`}
                    key={index}
                  />
                ))}
                <div className="flex flex-col justify-between p-4 leading-normal rounded-b-3xl bg-primary">
                  <p className="mb-2 text-lg md:text-xl font-bold tracking-tight text-dope uppercase">
                    {directur.name}
                  </p>
                  <p className="font-base text-white uppercase">
                    {directur.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {selectedDirectur && (
            <dialog id="my_modal_dir" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <form method="dialog">
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() =>
                      document.getElementById("my_modal_dir").close()
                    }
                  >
                    ✕
                  </button>
                </form>
                <div className="flex flex-wrap gap-5 justify-center md:justify-normal bg-white rounded-3xl">
                  <div className="flex flex-col gap-3 lg:gap-6">
                    {selectedDirectur.images.map((image, index) => (
                      <img
                        src={image}
                        alt={`direksi dan pemegang saham ${selectedDirectur.name}`}
                        className="border-4 rounded-3xl"
                        key={index}
                      />
                    ))}
                    <div className="flex flex-col">
                      <p className="text-2xl font-bold tracking-tight text-dope uppercase">
                        {selectedDirectur.name}
                      </p>
                      <p className="text-base text-dope uppercase">
                        {selectedDirectur.position}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex flex-col gap-3 lg:gap-6 max-h-60 md:max-h-full overflow-y-auto md:overflow-y-hidden">
                    <div>
                      <p className="font-bold bg-secondary px-2 rounded-full w-fit mb-2 uppercase">
                        {selectedDirectur.name}
                      </p>
                      <p className="text-justify">
                        {selectedDirectur.description}
                      </p>
                    </div>
                    <div>
                      <p className="font-bold bg-secondary px-2 rounded-full w-fit mb-2 uppercase">
                        {t("director.career")}
                      </p>
                      <p className="text-justify">{selectedDirectur.career}</p>
                    </div>
                    <div>
                      <p className="font-bold bg-secondary px-2 rounded-full w-fit mb-2 uppercase">
                        {t("director.education")}
                      </p>
                      <p className="text-justify">
                        {selectedDirectur.background}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Directur;
