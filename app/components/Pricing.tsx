import React from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "./ui/Button";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Transparent, predictable scaling
          </h2>
          <p className="text-lg text-slate-600">
            No hidden HR fees. Pay a flat monthly rate per deployed agent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {/* Starter */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
            <p className="text-slate-500 text-sm mb-6">
              Perfect for early-stage startups.
            </p>
            <div className="text-3xl font-bold text-slate-900 mb-6">
              1 Agent{" "}
              <span className="text-lg font-normal text-slate-500">/mo</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-600 text-sm">
                <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" />{" "}
                Dedicated support agent
              </li>
              <li className="flex items-center text-slate-600 text-sm">
                <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Basic
                performance dashboard
              </li>
              <li className="flex items-center text-slate-600 text-sm">
                <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Email
                & Chat support
              </li>
            </ul>
            <Button variant="secondary" className="w-full">
              Request Pricing
            </Button>
          </div>

          {/* Growth (Highlighted) */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-500 relative transform md:-translate-y-4 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Growth</h3>
            <p className="text-slate-500 text-sm mb-6">
              For scaling teams with volume.
            </p>
            <div className="text-3xl font-bold text-slate-900 mb-6">
              3 Agents{" "}
              <span className="text-lg font-normal text-slate-500">/mo</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-600 text-sm">
                <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Fully
                managed team
              </li>
              <li className="flex items-center text-slate-600 text-sm">
                <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" />{" "}
                Advanced QA & monitoring
              </li>
              <li className="flex items-center text-slate-600 text-sm">
                <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" />{" "}
                Omnichannel support
              </li>
              <li className="flex items-center text-slate-600 text-sm">
                <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" />{" "}
                Dedicated account manager
              </li>
            </ul>
            <Button variant="primary" className="w-full">
              Request Pricing
            </Button>
          </div>

          {/* Scale */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Scale</h3>
            <p className="text-slate-500 text-sm mb-6">
              For enterprise operations.
            </p>
            <div className="text-3xl font-bold text-slate-900 mb-6">
              Custom
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-600 text-sm">
                <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> 10+
                Custom Agents
              </li>
              <li className="flex items-center text-slate-600 text-sm">
                <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Custom
                workflow integration
              </li>
              <li className="flex items-center text-slate-600 text-sm">
                <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Custom
                timezone coverage
              </li>
            </ul>
            <Button variant="secondary" className="w-full">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
