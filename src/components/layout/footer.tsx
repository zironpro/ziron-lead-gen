"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-0 overflow-hidden text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Top Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-20">
          
          {/* Column 1: Logo & Tagline & Contacts */}
          <div className="flex flex-col gap-10 lg:col-span-2 pr-0 lg:pr-8">
            <div className="flex flex-col items-start gap-6">
              <Image 
                src="/assets/logo.svg" 
                alt="Ziron Pro Logo" 
                width={200} 
                height={36} 
                className="h-10 w-auto object-contain object-left mr-auto"
              />
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 max-w-md">
                We Build high-converting Digital Experiences That Convert Better, Faster.
              </h2>
            </div>
            
            <div className="flex flex-col gap-6">
               <div>
                  <p className="text-xs font-bold text-amber-600 mb-2 tracking-[0.15em] uppercase">Email.</p>
                  <a href="mailto:growth@zironpro.ae" className="text-lg font-medium text-slate-900 hover:text-amber-500 transition-colors">growth@zironpro.ae</a>
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-600 mb-2 tracking-[0.15em] uppercase">Landline.</p>
                  <a href="tel:+97126261205" className="text-lg font-medium text-slate-900 hover:text-amber-500 transition-colors">+971 2 626 1205</a>
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-600 mb-2 tracking-[0.15em] uppercase">Phone.</p>
                  <a href="tel:+971566646539" className="text-lg font-medium text-slate-900 hover:text-amber-500 transition-colors">+971 56 664 6539</a>
                </div>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold text-amber-600 mb-3 tracking-[0.15em] uppercase">Links.</p>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Home</Link>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">About</Link>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Products</Link>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Services</Link>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Contact</Link>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold text-amber-600 mb-3 tracking-[0.15em] uppercase">Services.</p>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Brand Strategy</Link>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Websites</Link>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Digital Marketing</Link>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Printing & Corporate Gifts</Link>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Motion Design</Link>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Full-stack marketing</Link>
          </div>

          {/* Column 4: Resources */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold text-amber-600 mb-3 tracking-[0.15em] uppercase">Resources.</p>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Our works</Link>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Industries</Link>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Blogs</Link>
            <Link href="#" className="text-base text-slate-800 hover:text-amber-500 font-medium transition-colors">Enquiry</Link>
          </div>

        </div>

        {/* Bottom Bar: Tagline & Partner Badges */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-200 py-8 gap-8">
           <h3 className="text-xl md:text-[22px] font-bold text-amber-500 max-w-sm leading-snug text-center md:text-left">
             A friendly digital marketing company in Dubai
           </h3>
           <div className="flex flex-wrap gap-6 items-center justify-center md:justify-end">
              <Image src="/assets/partner/google.svg" alt="Google Partner" width={120} height={40} className="h-8 w-auto object-contain hover:scale-105 transition-transform" />
              <Image src="/assets/partner/meta.svg" alt="Meta Partner" width={120} height={40} className="h-8 w-auto object-contain hover:scale-105 transition-transform" />
              <Image src="/assets/partner/tiktok.svg" alt="TikTok Partner" width={120} height={40} className="h-8 w-auto object-contain hover:scale-105 transition-transform" />
           </div>
        </div>

      </div>
    </footer>
  );
}
