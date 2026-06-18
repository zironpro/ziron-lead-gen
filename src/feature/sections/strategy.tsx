"use client";

import { Users, MonitorPlay, Megaphone, Target, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export function Strategy() {
  const steps = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Research & Audit",
      description: "We studied their market, audience & competitors to find the gaps."
    },
    {
      icon: <MonitorPlay className="w-6 h-6" />,
      title: "Content Creation",
      description: "High-quality posts, reels & property videos that build trust."
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Paid Campaigns",
      description: "Targeted ads designed to reach serious, high-intent property buyers."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead Generation",
      description: "Optimized campaigns that consistently bring qualified inquiries."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50 mb-6 px-4 py-1 text-sm font-semibold tracking-wider">
            Our Strategy
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            The 4-Step Growth Blueprint
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left relative group"
            >
              
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mt-3 mb-6 relative z-10 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm border border-amber-100 group-hover:shadow-amber-200/50 group-hover:shadow-lg">
                <div className="transition-colors duration-300">
                  {step.icon}
                </div>
                
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-[3px] border-white shadow-sm z-20">
                  {index + 1}
                </div>
              </div>

              {/* Arrow linking to next step (Hidden on mobile, only between items on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[4.5rem] w-[calc(100%-3rem)] h-[2px] bg-slate-100 z-0 overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-amber-200"
                  />
                  {/* Arrowhead */}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-slate-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              )}

              {/* Text Content */}
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h4>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
