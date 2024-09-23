import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
    return (
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Frequently Asked Questions</h2>
                <Accordion className="w-full max-w-2xl mx-auto" type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How can I join IEEE RAS?</AccordionTrigger>
                        <AccordionContent>
                            To join IEEE RAS, attend one of our general meetings or events, and speak with a club officer. You can also sign up through our university's student organization portal.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Do I need prior experience in robotics?</AccordionTrigger>
                        <AccordionContent>
                            No prior experience is required! We welcome members of all skill levels and provide opportunities to learn and grow your robotics knowledge.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How often does the club meet?</AccordionTrigger>
                        <AccordionContent>
                            We have general meetings twice a month, with additional project-specific meetings and workshops scheduled as needed.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Can I propose my own project ideas?</AccordionTrigger>
                        <AccordionContent>
                            We encourage members to bring their ideas and initiatives. You can present your project proposal during our general meetings or discuss it with the club officers.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
