import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[300vh]">Hero component</div>
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
