import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

async function Faq() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUT_URL}/faqs`, {
    cache: "no-store",
  });

  const faqData = await response.json();

  return (
    <section className="container mx-auto px-2 pt-24 xl:pt-6">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl  font-semibold text-center mb-8 text-primary">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="max-w-4xl mx-auto rounded-lg  bg-muted px-4"
      >
        {faqData?.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="last:border-none"
          >
            <AccordionTrigger className="text-sm sm:text-base font-semibold text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-xs sm:text-sm text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default Faq;
