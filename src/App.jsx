import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollSmoother from "gsap/ScrollSmoother";

import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import FlavourSection from "./sections/FlavourSection";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonilaSection from "./sections/TestimonilaSection";
import FooterSection from "./sections/FooterSection";

import Loader from "./components/Loader";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoLoaded, setVideoLoaded] = useState(false);
  const [startVideo, setStartVideo] = useState(false);

  useGSAP(() => {
    if (!isLoading) {
      ScrollSmoother.create({
        smooth: 3,
        effects: true,
      });
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <Loader
          isVideoLoaded={isVideoLoaded}
          onExitStart={() => setStartVideo(true)}
          onComplete={() => setIsLoading(false)}
        />
      )}

      <main>
        <NavBar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <HeroSection
              setVideoLoaded={setVideoLoaded}
              startVideo={startVideo}
            />
            <MessageSection />
            <FlavourSection />
            <NutritionSection />

            <div>
              <BenefitSection />
              <TestimonilaSection />
            </div>

            <FooterSection />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
