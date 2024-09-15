import Container from "../Container";
import FadeIn from "../FadeIn";

const Usps = () => {
  return (
    <Container className="relative z-10 space-y-12 text-4xl font-bold text-white py-36 ">
      <FadeIn>
        <p>New Apple Originals every month - always ad-free.</p>
      </FadeIn>
      <FadeIn>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </FadeIn>
      <FadeIn>
        <p>Watch in 4K HDR video with immersive Spatial Audio.1</p>
      </FadeIn>
      <FadeIn>
        <p>Share a single subscription with up to five people.</p>
      </FadeIn>
    </Container>
  );
};

export default Usps;
