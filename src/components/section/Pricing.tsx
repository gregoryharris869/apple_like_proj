import promotionsData from "../../data/promotionData";
import Container from "../Container";
import Promotions from "../Promotions";

const Pricing = () => {
  return (
    <Container>
      <div className="relative py-12 text-white ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Promotions promotions={promotionsData} />
          {/* <div className="flex flex-col justify-between h-full space-y-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Buy an Apple device</h2>
              <h3 className="text-4xl font-bold">3 months free.</h3>
              <p className="text-lg text-textGrey">
                Apple TV+ is included for 3 months when you purchase an Apple
                device and redeem the offer within 90 days.²
              </p>
            </div>
            <div className="flex justify-start">
              <Button size="medium">Check eligibility</Button>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Free 7-day trial</h2>
              <h3 className="text-4xl font-bold">$9.99/mo.</h3>
              <p className="text-lg text-textGrey">
                A monthly subscription is just $9.99 per month after a free
                7-day trial.³ Share Apple TV+ with your family.⁴
              </p>
            </div>
            <div className="flex justify-start">
              <Button size="medium">Try it free</Button>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Free 1-month trial</h2>
              <h3 className="text-4xl font-bold">Apple One</h3>
              <p className="text-lg text-textGrey">
                Bundle Apple TV+ with up to five other great services for one
                low monthly price. And enjoy more for less.
              </p>
              <a href="#" className=" hover:underline">
                <span className="text-linkColor">Learn more &gt;</span>
              </a>
            </div>
            <div className="flex justify-start">
              <Button size="medium">Try Apple One free⁵</Button>
            </div>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Pricing;
