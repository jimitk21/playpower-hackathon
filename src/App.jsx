"use client";

import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import GameWorldsSection from "./components/GameWorldsSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import ParentsTeachersSection from "./components/ParentsTeachersSection";
import Footer from "./components/Footer";
import MusicToggle from "./components/MusicToggle";
import FloatingIslands from "./components/FloatingIslands";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showTerms, setShowTerms] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTermsOpen = () => {
    setShowTerms(true);
  };

  const handleTermsClose = () => {
    setShowTerms(false);
  };

  const handleHelpOpen = () => {
    setShowHelp(true);
  };

  const handleHelpClose = () => {
    setShowHelp(false);
  };

  const handleContactOpen = () => {
    setShowContact(true);
  };

  const handleContactClose = () => {
    setShowContact(false);
  };

  // Hide navigation when any modal is open
  const isAnyModalOpen = showTerms || showHelp || showContact;

  return (
    <div className="App">
      <FloatingIslands scrollY={scrollY} />
      {!isAnyModalOpen && <Navigation onHelpOpen={handleHelpOpen} />}
      <main className="main-content">
        <HeroSection scrollY={scrollY} />
        <GameWorldsSection />
        <TestimonialsCarousel />
        <ParentsTeachersSection />
        <MusicToggle />
        <Footer
          onTermsOpen={handleTermsOpen}
          showTerms={showTerms}
          onTermsClose={handleTermsClose}
          onHelpOpen={handleHelpOpen}
          showHelp={showHelp}
          onHelpClose={handleHelpClose}
          onContactOpen={handleContactOpen}
          showContact={showContact}
          onContactClose={handleContactClose}
        />
      </main>
    </div>
  );
}

export default App;
