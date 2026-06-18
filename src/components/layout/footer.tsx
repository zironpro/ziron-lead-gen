"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

// Inline SVGs for Socials
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t-[6px] border-amber-500 flex flex-col relative">
      
      {/* Top Dark Section */}
      <div className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"/>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
          
          {/* Top Section: Brand & Contact Split */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
            
            {/* Brand Info */}
            <div className="w-full lg:w-5/12">
              <div className="text-3xl font-black text-white mb-6 flex items-center">
                ZIRON<span className="text-amber-500 border border-amber-500/50 rounded px-2 ml-1 text-2xl bg-amber-500/10">PRO</span>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed font-medium mb-8 max-w-md">
                A friendly digital marketing company in Dubai. We build high-converting digital experiences that turn clicks into revenue.
              </p>
              <div className="flex items-center gap-3">
                {[LinkedinIcon, InstagramIcon, FacebookIcon, MessageCircle].map((Icon, idx) => (
                  <Link href="#" key={idx} className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-950 hover:bg-amber-500 hover:border-amber-500 transition-all duration-300">
                    <Icon className="w-5 h-5"/>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50 hover:border-slate-700 transition-colors">
                <p className="text-[11px] font-bold text-amber-500 tracking-wider mb-2">Email Us</p>
                <a href="mailto:growth@zironpro.ae" className="text-white font-medium text-lg hover:text-amber-400 transition-colors break-words">growth@zironpro.ae</a>
              </div>
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50 hover:border-slate-700 transition-colors">
                <p className="text-[11px] font-bold text-amber-500 tracking-wider mb-2">Visit Us</p>
                <p className="text-white font-medium text-lg leading-tight">Dubai, United Arab Emirates</p>
              </div>
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50 hover:border-slate-700 transition-colors">
                <p className="text-[11px] font-bold text-amber-500 tracking-wider mb-2">Landline</p>
                <a href="tel:+97126261205" className="text-white font-medium text-lg hover:text-amber-400 transition-colors">+971 2 626 1205</a>
              </div>
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50 hover:border-slate-700 transition-colors">
                <p className="text-[11px] font-bold text-amber-500 tracking-wider mb-2">Phone</p>
                <a href="tel:+971566646539" className="text-white font-medium text-lg hover:text-amber-400 transition-colors">+971 56 664 6539</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom White Section */}
      <div className="bg-white py-8 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
            
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-slate-500 font-medium">
              <p>© 2026 Ziron Pro Digital Solutions LLC.</p>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-amber-600 transition-colors">Terms of Service</Link>
              </div>
            </div>

            {/* Partner Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6">
              <Image 
                src="/assets/partner/google.svg" 
                alt="Google Partner badge by Ziron pro in Dubai" 
                width={120} 
                height={48} 
                className="h-10 w-auto object-contain"
              />
              <Image 
                src="/assets/partner/meta.svg" 
                alt="Meta Business Partner badge by Ziron pro in Dubai" 
                width={120} 
                height={48} 
                className="h-10 w-auto object-contain"
              />
              <Image 
                src="/assets/partner/tiktok.svg" 
                alt="TikTok Marketing Partner badge by Ziron pro in Dubai" 
                width={120} 
                height={48} 
                className="h-10 w-auto object-contain"
              />
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}
