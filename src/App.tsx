import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/section/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div>
          <Container>usps</Container>
        </div>
        <div>
          <Container>3 col layout</Container>
        </div>
        <div>
          <Container>Carousels with posters</Container>
        </div>
      </main>
    </>
  );
}

export default App;
