"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-[#e6ff4b] flex items-center justify-center">
              <span className="font-black text-black text-sm">A</span>
            </div>
            <span
              className={`font-bold text-xl tracking-tight ${isScrolled ? "text-white" : "text-black md:text-white"}`}
            >
              AtlasPoint
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div
              className={`flex gap-6 font-medium text-sm ${isScrolled ? "text-neutral-300" : "text-neutral-600 md:text-neutral-300"}`}
            >
              <a
                href="#how-it-works"
                className="hover:text-[#e6ff4b] transition-colors"
              >
                How it Works
              </a>
              <a
                href="#services"
                className="hover:text-[#e6ff4b] transition-colors"
              >
                Services
              </a>
              <a
                href="#pricing"
                className="hover:text-[#e6ff4b] transition-colors"
              >
                Pricing
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className={!isScrolled ? "hidden md:inline-flex" : ""}
              >
                Book Demo
              </Button>
              <Button variant="primary">Request Staff</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? "text-white" : "text-black md:text-white"}`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a
              href="#how-it-works"
              className="block px-3 py-3 text-base font-medium text-neutral-300 hover:bg-white/10 hover:text-white rounded-md transition-colors"
            >
              How it Works
            </a>
            <a
              href="#services"
              className="block px-3 py-3 text-base font-medium text-neutral-300 hover:bg-white/10 hover:text-white rounded-md transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="block px-3 py-3 text-base font-medium text-neutral-300 hover:bg-white/10 hover:text-white rounded-md transition-colors"
            >
              Pricing
            </a>
            <div className="pt-4 flex flex-col gap-3 px-3">
              <Button variant="outline" className="w-full justify-center">
                Book Demo
              </Button>
              <Button variant="primary" className="w-full justify-center">
                Request Staff
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
