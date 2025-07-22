import AboutSection from "./AboutSection";
import HeroSection from "./Herosection";
import ModelsSection from "./ModelsSection";
import PhilosophySection from "./PhilosophySection";
import StrategySection from "./StrategySection";

const HeroItems = ({ setReelPlay }) => {
  return ( 
    <>
      <HeroSection setReelPlay={setReelPlay} />
      <AboutSection />
      <ModelsSection />
      <PhilosophySection />
      <StrategySection />
    </>
  );
};

export default HeroItems;
