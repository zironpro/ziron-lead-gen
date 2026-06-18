"use client";

import { Users, CircleDollarSign, TrendingUp, UserPlus } from"lucide-react";
import { motion } from"motion/react";
import { Badge } from "@/components/ui/badge";

export function Results() {
 const metrics = [
 {
 icon: <Users className="w-7 h-7 text-white"strokeWidth={1.5} />,
 value:"87",
 label:"Qualified Leads",
 sublabel:"in 30 Days"
 },
 {
 icon: <CircleDollarSign className="w-7 h-7 text-white"strokeWidth={1.5} />,
 value:"AED 7.45",
 label:"Cost Per Lead",
 sublabel:"(Reduced by 46%)"
 },
 {
 icon: <TrendingUp className="w-7 h-7 text-white"strokeWidth={1.5} />,
 value:"+310%",
 label:"Increase in Reach",
 sublabel:"Organic & Paid"
 },
 {
 icon: <UserPlus className="w-7 h-7 text-white"strokeWidth={1.5} />,
 value:"23",
 label:"New Customers",
 sublabel:"Converted"
 }
 ];

 return (
 <section className="bg-slate-50 py-24 md:py-32">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1000px]">
 
 {/* Main Card Container */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden"
 >
 {/* Top Border Accent */}
 <div className="h-2 w-full bg-amber-500"></div>

 <div className="p-8 md:p-12">
 
 {/* Header */}
 <div className="text-center mb-12">
 <div className="flex flex-col items-center justify-center gap-4 w-full">
 <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50 mb-2 px-4 py-1 text-sm font-semibold tracking-wider">A Real Client Growth Story Backed by Results</Badge>
 <div className="flex items-center justify-center gap-4 w-full max-w-md mx-auto">
 <div className="h-px bg-slate-200 flex-1 hidden sm:block"></div>
 <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Data That Speaks Volumes.</h3>
 <div className="h-px bg-slate-200 flex-1 hidden sm:block"></div>
 </div>
 </div>
 </div>

 {/* 2x2 Mobile / 4-col Desktop Grid */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 relative">
 {metrics.map((metric, index) => (
 <div key={index} className="flex flex-col items-center text-center px-2">
 <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center mb-5 shadow-lg shadow-slate-900/20 hover:scale-110 transition-transform cursor-default">
 {metric.icon}
 </div>
 <div className="text-3xl md:text-4xl font-black text-amber-500 mb-2">{metric.value}</div>
 <div className="text-sm font-bold text-slate-900 leading-tight">{metric.label}</div>
 <div className="text-xs text-slate-500 mt-1">{metric.sublabel}</div>
 </div>
 ))}
 </div>

 {/* Performance Overview */}
 <div className="mt-16 border-t border-slate-100 pt-10">
 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
 <h4 className="text-base font-bold text-slate-900">Performance Overview</h4>
 </div>

 {/* Mini Stats Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
 <p className="text-xs text-slate-500 mb-1">Leads (WhatsApp)</p>
 <div className="flex items-end gap-3">
 <p className="text-2xl font-black text-slate-900">87</p>
 <p className="text-[11px] text-emerald-500 font-bold mb-1 bg-emerald-50 px-2 py-0.5 rounded-full">↑ 318%</p>
 </div>
 </div>
 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
 <p className="text-xs text-slate-500 mb-1">Cost per Lead</p>
 <div className="flex items-end gap-3">
 <p className="text-2xl font-black text-slate-900">AED 7.45</p>
 <p className="text-[11px] text-emerald-500 font-bold mb-1 bg-emerald-50 px-2 py-0.5 rounded-full">↓ 46%</p>
 </div>
 </div>
 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
 <p className="text-xs text-slate-500 mb-1">Amount Spent</p>
 <div className="flex flex-col">
 <p className="text-2xl font-black text-slate-900">AED 648.67</p>
 <p className="text-[10px] text-slate-400 font-medium mt-1">vs Apr 1 - Apr 30</p>
 </div>
 </div>
 </div>
 </div>

 </div>
 </motion.div>
 </div>
 </section>
 );
}
