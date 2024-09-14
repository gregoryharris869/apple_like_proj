import Button from "../Button";
import Container from "../Container";

const Hero = () => {
  return (
    <div className="h-[300vh] text-white bg-background">
      <img src="/posters/napoleon.webp" alt="Napoleon" />
      <Container>
        <h1 className="text-5xl font-bold">
          All Apple Originals. <br /> Only on Apple TV+.
        </h1>
        <Button size="large">Large button</Button>
        <p className="font-semibold">Watch on the 📺 app.</p>
      </Container>
    </div>
  );
};

export default Hero;
