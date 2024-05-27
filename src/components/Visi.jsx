import React from "react";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const Visi = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={'Loading...'}>
      <div className="w-10/12 mx-auto flex flex-wrap justify-center gap-16 my-16 md:my-24">
        <div className="flex flex-col w-96 border rounded-xl p-5 shadow-md">
          <p className="text-center font-bold text-2xl md:text-4xl mb-4">
            {t("about.vision.title")}
          </p>
          <p>{t("about.vision.description")}</p>
        </div>
        <div className="flex flex-col w-96 border rounded-xl p-5 shadow-md">
          <p className="text-center font-bold text-2xl md:text-4xl mb-4">
            {t("about.mission.title")}
          </p>
          <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 gap-2 flex flex-col">
            <li className="flex items-center">
              <svg
                className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              {t("about.mission.m-1")}
            </li>
            <li className="flex items-center">
              <svg
                className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              {t("about.mission.m-2")}
            </li>
            <li className="flex items-center">
              <svg
                className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              {t("about.mission.m-3")}
            </li>
            <li className="flex items-center">
              <svg
                className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              {t("about.mission.m-4")}
            </li>
          </ul>
        </div>
      </div>
    </Suspense>
  );
};

export default Visi;
