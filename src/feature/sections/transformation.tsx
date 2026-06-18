"use client";

import { motion } from"motion/react";
import { Badge } from"@/components/ui/badge";

export function Transformation() {
 return (
 <section className="bg-slate-50 pt-24 md:pt-32 pb-12 relative">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
 {/* Header */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="flex flex-col items-center justify-center mb-16 text-center"
 >
 <Badge variant="outline"className="text-amber-600 border-amber-200 bg-amber-50 mb-6 px-4 py-1 text-sm font-semibold tracking-wider">
 Before & After
 </Badge>
 <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
 See The Transformation
 </h2>
 </motion.div>

 {/* Comparison Card Container */}
 <motion.div 
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-16 relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8"
 >
 
 {/* Before Column */}
 <div className="w-full md:w-5/12 flex flex-col items-center text-center">
 <Badge variant="outline"className="bg-rose-50 text-rose-600 border-rose-200 mb-6">BEFORE</Badge>
 <p className="text-slate-500 text-sm mb-8 h-10 font-medium">
 Low engagement <br /> No consistent leads
 </p>
 
 {/* Fake IG Grid (Before) */}
 <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden w-full max-w-[260px] mx-auto shadow-sm mb-8 opacity-70 grayscale">
 <div className="flex items-center justify-between p-3 border-b border-slate-100">
 <div className="flex items-center gap-2">
 <div className="w-6 h-6 rounded-full bg-slate-200"></div>
 <div className="w-16 h-2 bg-slate-200 rounded"></div>
 </div>
 <div className="w-4 h-4 text-slate-300">
 <svg viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
 </div>
 </div>
 <div className="grid grid-cols-3 gap-0.5 bg-slate-100">
 {[...Array(9)].map((_, i) => (
 <div key={i} className="aspect-square bg-slate-200 relative"></div>
 ))}
 </div>
 </div>

 <div className="text-slate-400 text-xs font-bold tracking-wider mb-2">Avg. Monthly Leads</div>
 <div className="text-4xl font-extrabold text-slate-400">5 - 8</div>
 </div>

 {/* Curved Arrow (Desktop) */}
 <div className="hidden md:flex absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-32 items-center justify-center text-amber-300">
 <svg viewBox="0 0 100 50"fill="none"className="w-full h-auto drop-shadow-sm overflow-visible">
 <path d="M10,40 Q50,0 90,35"stroke="currentColor"strokeWidth="3"fill="none"strokeLinecap="round"strokeDasharray="6 6"/>
 <path d="M80,35 L90,35 L88,25"stroke="currentColor"strokeWidth="3"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
 </svg>
 </div>
 
 {/* Mobile Arrow */}
 <div className="md:hidden flex justify-center text-amber-300 my-4">
 <svg width="32"height="32"viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="3"strokeLinecap="round"strokeLinejoin="round"strokeDasharray="4 4">
 <path d="M12 5v14M19 12l-7 7-7-7"/>
 </svg>
 </div>

 {/* After Column */}
 <div className="w-full md:w-5/12 flex flex-col items-center text-center">
 <Badge variant="outline"className="bg-emerald-50 text-emerald-600 border-emerald-200 mb-6">AFTER</Badge>
 <p className="text-slate-900 text-sm mb-8 font-bold h-10">
 High engagement <br /> Consistent inquiries
 </p>
 
 {/* Fake IG Grid (After) */}
 <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden w-full max-w-[260px] mx-auto shadow-2xl shadow-amber-500/10 mb-8 transform hover:-translate-y-2 transition-transform duration-500">
 <div className="flex items-center justify-between p-3 border-b border-slate-100">
 <div className="flex items-center gap-2">
 <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 via-indigo-500 to-violet-500 p-[2px]">
 <div className="w-full h-full bg-white rounded-full border-[1.5px] border-white"></div>
 </div>
 <div className="w-16 h-2 bg-slate-900 rounded"></div>
 </div>
 <div className="w-4 h-4 text-slate-900">
 <svg viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
 </div>
 </div>
 <div className="grid grid-cols-3 gap-0.5 bg-slate-100">
 {[...Array(9)].map((_, i) => (
 <div key={i} className="aspect-square bg-amber-900 relative overflow-hidden group">
 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900/80 opacity-90"></div>
 <div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
 </div>
 ))}
 </div>
 </div>

 <div className="text-slate-500 text-xs font-bold tracking-wider mb-2">Avg. Monthly Leads</div>
 <div className="text-5xl font-black text-amber-600">80+</div>
 </div>

 </motion.div>
 </div>
 </section>
 );
}
