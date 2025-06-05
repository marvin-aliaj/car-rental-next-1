"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQ() {
  const faqItems = [
    {
      question: "What documents do I need to rent a car?",
      answer:
        "You’ll need a valid driver’s license, a credit card in your name, and proof of insurance. If you’re renting from abroad, make sure to bring any required international permits.",
    },
    {
      question: "Can I change or cancel my booking?",
      answer:
        "Absolutely. You can change or cancel your booking by contacting our support team. We recommend reaching out as early as possible for the best flexibility.",
    },
    {
      question: "Does the price include insurance?",
      answer:
        "Yes, basic coverage is included. For extra protection, we offer optional insurance packages during checkout or at pickup.",
    },
    {
      question: "How does your fuel policy work?",
      answer:
        "We operate on a full-to-full policy. Just return the car with a full tank like you received it to avoid extra charges.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about our rental process, policies, and
            more.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-neutral-200 rounded-xl shadow-sm"
              >
                <AccordionTrigger className="flex justify-between items-center w-full px-6 py-5 text-left text-lg font-semibold text-neutral-800 hover:bg-neutral-100 transition">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 text-neutral-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-neutral-600 text-base mb-5">
            Can’t find the answer you’re looking for?
          </p>
          <Link href="/contact-us">
            <Button className="bg-primary text-white text-base px-6 py-3 rounded-lg shadow-md hover:bg-primary/90 transition">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
