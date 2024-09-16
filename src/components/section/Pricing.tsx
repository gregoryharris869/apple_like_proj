import promotionsData from "../../data/promotionData";
import Container from "../Container";
import Promotions from "../Promotions";

const Pricing = () => {
  return (
    <Container>
      <div className="relative py-12 text-white ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Promotions promotions={promotionsData} />
        </div>
      </div>
    </Container>
  );
};

export default Pricing;
