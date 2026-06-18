"use client";

import { useState, useEffect } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

function Counter({ target, duration = 2000 }: { target: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}</span>;
}

export function Hero() {
  return (
    <section className="relative text-slate-900 py-10 md:py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] rounded-full bg-amber-100/50 blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[40%] rounded-full bg-orange-100/50 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 border border-amber-100 text-amber-600 text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>Proven Digital Marketing in UAE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight text-slate-900">
              We Generated <br />
              <span className="text-amber-600 inline-block">
                <Counter target={87} /> Qualified Leads
              </span> <br />
              in 30 Days.
            </h1>
            
            <p className="text-slate-600 text-lg md:text-xl max-w-lg leading-relaxed">
              Stop guessing. Start closing. Discover how our data-driven social media and paid campaigns scale real estate businesses.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-lg px-8 h-14 font-bold text-lg shadow-lg shadow-amber-500/20 w-full sm:w-auto transition-all group">
                Get Your Free Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="rounded-lg px-8 h-14 font-bold text-lg text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900 w-full sm:w-auto transition-all shadow-sm">
                View All Packages
              </Button>
            </div>
          </motion.div>
          
          {/* Hero Banner Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-lg rounded-lg shadow-2xl shadow-slate-300/50 overflow-hidden border-4 border-white">
              <img 
                src="/image/leads%20hero%20image.jpeg" 
                alt="Ziron Pro Leads Generation Banner" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
