import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#e6ff4b] flex items-center justify-center">
                <span className="font-black text-black text-sm">A</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                AtlasPoint
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs mb-6">
              The managed workforce platform for modern startups. Deploy
              pre-trained support and operations staff in 48 hours.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-[#e6ff4b] transition-colors cursor-pointer">
                in
              </div>
              <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-[#e6ff4b] transition-colors cursor-pointer">
                tw
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-[#e6ff4b] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#e6ff4b] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#e6ff4b] transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-[#e6ff4b] transition-colors">Use Cases</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-[#e6ff4b] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#e6ff4b] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#e6ff4b] transition-colors">ROI Calculator</a></li>
              <li><a href="#" className="hover:text-[#e6ff4b] transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-[#e6ff4b] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#e6ff4b] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#e6ff4b] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#e6ff4b] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#e6ff4b] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} AtlasPoint Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span className="w-2 h-2 rounded-full bg-[#e6ff4b]"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
