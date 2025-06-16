import BgRemovalSteps from "./LandingPage_Content/BgRemovalSteps";
import BgSlider from "./LandingPage_Content/BgSlider";
import HeroSection from "./LandingPage_Content/HeroSection";
import Pricing from "./LandingPage_Content/Pricing";
import Testimonials from "./LandingPage_Content/Testimonials";

const LandingPage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <BgRemovalSteps></BgRemovalSteps>
      <BgSlider></BgSlider>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
    </div>
  );
};

export default LandingPage;
