import React from "react";
import Button from "./ui/Button";

const FinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(230,255,75,0.06)_0%,_transparent_60%)]"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Scale your operations without hiring delays.
        </h2>
        <p className="text-xl text-neutral-400 mb-10">
          Deploy trained agents within 48 hours. Let us handle the workforce
          while you focus on growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl">
            Request Staff
          </Button>
          <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
            Book Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
