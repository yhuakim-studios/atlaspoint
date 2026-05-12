import React from "react";
import { Activity, ShoppingCart, Zap, Globe, Shield } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-10 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-neutral-500 tracking-wider uppercase mb-8">
          Trusted by fast-growing companies in Fintech, SaaS & E-commerce
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale mb-12">
          {/* Logo placeholders using text & icons to simulate brands */}
          <div className="flex items-center gap-2 font-bold text-xl">
            <Activity className="h-6 w-6" /> FinScale
          </div>
          <div className="flex items-center gap-2 font-bold text-xl">
            <ShoppingCart className="h-6 w-6" /> ShopFlow
          </div>
          <div className="flex items-center gap-2 font-bold text-xl">
            <Zap className="h-6 w-6" /> BoltSaaS
          </div>
          <div className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6" /> LogixGlobal
          </div>
          <div className="hidden md:flex items-center gap-2 font-bold text-xl">
            <Shield className="h-6 w-6" /> SecurePay
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div className="p-4">
            <div className="text-4xl font-extrabold text-black mb-2">
              500+
            </div>
            <div className="text-neutral-600 font-medium">
              Trained Agents Deployed
            </div>
          </div>
          <div className="p-4 md:border-x border-neutral-200">
            <div className="text-4xl font-extrabold text-black mb-2">
              200+
            </div>
            <div className="text-neutral-600 font-medium">Companies Served</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-extrabold text-black mb-2">
              96%
            </div>
            <div className="text-neutral-600 font-medium">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
