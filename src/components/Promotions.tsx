import Button from "./Button";
import { Promotion } from "../data/promotionData";
type Props = {
  promotions: Promotion[];
};

const Promotions = ({ promotions }: Props) => {
  return (
    <>
      {promotions.map(
        ({ title, price, description, buttonPromotion }, index) => (
          <div className="space-y-9" key={index}>
            <div
              key={index}
              className="flex flex-col justify-between h-full space-y-4"
            >
              <div className="mb-5 space-y-4 ">
                <h2 className="text-2xl font-medium">{title}</h2>
                <h3 className="text-4xl font-bold">{price}</h3>
                <p className="text-lg text-textGrey">{description}</p>
              </div>
              <div className="flex justify-start ">
                <Button size="medium">{buttonPromotion}</Button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Promotions;
