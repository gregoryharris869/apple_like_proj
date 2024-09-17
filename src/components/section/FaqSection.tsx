import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqItems = [
    {
      question: "What is Apple TV+?",
      answer:
        "Apple TV+ is a streaming service offering original content produced by Apple.",
    },
    {
      question: "How can I watch it?",
      answer:
        "You can watch Apple TV+ on the Apple TV app, which is available on various devices including iPhone, iPad, Apple TV, and select smart TVs.",
    },
    {
      question: "What does it cost?",
      answer: "Apple TV+ costs $4.99 per month after a free 7-day trial.",
    },
    {
      question: "Can I share with my family?",
      answer:
        "Yes, you can share Apple TV+ with up to five family members through Family Sharing.",
    },
    {
      question: "Are there commercials? And can I watch on demand?",
      answer: "Apple TV+ is ad-free and all content is available on demand.",
    },
    {
      question: "Do I need an Apple TV 4K?",
      answer:
        "No, you don't need an Apple TV 4K device. You can watch on various devices that support the Apple TV app.",
    },
    {
      question: "Can I download to watch offline?",
      answer:
        "Yes, you can download Apple TV+ content to watch offline on supported devices.",
    },
  ];

  return (
    <div className="max-w-4xl p-4 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">
        Questions? Answers.
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;
