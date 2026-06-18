"use client";

import { Users, CircleDollarSign, TrendingUp, UserPlus } from"lucide-react";
import { motion } from"motion/react";
import { Badge } from "@/components/ui/badge";

export function Results() {
 const metrics = [
 {
 icon: <Users className="w-6 h-6 text-white" strokeWidth={1.5} />,
 value:"87",
 label:"Qualified Leads",
 sublabel:"in 30 Days"
 },
 {
 icon: <CircleDollarSign className="w-6 h-6 text-white" strokeWidth={1.5} />,
 value:"AED 7.45",
 label:"Cost Per Lead",
 sublabel:"(Reduced by 46%)"
 },
 {
 icon: <TrendingUp className="w-6 h-6 text-white" strokeWidth={1.5} />,
 value:"+310%",
 label:"Increase in Reach",
 sublabel:"Organic & Paid"
 },
 {
 icon: <UserPlus className="w-6 h-6 text-white" strokeWidth={1.5} />,
 value:"23",
 label:"New Customers",
 sublabel:"Converted"
 }
 ];

 return (
 <section className="py-8 md:py-12">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1000px]">
 
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 
 {/* Header */}
 <div className="text-center mb-16 md:mb-20">
 <div className="flex flex-col items-center justify-center gap-4 w-full">
 <Badge className="bg-slate-900 text-white hover:bg-slate-800 border-none mb-6 px-4 py-1.5 text-xs font-semibold tracking-wider rounded-lg flex items-center justify-center w-fit mx-auto">
 <span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
 A Real Client Growth Story Backed by Results
 </Badge>
 <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
 Data That Speaks Volumes.
 </h2>
 </div>
 </div>

 {/* 2x2 Mobile / 4-col Desktop Grid Box */}
 <div className="bg-white rounded-lg p-6 md:p-10 border border-slate-200">
 <div className="grid grid-cols-2 md:grid-cols-4 relative">
 {metrics.map((metric, index) => (
 <div 
 key={index} 
 className={`flex flex-col items-center text-center p-4 sm:p-5 border-slate-100 ${
 index !== 3 ? 'md:border-r' : 'md:border-r-0'
 } ${
 index % 2 === 0 ? 'border-r' : ''
 } ${
 index < 2 ? 'border-b md:border-b-0' : ''
 }`}
 >
 <div className="w-14 h-14 rounded-lg bg-slate-950 flex items-center justify-center mb-4 shadow-lg shadow-slate-900/20 hover:scale-110 transition-transform cursor-default">
 {metric.icon}
 </div>
 <div className="text-2xl md:text-3xl font-black text-amber-500 mb-2">{metric.value}</div>
 <div className="text-sm font-bold text-slate-900 leading-tight">{metric.label}</div>
 <div className="text-xs text-slate-500 mt-1">{metric.sublabel}</div>
 </div>
 ))}
 </div>
 </div>

 </motion.div>
 </div>
 </section>
 );
}
