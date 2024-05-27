import {React, Suspense, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import programs_en from "../../src/locales/en/program_en.json";
import programs_id from "../../src/locales/id/program_id.json";

const Program = () => {
  const { t, i18n } = useTranslation();

  const [selectedProgram, setSelectedProgram] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const programs = i18n.language === "en" ? programs_en : programs_id;

  const handleReadMoreClick = (program) => {
    setSelectedProgram(program);
    setModalVisible(true);
  };

  useEffect(() => {
    if (modalVisible && selectedProgram) {
      const modal = document.getElementById("my_modal_3");
      if (modal) {
        modal.showModal();
      }
    }
  }, [modalVisible, selectedProgram]);

  return (
    <Suspense fallback={'Loading...'}>
      <div className="mb-16 md:mb-28">
        <div className="font-bold text-2xl md:text-4xl text-center mb-8">
          {t("program.title")}
        </div>
        <div className="flex justify-center">
          <div className="overflow-x-auto">
            <div className="flex flex-row gap-4 md:gap-8 relative">
              {programs.map((program, index) => (
                <div
                  className="flex gap-6 border rounded-3xl p-6 mb-2 bg-white items-center shadow-md"
                  key={index}
                >
                  <div className="carousel w-44 md:w-64 gap-2 md:gap-4 rounded-box">
                    {program.images.map((image, index) => (
                      <div className="carousel-item" key={index}>
                        <img
                          src={image}
                          alt={`Program ${program.name}`}
                          className="h-44 md:h-64 rounded-box"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 h-full flex flex-col justify-between">
                    <div>
                      <p className="uppercase font-bold text-base md:text-xl">
                        {program.name}
                      </p>
                      <p className="w-60 text-ellipsis overflow-hidden text-sm md:text-base">
                        {program.description.substring(0, 175) + " ..."}
                      </p>
                    </div>
                    <button
                      className="btn btn-primary w-fit"
                      onClick={() => handleReadMoreClick(program)}
                    >
                      {t("program.read")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {selectedProgram && (
          <dialog id="my_modal_3" className="modal rounded-none">
            <div className="modal-box overflow-hidden">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => document.getElementById("my_modal_3").close()}
                >
                  ✕
                </button>
              </form>
              <h2 className="text-base md:text-xl font-bold uppercase">
                {selectedProgram.name}
              </h2>
              <div className="carousel h-44 md:h-64 gap-2 md:gap-4 rounded-box">
                {selectedProgram.images.map((image, index) => (
                  <div className="carousel-item" key={index}>
                    <img
                      src={image}
                      alt={`Program ${selectedProgram.name}`}
                      className="h-44 md:h-64 rounded-box"
                    />
                  </div>
                ))}
              </div>
              <div className="max-h-60 overflow-y-auto">
                <p className="text-justify text-sm md:text-base">
                  {selectedProgram.description}
                </p>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </Suspense>
  );
};

export default Program;
