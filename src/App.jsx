import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Directur from "./pages/Directur";
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const Event = lazy(() => import("./pages/Event"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Privacy = lazy(() => import("./pages/Privacy"))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/event" element={<Event />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/director" element={<Directur />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
