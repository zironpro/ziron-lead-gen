import { Gift, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="bg-white pt-10 md:pt-14 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md lg:max-w-5xl">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-[2px] w-12 md:w-16 bg-[#FF6B00]"></div>
          <h2 className="text-gray-900 font-bold text-[13px] md:text-sm tracking-widest uppercase">
            What's Included
          </h2>
          <div className="h-[2px] w-12 md:w-16 bg-[#FF6B00]"></div>
        </div>

        {/* Pricing Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-0 lg:bg-white lg:border lg:border-gray-100 lg:shadow-xl lg:shadow-gray-200/40 lg:rounded-[2rem] overflow-hidden">
          
          {/* Left Column: Info & Price */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 lg:p-14 lg:bg-gray-50/50">
            {/* Gift Icon */}
            <div className="w-20 h-20 rounded-full border-[1.5px] border-[#FF6B00]/30 flex items-center justify-center mb-6 bg-white shadow-sm">
              <Gift className="w-8 h-8 text-[#FF6B00]" strokeWidth={1.5} />
            </div>
            
            {/* Title */}
            <h3 className="text-[22px] md:text-2xl lg:text-3xl font-black text-gray-900 uppercase text-center lg:text-left mb-4 tracking-tight leading-snug w-full max-w-[280px] lg:max-w-none">
              Social Media<br className="hidden md:block lg:hidden"/> Management Packages
            </h3>
            
            {/* Price */}
            <p className="text-gray-500 text-[15px] mb-1">Starting From</p>
            <div className="flex flex-col items-center lg:items-start justify-center mb-10 w-full">
              <span className="text-gray-400 text-lg md:text-xl font-semibold line-through mb-1 decoration-gray-300 decoration-2">
                AED 6,500
              </span>
              <div className="flex items-baseline justify-center lg:justify-start gap-1">
                <span className="text-4xl md:text-5xl font-extrabold text-[#FF6B00] tracking-tight">AED 2,500</span>
                <div className="flex flex-col justify-end h-full">
                   <span className="text-gray-600 text-xs md:text-sm font-medium ml-1">/ month</span>
                </div>
              </div>
            </div>

            {/* Button (Desktop only here, mobile at bottom) */}
            <Button className="hidden lg:flex bg-[#0B1221] hover:bg-gray-900 text-white px-8 h-14 rounded-md font-medium text-base gap-2 group w-full sm:w-auto shadow-lg shadow-gray-900/10 mt-auto">
              View All Packages 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Column: Features List */}
          <div className="w-full lg:w-1/2 flex flex-col lg:p-14 bg-white lg:border-l lg:border-gray-100">
            <h4 className="hidden lg:block text-lg font-bold text-gray-900 mb-8">Package Features</h4>
            <div className="w-full flex flex-col gap-4 pl-4 md:pl-8 lg:pl-0 mb-12 lg:mb-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-[22px] h-[22px] text-[#FF6B00] shrink-0 mt-[2px]" strokeWidth={1.5} />
                  <span className="text-gray-800 text-[15px] md:text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Button (Mobile only here) */}
            <Button className="lg:hidden bg-[#0B1221] hover:bg-gray-900 text-white px-8 h-14 rounded-md font-medium text-base gap-2 group w-full shadow-lg shadow-gray-900/10">
              View All Packages 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
        
      </div>
    </section>
  );
}
