import React, { lazy, Suspense, useState } from "react";
const ModalHome = lazy(() => import("../components/ModalHome"));
const Navbar = lazy(() => import("../components/Navbar"));
const FraudNav = lazy(() => import("../components/FraudNav"));
const Hero = lazy(() => import("../components/Hero"));
const Trusted = lazy(() => import("../components/Trusted"));
const Why = lazy(() => import("../components/Why"));
const QuickStep = lazy(() => import("../components/QuickStep"));
const Ads = lazy(() => import("../components/Ads"));
const ServiceHour = lazy(() => import("../components/ServiceHour"));
const Footer = lazy(() => import("../components/Footer"));
const PopupModal = lazy(() => import("../components/PopupModal"));

import Loading from "../components/Loading";

const Home = () => {
  const [isModalHomeAccepted, setIsModalHomeAccepted] = useState(false);

  const handleModalHomeAccepted = () => {
    setIsModalHomeAccepted(true)
  } 

  return (
    <Suspense fallback={<Loading />}>
      {!isModalHomeAccepted && <ModalHome onAccept={handleModalHomeAccepted}/>}
      {isModalHomeAccepted && <PopupModal/>}
      <Navbar />
      <FraudNav />
      <Hero />
      <Trusted />
      <Why />
      <QuickStep />
      <Ads />
      <ServiceHour />
      <Footer />
    </Suspense>
  );
};

export default Home;
