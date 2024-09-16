import Header from "./components/Header";
import { Hero } from "./components/section/Hero";
import Pricing from "./components/section/Pricing";
import Usps from "./components/section/Usps";
import VideoCarousel from "./components/section/VideoCarousel";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
          <Pricing />
        </div>
        <VideoCarousel />
        <div className="h-[300vh]" />
      </main>
    </>
  );
}

export default App;
