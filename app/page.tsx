"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  TrendingUp,
  Headphones,
  MessageSquare,
  ShoppingCart,
  Shield,
  Globe,
  Clock,
  BarChart3,
  Briefcase,
  Activity,
} from "lucide-react";

// --- Reusable Components ---

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  [key: string]: any;
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 text-sm sm:text-base";
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 shadow-blue-500/30 px-6 py-3",
    secondary:
      "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 px-6 py-3",
    outline:
      "bg-transparent text-white border border-white/20 hover:bg-white/10 px-6 py-3",
    ghost:
      "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-4 py-2",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left font-medium text-slate-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-slate-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-500" />
        )}
      </button>
      <div
        className={`mt-2 overflow-hidden text-slate-600 transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle sticky header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <span
                className={`font-bold text-xl tracking-tight ${isScrolled ? "text-slate-900" : "text-slate-900 md:text-white"}`}
              >
                AtlasPoint
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <div
                className={`flex gap-6 font-medium text-sm ${isScrolled ? "text-slate-600" : "text-slate-600 md:text-slate-200"}`}
              >
                <a
                  href="#how-it-works"
                  className="hover:text-blue-500 transition-colors"
                >
                  How it Works
                </a>
                <a
                  href="#services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#pricing"
                  className="hover:text-blue-500 transition-colors"
                >
                  Pricing
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant={isScrolled ? "ghost" : "outline"}
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
                className={`p-2 rounded-md ${isScrolled ? "text-slate-600" : "text-slate-900"}`}
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
          <div className="md:hidden bg-white border-t border-slate-200 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a
                href="#how-it-works"
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md"
              >
                How it Works
              </a>
              <a
                href="#services"
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md"
              >
                Services
              </a>
              <a
                href="#pricing"
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md"
              >
                Pricing
              </a>
              <div className="pt-4 flex flex-col gap-3 px-3">
                <Button variant="secondary" className="w-full justify-center">
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        {/* Abstract Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-125 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-indigo-600 blur-[100px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-medium mb-8 backdrop-blur-md">
            <Activity className="h-4 w-4" />
            <span>Deploy teams 60% faster than traditional hiring</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Deploy trained customer support teams in{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
              48 hours.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Scale your operations with pre-trained support staff. AtlasPoint
            handles the hiring, onboarding, and management so you can grow
            without HR overhead.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              className="w-full sm:w-auto text-lg px-8 py-4"
            >
              Request Staff <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-4"
            >
              Book Demo
            </Button>
          </div>

          {/* Hero Dashboard Mockup */}
          <div className="mt-16 relative max-w-5xl mx-auto perspective-1000">
            <div className="rounded-xl border border-white/10 bg-slate-800/80 shadow-2xl overflow-hidden backdrop-blur-xl transform transition-transform hover:scale-[1.01] duration-500">
              {/* Mockup Header */}
              <div className="flex items-center px-4 py-3 bg-slate-900/50 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto text-xs text-slate-400 font-medium bg-slate-800 px-3 py-1 rounded-md">
                  AtlasPoint Managed Dashboard
                </div>
              </div>
              {/* Mockup Content */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="col-span-1 md:col-span-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">
                      Active Deployments
                    </h3>
                    <span className="text-green-400 text-sm flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" /> All systems
                      optimal
                    </span>
                  </div>
                  {/* Mock Agents List */}
                  <div className="space-y-3">
                    {[
                      {
                        name: "Sarah J.",
                        role: "L1 Tech Support",
                        status: "Active",
                        time: "Deployed 2h ago",
                      },
                      {
                        name: "Marcus T.",
                        role: "Billing Specialist",
                        status: "Active",
                        time: "Deployed 12h ago",
                      },
                      {
                        name: "Elena R.",
                        role: "Live Chat Agent",
                        status: "In Training",
                        time: "Deploys in 14h",
                      },
                    ].map((agent, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                            {agent.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">
                              {agent.name}
                            </div>
                            <div className="text-xs text-slate-400">
                              {agent.role}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-blue-300">
                            {agent.status}
                          </div>
                          <div className="text-xs text-slate-500">
                            {agent.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-1 space-y-4">
                  <div className="p-4 rounded-lg bg-blue-600/20 border border-blue-500/30">
                    <div className="text-sm text-blue-200 mb-1">
                      Response Time Avg
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      1.4m
                    </div>
                    <div className="text-xs text-green-400 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> 42% faster vs
                      internal
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-sm text-slate-400 mb-1">
                      CSAT Score
                    </div>
                    <div className="text-3xl font-bold text-white">96.8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 tracking-wider uppercase mb-8">
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
              <div className="text-4xl font-extrabold text-blue-600 mb-2">
                500+
              </div>
              <div className="text-slate-600 font-medium">
                Trained Agents Deployed
              </div>
            </div>
            <div className="p-4 md:border-x border-slate-200">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">
                200+
              </div>
              <div className="text-slate-600 font-medium">Companies Served</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">
                96%
              </div>
              <div className="text-slate-600 font-medium">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Hiring operational staff slows down growing companies.
            </h2>
            <p className="text-lg text-slate-600">
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Hiring Chaos
              </h3>
              <ul className="space-y-4">
                {[
                  "Sourcing candidates takes 3-4 weeks",
                  "Training requires your internal resources",
                  "High HR overhead & payroll taxes",
                  "Customer support backlog builds up",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-600">
                    <span className="mr-3 mt-1 h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-400 text-xs">
                      0{i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* The AtlasPoint Way (Solution) */}
            <div className="bg-slate-900 rounded-2xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/30 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <div className="inline-flex items-center gap-2 text-blue-400 font-semibold mb-6">
                <div className="p-1.5 rounded-full bg-blue-500/20">
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
                  <li key={i} className="flex items-start text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How AtlasPoint Works
            </h2>
            <p className="text-lg text-slate-600">
              From request to deployment in three simple steps.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              {[
                {
                  icon: <Users className="h-8 w-8 text-blue-600" />,
                  title: "1. Request Staff",
                  desc: "Submit your workforce request, detailing the roles, skills, and volume you need.",
                },
                {
                  icon: <Clock className="h-8 w-8 text-blue-600" />,
                  title: "2. Deploy Agents",
                  desc: "AtlasPoint assigns pre-trained staff from our curated talent pool within 48 hours.",
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
                  title: "3. Scale Operations",
                  desc: "Your new team begins immediately. Scale up or down easily without hiring friction.",
                },
              ].map((step, i) => (
                <div key={i} className="text-center group">
                  <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-sm mb-6 transition-transform group-hover:scale-110 group-hover:border-blue-50">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Roles We Fulfill
              </h2>
              <p className="text-lg text-slate-600">
                Pre-vetted, trained professionals ready to integrate into your
                existing workflows.
              </p>
            </div>
            <Button variant="secondary" className="w-fit hidden md:flex">
              View Full Catalog
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider flex justify-between items-center">
                  <span>Ideal for: {service.useCase}</span>
                  <ArrowRight className="h-4 w-4 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            ))}
          </div>
          <Button variant="secondary" className="w-full mt-8 md:hidden">
            View Full Catalog
          </Button>
        </div>
      </section>

      {/* Case Study / Use Case */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4">
                Case Study: Fintech Startup
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Scaling support during hypergrowth
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                A leading digital wallet faced a massive support backlog after a
                viral marketing campaign. Traditional hiring couldn't keep up.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-sm text-slate-400 mb-1">
                    Before AtlasPoint
                  </div>
                  <div className="font-medium flex items-center text-red-400">
                    <X className="h-4 w-4 mr-1" /> 48h Response Time
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">
                    After 1 Week
                  </div>
                  <div className="text-white font-medium flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-1" /> &lt; 2h Response
                    Time
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mt-4">
                <p className="text-lg text-slate-200 italic mb-4">
                  "AtlasPoint helped us deploy a 20-person support team in less
                  than 48 hours. They saved our customer experience."
                </p>
                <footer className="text-sm text-slate-400">
                  — Sarah Jenkins, VP of Ops at FinScale
                </footer>
              </blockquote>
            </div>

            {/* Visual Side */}
            <div className="lg:w-1/2 bg-blue-600 relative min-h-100">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-indigo-700 opacity-90"></div>
              {/* Abstract dashboard lines */}
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl transform translate-x-4 lg:-translate-x-12">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-white font-semibold">
                      Ticket Volume vs Response Time
                    </div>
                    <Activity className="text-blue-200 h-5 w-5" />
                  </div>
                  {/* Fake Chart */}
                  <div className="h-32 flex items-end gap-2 mb-4">
                    {[40, 60, 80, 100, 90, 70, 50, 30, 20, 15, 10, 5].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-blue-300/30 rounded-t-sm relative group"
                        >
                          <div
                            className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-1000 ${i > 5 ? "bg-green-400/80" : "bg-red-400/80"}`}
                            style={{ height: `${h}%` }}
                          ></div>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="flex justify-between text-xs text-blue-200">
                    <span>Mon (Pre-AtlasPoint)</span>
                    <span>Sun (AtlasPoint Active)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
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

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
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

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden bg-blue-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Scale your operations without hiring delays.
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Deploy trained agents within 48 hours. Let us handle the workforce
            while you focus on growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-slate-50 w-full sm:w-auto text-lg px-8 py-4 shadow-xl">
              Request Staff
            </Button>
            <Button className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 w-full sm:w-auto text-lg px-8 py-4">
              Book Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">
                  AtlasPoint
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
                The managed workforce platform for modern startups. Deploy
                pre-trained support and operations staff in 48 hours.
              </p>
              <div className="flex space-x-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer">
                  in
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer">
                  tw
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Use Cases
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    ROI Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} AtlasPoint Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              All systems operational
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
