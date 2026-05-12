import React from "react";
import { X, CheckCircle2 } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Hiring operational staff slows down growing companies.
          </h2>
          <p className="text-lg text-neutral-600">
            Stop wasting weeks on interviews and onboarding when your
            customers need support today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* The Old Way (Problem) */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="inline-flex items-center gap-2 text-red-600 font-semibold mb-6">
              <div className="p-1.5 rounded-full bg-red-100">
                <X className="h-4 w-4" />
              </div>
              The Old Way
            </div>
            <h3 className="text-2xl font-bold text-black mb-6">
              Hiring Chaos
            </h3>
            <ul className="space-y-4">
              {[
                "Sourcing candidates takes 3-4 weeks",
                "Training requires your internal resources",
                "High HR overhead & payroll taxes",
                "Customer support backlog builds up",
              ].map((item, i) => (
                <li key={i} className="flex items-start text-neutral-600">
                  <span className="mr-3 mt-1 h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-400 text-xs">
                    0{i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* The AtlasPoint Way (Solution) */}
          <div className="bg-black rounded-2xl p-8 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e6ff4b]/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="inline-flex items-center gap-2 text-[#e6ff4b] font-semibold mb-6">
              <div className="p-1.5 rounded-full bg-[#e6ff4b]/20">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              The AtlasPoint Solution
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Managed Deployment
            </h3>
            <ul className="space-y-4">
              {[
                "Pre-trained staff ready instantly",
                "Rapid deployment within 48 hours",
                "Fully managed workforce & payroll",
                "Built-in performance monitoring",
              ].map((item, i) => (
                <li key={i} className="flex items-start text-neutral-300">
                  <CheckCircle2 className="h-5 w-5 text-[#e6ff4b] mr-3 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
