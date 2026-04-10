"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import PartsService from "@/components/PartsService";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SearchResults, { type CarResult } from "@/components/SearchResults";

export default function HomeClient() {
  const [results, setResults] = useState<CarResult[] | null>(null);

  return (
    <>
      <Hero onResults={setResults} />

      {/* Show results right after hero when search is done */}
      {results !== null && (
        <SearchResults results={results} onClose={() => setResults(null)} />
      )}

      <HowItWorks />
      <Pricing />
      <PartsService />
      <CTA />
      <Footer />
    </>
  );
}
