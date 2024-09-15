import Button from "./Button";
import Container from "./Container";

const Header = () => {
  return (
    <>
      <header className="relative z-20 text-white bg-backgroundContrast">
        <Container className="flex min-h-[--header-row-height] items-center">
          <a
            href="/"
            className="-ml-6 flex h-[--header-row-height] items-center px-6 text-xl"
          >
             <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="sticky top-0 z-20 text-white bg-backgroundContrast">
        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
