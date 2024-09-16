export type Promotion = {
  title: string;
  price: string;
  description: string;
  buttonPromotion: string;
};

const promotionsData: Promotion[] = [
  {
    title: "Buy an Apple device",
    price: "3 months free.",
    description:
      "Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.²",
    buttonPromotion: "Check eligibility",
  },
  {
    title: "Free 7-day trial",
    price: "$9.99/mo.",
    description:
      "A monthly subscription is just $9.99 per month after a free 7-day trial. Share Apple TV+ with your family³.",
    buttonPromotion: "Try it free",
  },
  {
    title: "Free 1-month trial",
    price: "Apple One",
    description:
      "Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less.",
    buttonPromotion: "Try Apple One free",
  },
];

export default promotionsData;
