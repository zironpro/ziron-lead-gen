"use client";

import { Users, FileX, CalendarMinus, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export function Challenge() {
  const items = [
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: "Low Engagement",
      description: "Very low likes, comments & reach, making the brand feel stagnant.",
      bgClass: "bg-amber-50/50 hover:bg-amber-50",
      borderClass: "hover:border-amber-200",
      iconBgClass: "group-hover:bg-amber-100"
    },
    {
      icon: <FileX className="w-6 h-6 text-rose-500" />,
      title: "No Quality Leads",
      description: "Zero inquiries or property requests from their social presence.",
      bgClass: "bg-rose-50/50 hover:bg-rose-50",
      borderClass: "hover:border-rose-200",
      iconBgClass: "group-hover:bg-rose-100"
    },
    {
      icon: <CalendarMinus className="w-6 h-6 text-blue-500" />,
      title: "Inconsistent Posting",
      description: "Random posting with no clear strategy or visual identity.",
      bgClass: "bg-blue-50/50 hover:bg-blue-50",
      borderClass: "hover:border-blue-200",
      iconBgClass: "group-hover:bg-blue-100"
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-500" />,
      title: "Competitors Ahead",
      description: "Competitors were capturing all the high-value real estate leads.",
      bgClass: "bg-emerald-50/50 hover:bg-emerald-50",
      borderClass: "hover:border-emerald-200",
      iconBgClass: "group-hover:bg-emerald-100"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 md:py-24 relative border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <Badge className="bg-slate-900 text-white hover:bg-slate-800 border-none mb-6 px-4 py-1.5 text-xs font-semibold tracking-wider rounded-full">
            <span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
            Before Working With Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Great Business,<br className="hidden md:block" /> But Zero Social Leads.
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Despite offering top-tier real estate services, their digital presence wasn't reflecting their true value.
          </p>
        </motion.div>

        {/* 4 Column Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {items.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className={`h-full border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-default ${item.bgClass} ${item.borderClass}`}>
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 ${item.iconBgClass}`}>
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
