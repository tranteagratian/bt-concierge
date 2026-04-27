"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import MediaStrip from "@/components/MediaStrip";
import Why from "@/components/Why";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import PartsService from "@/components/PartsService";
import Testimonials from "@/components/Testimonials";
import ChatbotSection from "@/components/ChatbotSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SearchResults, { type CarResult } from "@/components/SearchResults";

export default function HomeClient() {
  const [results, setResults] = useState<CarResult[] | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [results]);

  return (
    <>
      <Hero onResults={setResults} />
      <MediaStrip />

      {results !== null && (
        <SearchResults results={results} onClose={() => setResults(null)} />
      )}

      <Why />
      <HowItWorks />
      <ChatbotSection />
      <Pricing />
      <Stats />
      <PartsService />
      <Testimonials />


      <CTA />
      <Footer />
    </>
  );
}
