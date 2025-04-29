import AchievmentsSection from "./components/Sections/AchievmentsSection";
import HomeAboutSection from "./components/Sections/HomeAboutSection";
import HeroSection from "./components/ui/HeroSection";
import {
  achievementsSection,
  // epiEquiposcompanySchema
} from "./utils/data";
import "./App.css";
// import StructuredData from "./components/StructuredData";
import VideoSection from "./components/Sections/VideoSection";
import AmenitiesSection from "./components/Sections/AmenitiesSection";
import ContactSection from "./components/ui/ContactSection";

function App() {
  return (
    <main className="grid gap-12 lg:gap-36">
      <HeroSection />
      <HomeAboutSection />
      <AchievmentsSection archievementsSection={achievementsSection} />
      <VideoSection />
      <AmenitiesSection />
      <ContactSection />
      {/* <StructuredData data={epiEquiposcompanySchema} /> */}
    </main>
  );
}

export default App;
