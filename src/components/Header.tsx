import Container from "./Container";

const Header = () => {
  return (
    <>
      <header className="text-white  bg-backgroundContrast">
        <Container className="flex items-center min-h-11">
          <a href="/" className="flex items-center px-6 -m-6 h-11">
            <span className="sr-only">Back to homepage.</span>
          </a>
        </Container>
      </header>
      <div className="sticky top-0 text-white bg-backgroundContrast">
        <Container className="flex items-center min-h-11 ">Apple TV+</Container>
      </div>
    </>
  );
};

export default Header;
