import Container from "./components/Container";
import Header from "./components/Header";
import { Hero } from "./components/section/Hero";
import Pricing from "./components/section/Pricing";
import Usps from "./components/section/Usps";

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
        <div>
          <Container>Carousels with posters</Container>
        </div>
      </main>
    </>
  );
}

export default App;
