import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-[#0B1221] text-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 z-10">
            <h3 className="text-[#FF6B00] font-semibold text-sm tracking-widest uppercase">
              Success Story
            </h3>
            
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.15] tracking-tight">
              How We Generated <br />
              <span className="text-[#FF6B00]">87 Qualified Leads</span> <br />
              in 30 Days
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-white/90 pt-2">
              For a UAE Real Estate Company
            </h2>
            
            <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
              Through a result-driven social media strategy, content creation & paid campaigns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-[#FF6B00] hover:bg-[#e66000] text-white px-8 h-14 rounded-md font-medium text-base gap-2 border-0">
                Get Your Free Audit
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button variant="outline" className="bg-transparent border-white/20 hover:bg-white/5 hover:border-white/40 hover:text-white text-white px-8 h-14 rounded-md font-medium text-base gap-2">
                <Phone className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
          
          {/* Phone Mockup Image / Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
            {/* The placeholder phone image was removed. You can insert an <Image /> component here later. */}
          </div>
        </div>
      </div>
    </section>
  );
}
