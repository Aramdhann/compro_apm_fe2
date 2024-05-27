import React, { lazy, Suspense } from "react";
const Milestone = lazy(() => import("../components/Milestone"));
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const Ads = lazy(() => import("../components/Ads"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Trusted = lazy(() => import("../components/Trusted"));
const Visi = lazy(() => import("../components/Visi"));
const Directur = lazy(() => import("../components/Directur"));
const Program = lazy(() => import("../components/Program"));
const DetailBisnis = lazy(() => import("../components/DetailBisnis"));
const Report = lazy(() => import("../components/Report"));
const FraudNav = lazy(() => import("../components/FraudNav"));
const Loading = lazy(() => import("../components/Loading"));

const About = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <FraudNav />
      <div className="flex justify-center mx-auto border">
        <AboutUs />
      </div>
      <Trusted />
      <Visi />
      <Directur />
      <Program />
      <DetailBisnis />
      <Report />
      <Milestone />
      <Ads />
      <Footer />
    </Suspense>
  );
};

export default About;
