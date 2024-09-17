import promotionsData from "../../data/promotionData";
import Container from "../Container";
import Promotions from "../Promotions";
import FadeIn from "../FadeIn";

const Pricing = () => {
  return (
    <Container>
      <FadeIn>
        <div className="relative z-10 py-12 text-white ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Promotions promotions={promotionsData} />
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Pricing;
