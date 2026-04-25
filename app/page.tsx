"use client";

import { Hero3 } from "@/components/blocks/hero-3";
import { Navigation5 } from "@/components/blocks/navigation-5";
import { Features2 } from "@/components/blocks/features-2";
import Features6 from "@/components/blocks/features-6";
import About2 from "@/components/blocks/about-2";
import Cta9 from "@/components/blocks/cta-9";
import Footer8 from "@/components/blocks/footer-8";

export default function LandingPage() {
  return (
    <div className="bg-black text-white">
      <Navigation5 />
      <div className="dark">
        <Hero3 />
      </div>
      <div id="mission" className="dark">
        <Features2 />
      </div>
      <div id="research" className="dark">
        <Features6 />
      </div>
      <div id="impact" className="dark">
        <About2 />
      </div>
      <div id="join" className="dark">
        <Cta9 />
      </div>
      <div className="dark">
        <Footer8 />
      </div>
    </div>
  );
}
