import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ScrollTrigger } from "./lib/gsap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Projects from "./pages/Projects";
import Sponsors from "./pages/Sponsors";
import GetInvolved from "./pages/GetInvolved";

function ScrollToTop() {
  const { pathname, key } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    ScrollTrigger.refresh();
  }, [pathname, key]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
