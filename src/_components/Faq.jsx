
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="space-y-4">
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is the app accessible?</AccordionTrigger>
            <AccordionContent>
              Yes, our app adheres to the WAI-ARIA design pattern to ensure accessibility.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>How can I book a doctor appointment?</AccordionTrigger>
            <AccordionContent>
              You can book appointments through our app by selecting your desired doctor, preferred date, and time slot.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>What do I do if I need to cancel my appointment?</AccordionTrigger>
            <AccordionContent>
              You can cancel appointments through the app;s appointment management section. Please ensure to cancel at least 24 hours in advance to avoid charges.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger>How can I see my appointment history?</AccordionTrigger>
            <AccordionContent>
              Your appointment history is available in the app under your profile or appointment section, where you can view past appointments and details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
