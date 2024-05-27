import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ads from "../components/Ads";
import {
  MdDateRange,
  MdFormatListBulleted,
  MdLocationPin,
  MdLink,
} from "react-icons/md";
import FraudNav from "../components/FraudNav";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import Loading from "../components/Loading";
import axios from "axios";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}event/get/all`
        );
        const getAllEvent = response.data.data;
        setEvents(getAllEvent);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const { t } = useTranslation();

  // Function to format the date
  const formatDate = (dateString) => {
    if (!dateString || dateString === "-") {
      return "-"; // Set default value to '-'
    }
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Calculate total pages
  const totalPages = Math.ceil(events.length / eventsPerPage);

  // Paginate events based on current page and events per page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <FraudNav />
      <div className="mx-auto">
        <div data-aos="fade-up" className="my-4 mb-10">
          <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl">
            {t("event.title")}
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="relative my-6 mx-4 md:mx-8 container">
            <div className="overflow-x-auto mx-4">
              <div className="flex absolute right-0 -translate-y-10">
                <label className="mr-2">Events per page:</label>
                <select
                  className="card"
                  value={eventsPerPage}
                  onChange={(e) => setEventsPerPage(Number(e.target.value))}
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={events.length}>All</option>
                </select>
              </div>
              <table className="table table-zebra">
                {/* head */}
                <thead className="text-lg">
                  <tr>
                    {/* <th></th> */}
                    <th colSpan={2}>
                      <div className="flex items-center gap-1">
                        <MdDateRange />
                        <p>{t("event.date")}</p>
                      </div>
                    </th>
                    {/* <th>
                      <div className="flex items-center gap-1">
                        <MdDateRange />
                        <p>{t("event.enddate")}</p>
                      </div>
                    </th> */}
                    <th>
                      <div className="flex items-center gap-1">
                        <MdFormatListBulleted />
                        <p>{t("event.activity")}</p>
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center gap-1">
                        <MdLocationPin />
                        <p>{t("event.location")}</p>
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center gap-1">
                        <MdLink />
                        <p>{t("event.coverage")}</p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentEvents.length > 0 ? (
                    currentEvents.map((item, index) => (
                      <tr key={item.id}>
                        {/* <td>{events.length - index}</td> */}
                        <td>{formatDate(item.date)}</td>
                        <td>{formatDate(item.end_date)}</td>
                        <td>{item.event_name}</td>
                        <td>{item.location}</td>
                        <td>
                          <a href={item.coverage} target="_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                            {item.coverage}
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">
                        {events.length === 0 ? "Loading..." : "No data"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mb-12 sm:mb-20 ">
          <a
            href="#"
            className={`${
              currentPage === 1 ? "cursor-not-allowed text-abu" : "block"
            } px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md dark:bg-gray-800 dark:text-gray-600 border`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">previous</span>
            </div>
          </a>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <a
                href="#"
                key={page}
                className={`${
                  currentPage === page ? "bg-primary text-white" : "text-dope"
                } ${
                  currentPage === page ? "block" : "hidden md:inline"
                } px-4 py-2 mx-1 text-dope transition-colors duration-300 transform rounded-md dark:bg-gray-800 hover:bg-primary dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 border`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </a>
            )
          )}

          <a
            href="#"
            className={`${
              currentPage === totalPages
                ? "cursor-not-allowed text-abu"
                : "block"
            } px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md dark:bg-gray-800 dark:text-gray-600 border`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>
            </div>
          </a>
        </div>
      </div>
      <Ads />
      <Footer />
    </Suspense>
  );
};

export default Event;
