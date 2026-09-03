import React from "react";
import { PageType, ModalType } from "@/types";
import { Logo } from "./Navbar";

export function Footer({
  onNavigate,
  onOpenModal,
}: {
  onNavigate: (page: PageType) => void;
  onOpenModal: (type: ModalType) => void;
}) {
  return (
    <footer className="pt-16 pb-12 bg-[#07160D] text-white border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand & Corporate Info */}
          <div className="col-span-2 md:col-span-2 space-y-4 pr-0 md:pr-6">
            <Logo size="md" dark={true} onClick={() => onNavigate("home")} />
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              <strong>QUICKPRESS TECHNOLOGIES & SERVICES PRIVATE LIMITED</strong><br />
              Building connected on-demand services and smart delivery infrastructure. Built by friends, driven by ambition.
            </p>
            <div className="text-xs text-emerald-300/80 space-y-1 pt-1">
              <p className="text-[11px] leading-relaxed">
                📍 <strong>Registered Office:</strong> Unit 406 Tower B, Bhutani Alphathum, Sector 90, Noida 201305, Uttar Pradesh, India
              </p>
              <p className="text-[11px]">
                ✉️ <strong>Official Email:</strong>{" "}
                <a href="mailto:official.quickpress@gmail.com" className="text-emerald-300 underline hover:text-white">
                  official.quickpress@gmail.com
                </a>
              </p>
            </div>
            <div className="flex gap-2.5 pt-2">
              {[
                { name: "X", label: "𝕏" },
                { name: "LinkedIn", label: "in" },
                { name: "Instagram", label: "ig" },
                { name: "GitHub", label: "gh" },
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-xs font-bold text-emerald-300 hover:bg-emerald-800 hover:text-white transition-all"
                  aria-label={s.name}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Company */}
          <div>
            <h5 className="text-xs font-black tracking-wider uppercase text-emerald-400 mb-4">
              Company
            </h5>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Story & Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Services & Rates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("how-it-works")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("ecosystem")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Live Ecosystem
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Partners */}
          <div>
            <h5 className="text-xs font-black tracking-wider uppercase text-emerald-400 mb-4">
              Partners
            </h5>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <button
                  onClick={() => onNavigate("partners")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Become a Partner
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("partners")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Earnings Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("partners")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Fleet & Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("contact")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Partner Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div>
            <h5 className="text-xs font-black tracking-wider uppercase text-emerald-400 mb-4">
              Support
            </h5>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <button
                  onClick={() => onOpenModal("contact")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="mailto:official.quickpress@gmail.com" className="hover:text-white transition-colors text-left">
                  Email Support
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("booking")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Instant Booking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Quality Guarantee
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/60">
          <p>© 2026 QUICKPRESS TECHNOLOGIES & SERVICES PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-live-dot" />
            <span className="text-emerald-300 font-medium">Noida Hub Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
