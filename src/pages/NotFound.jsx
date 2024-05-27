import React from "react";
import { Link } from "react-router-dom";
import logo_cashcepat from "../assets/logo_cashcepat.svg";
import notFound from '../assets/404_cat.svg'
import { Suspense } from "react";
import Loading from "../components/Loading";

const NotFound = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <div className="flex h-screen items-center flex-col gap-5">
        <img src={logo_cashcepat} alt="logo cashcepat" className="mt-20" />
        <img src={notFound} alt="not found image" className="w-1/4"/>
        <Link to="/">
          <div className="btn rounded-full bg-primary hover:bg-secondary capitalize text-base font-bold border-none">
            Go Home
          </div>
        </Link>
      </div>
    </Suspense>
  );
};

export default NotFound;
