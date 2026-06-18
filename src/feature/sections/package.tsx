"use client";

import { Gift, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export function Package() {
  const features = [
    "12 Social Media Posts",
    "8 Stories",
    "4 Reels",
    "Graphic Design",
    "Content Calendar",
    "Posting & Account Management",
    "Monthly Performance Report"
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-16 text-center"
        >
          <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50 mb-6 px-4 py-1 text-sm font-semibold tracking-wider">
            What's Included
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Transparent Pricing.<br /> Unlimited Value.
          </h2>
        </motion.div>

        {/* Pricing Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center bg-white border border-slate-200 shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden relative"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50 z-0"></div>

          {/* Left Column: Info & Price */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 p-8 md:p-12 lg:p-16 bg-slate-50 relative z-10 border-b lg:border-b-0 lg:border-r border-slate-200">
            {/* Gift Icon */}
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-8 shadow-sm text-amber-600">
              <Gift className="w-8 h-8" />
            </div>
            
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight text-center lg:text-left">
              Social Media<br className="hidden md:block"/> Management
            </h3>
            
            {/* Price */}
            <p className="text-slate-500 font-medium mb-2">Starting From</p>
            <div className="flex flex-col items-center lg:items-start justify-center mb-10 w-full">
              <span className="text-slate-400 text-lg font-semibold line-through mb-1 decoration-slate-300 decoration-2">
                AED 6,500
              </span>
              <div className="flex items-baseline justify-center lg:justify-start gap-1">
                <span className="text-5xl md:text-6xl font-black text-amber-600 tracking-tight">AED 2,500</span>
                <span className="text-slate-500 font-semibold ml-2">/ month</span>
              </div>
            </div>

            {/* Button (Desktop only here, mobile at bottom) */}
            <Button className="hidden lg:flex bg-amber-600 hover:bg-amber-700 text-white px-8 h-14 rounded-full font-bold text-base gap-2 w-full mt-auto transition-all shadow-lg shadow-amber-600/20 group">
              View All Packages 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Column: Features List */}
          <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-12 lg:p-16 relative z-10 bg-white">
            <h4 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Everything you need to grow</h4>
            <div className="w-full flex flex-col gap-5 mb-12 lg:mb-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Button (Mobile only here) */}
            <Button className="lg:hidden bg-amber-600 hover:bg-amber-700 text-white px-8 h-14 rounded-full font-bold text-base gap-2 w-full mt-auto transition-all shadow-lg shadow-amber-600/20 group">
              View All Packages 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </motion.div>
        
      </div>
    </section>
  );
}
