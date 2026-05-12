import React from "react";
import { Users, Clock, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <Users className="h-8 w-8 text-black" />,
    title: "1. Request Staff",
    desc: "Submit your workforce request, detailing the roles, skills, and volume you need.",
  },
  {
    icon: <Clock className="h-8 w-8 text-black" />,
    title: "2. Deploy Agents",
    desc: "AtlasPoint assigns pre-trained staff from our curated talent pool within 48 hours.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-black" />,
    title: "3. Scale Operations",
    desc: "Your new team begins immediately. Scale up or down easily without hiring friction.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            How AtlasPoint Works
          </h2>
          <p className="text-lg text-neutral-600">
            From request to deployment in three simple steps.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-neutral-100 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-neutral-50 rounded-full flex items-center justify-center shadow-sm mb-6 transition-transform group-hover:scale-110 group-hover:border-[#e6ff4b]/30">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
