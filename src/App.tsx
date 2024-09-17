import Header from "./components/Header";

import Pricing from "./components/section/Pricing";
import TVpromo from "./components/section/TVpromo";
import Usps from "./components/section/Usps";
import VideoCarousel from "./components/section/VideoCarousel";
import FaqSection from "./components/section/FaqSection";
import Hero from "./components/section/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="relative z-10 bg-background">
          <Hero />
          <Usps />
          <Pricing />
        </div>
        <VideoCarousel />
        <TVpromo />
        <FaqSection />
      </main>
    </>
  );
}

export default App;
