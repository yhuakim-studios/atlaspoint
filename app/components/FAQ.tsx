"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left font-medium text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-neutral-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-neutral-500" />
        )}
      </button>
      <div
        className={`mt-2 overflow-hidden text-neutral-600 transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2">
          <FAQItem
            question="How quickly can staff be deployed?"
            answer="Once we understand your requirements and workflow, we can deploy pre-trained agents to your systems within 48 hours. For highly specialized roles, it may take up to 5 days."
          />
          <FAQItem
            question="What training do agents receive?"
            answer="All AtlasPoint agents undergo rigorous baseline training in customer communication, major helpdesk software (Zendesk, Intercom), and security protocols. We then do a rapid micro-onboarding specific to your company's knowledge base."
          />
          <FAQItem
            question="Can teams scale up or down?"
            answer="Yes. Our model is highly flexible. You can add agents during seasonal peaks or scale down when ticket volume decreases, without the legal or HR complexities of firing internal staff."
          />
          <FAQItem
            question="What tools do agents use?"
            answer="Our agents integrate directly into your existing tech stack. Whether you use Zendesk, Salesforce, Shopify, or internal admin panels, our staff operate within your ecosystem securely."
          />
          <FAQItem
            question="How are agents monitored?"
            answer="We provide a fully managed service. This means AtlasPoint has internal QA managers who review tickets, monitor response times, track CSAT scores, and provide ongoing coaching to ensure high performance."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
