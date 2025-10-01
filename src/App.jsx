import { useState } from "react";
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
<<<<<<< HEAD
import Loader from "./components/Loader";
=======

>>>>>>> b715e97bc44c4be31b1177775be98c072dd98e14

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const [loading, setLoading] = useState(true);

  useGSAP(() => {
    if (!loading) {
      ScrollSmoother.create({
        smooth: 3,
        effects: true,
      });
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <main>
          <NavBar />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <HeroSection />
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
      )}
    </>
  );
};

export default App;
