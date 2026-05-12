import React from "react";
import {
  ArrowRight,
  Headphones,
  MessageSquare,
  ShoppingCart,
  Activity,
  Briefcase,
  Shield,
} from "lucide-react";
import Button from "./ui/Button";

const services = [
  {
    icon: <Headphones />,
    title: "Customer Support",
    desc: "Handle L1/L2 tickets across Zendesk, Intercom, and Freshdesk.",
    useCase: "SaaS & Tech",
  },
  {
    icon: <MessageSquare />,
    title: "Live Chat Operators",
    desc: "Real-time website support to increase conversion and retention.",
    useCase: "E-commerce",
  },
  {
    icon: <ShoppingCart />,
    title: "Order Support",
    desc: "Manage refunds, tracking inquiries, and order modifications.",
    useCase: "Retail & Logistics",
  },
  {
    icon: <Activity />,
    title: "Call Center Agents",
    desc: "Inbound and outbound voice support with neutral accents.",
    useCase: "Fintech & Healthcare",
  },
  {
    icon: <Briefcase />,
    title: "Administrative Assts",
    desc: "Data entry, scheduling, and back-office operational tasks.",
    useCase: "Startups & Agencies",
  },
  {
    icon: <Shield />,
    title: "Trust & Safety",
    desc: "Content moderation, KYC verification, and fraud prevention.",
    useCase: "Marketplaces",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Roles We Fulfill
            </h2>
            <p className="text-lg text-neutral-600">
              Pre-vetted, trained professionals ready to integrate into your
              existing workflows.
            </p>
          </div>
          <Button variant="secondary" className="w-fit hidden md:flex">
            View Full Catalog
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md hover:border-[#e6ff4b]/40 transition-all group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-neutral-100 text-black flex items-center justify-center mb-5 group-hover:bg-[#e6ff4b] group-hover:text-black transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                {service.desc}
              </p>
              <div className="pt-4 border-t border-neutral-100 text-xs font-semibold text-neutral-500 uppercase tracking-wider flex justify-between items-center">
                <span>Ideal for: {service.useCase}</span>
                <ArrowRight className="h-4 w-4 text-[#e6ff4b] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </div>
          ))}
        </div>
        <Button variant="secondary" className="w-full mt-8 md:hidden">
          View Full Catalog
        </Button>
      </div>
    </section>
  );
};

export default Services;
