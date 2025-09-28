
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavourSection from "./sections/FlavourSection";
import { useGSAP } from "@gsap/react";
import ScrollSmoother from "gsap/ScrollSmoother";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonilaSection from "./sections/TestimonilaSection";
import FooterSection from "./sections/FooterSection";
import Loader from "./components/loader";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return ( 
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
  );
};

export default App;
