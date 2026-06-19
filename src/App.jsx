import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import CursorGlow from "./components/cursor/CursorGlow";
import Nav from "./components/nav/Nav";
import Hero from "./components/header/Hero";
import CompaniesStrip from "./components/strip/CompaniesStrip";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import ExperienceTimeline from "./components/experience/ExperienceTimeline";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import MobileDock from "./components/dock/MobileDock";
import BackToTop from "./components/backtotop/BackToTop";

const App = () => {
  return (
    <ThemeProvider>
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <CompaniesStrip />
        <About />
        <Skills />
        <ExperienceTimeline />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <MobileDock />
      <BackToTop />
    </ThemeProvider>
  );
};

export default App;
