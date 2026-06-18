"use client";

import { 
  Image as ImageIcon, 
  Smartphone, 
  Video, 
  Palette, 
  Calendar, 
  Users, 
  BarChart3,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export function Package() {
  const features = [
    { text: "12 Social Media Posts", icon: ImageIcon },
    { text: "8 Stories", icon: Smartphone },
    { text: "4 Reels", icon: Video },
    { text: "Graphic Design", icon: Palette },
    { text: "Content Calendar", icon: Calendar },
    { text: "Posting & Account Management", icon: Users },
    { text: "Monthly Performance Report", icon: BarChart3 }
  ];

  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 relative border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-16 text-center"
        >
          <Badge className="bg-slate-900 text-white hover:bg-slate-800 border-none mb-6 px-4 py-1.5 text-xs font-semibold tracking-wider rounded-full">
            <span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
            What's Included
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Transparent Pricing.<br /> Unlimited Value.
          </h2>
        </motion.div>

        {/* Pricing Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[440px] bg-white rounded-2xl border border-slate-200 hover:border-amber-200 transition-colors duration-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden relative">
            
            {/* Gradient background layers */}
            <div className="absolute top-0 left-0 right-0 h-[400px] overflow-hidden pointer-events-none z-0 rounded-t-2xl">
              {/* Top blue hint */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-[200px] bg-blue-100/60 blur-[60px]" />
              {/* Sunset orange/yellow band behind button */}
              <div className="absolute top-[160px] -left-20 -right-20 h-[140px] bg-gradient-to-r from-orange-200/80 via-amber-200/80 to-orange-200/80 blur-[45px]" />
            </div>

            <div className="relative z-10 p-8 sm:p-10">
              {/* Title */}
              <h3 className="text-[26px] font-bold text-slate-900 mb-6 tracking-tight">
                Social Media Management
              </h3>
              
              {/* Price */}
              <div className="flex flex-col mb-10">
                <span className="text-slate-400 text-sm font-semibold line-through mb-1 decoration-2">
                  AED 6,500
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-[44px] leading-none font-extrabold text-slate-900 tracking-tight">
                    AED 2,500
                  </span>
                  <div className="flex flex-col text-slate-500 text-[13px] font-medium leading-[1.3]">
                    <span>per month</span>
                    <span>starting from</span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Button className="w-full bg-[#1c1c1c] hover:bg-black text-white rounded-[1.25rem] h-14 text-[15px] font-semibold mb-10 shadow-lg shadow-black/5 transition-all">
                View All Packages
              </Button>

              {/* Features List */}
              <div className="flex flex-col gap-[18px]">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 text-slate-700">
                      <Icon className="w-[22px] h-[22px] text-slate-500 stroke-[1.5]" />
                      <span className="font-medium text-[15px] tracking-tight">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
