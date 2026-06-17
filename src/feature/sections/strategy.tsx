import { Users, MonitorPlay, Megaphone, Target, ChevronRight } from "lucide-react";

export function Strategy() {
  const steps = [
    {
      icon: <Users className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Research & Audit",
      description: "We studied their market, audience & competitors"
    },
    {
      icon: <MonitorPlay className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Content Creation",
      description: "High-quality posts, reels & property videos"
    },
    {
      icon: <Megaphone className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Paid Campaigns",
      description: "Targeted ads to reach serious property buyers"
    },
    {
      icon: <Target className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Lead Generation",
      description: "Optimized campaigns that bring qualified inquiries"
    }
  ];

  return (
    <section className="bg-[#0B1221] py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px]">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-[#FF6B00] font-semibold text-sm tracking-widest uppercase mb-4">
            Our Strategy
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our 4-Step Growth Strategy
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left relative group">
              
              {/* Icon Container */}
              <div className="w-24 h-24 md:w-20 md:h-20 rounded-full border border-gray-700 bg-[#0B1221] flex items-center justify-center mb-6 relative z-10 group-hover:border-[#FF6B00] group-hover:scale-110 transition-all duration-300">
                {step.icon}
              </div>
              
              {/* Arrow linking to next step (Hidden on mobile, only between items on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[6rem] w-[calc(100%-4rem)] h-[1px] bg-gray-700 z-0">
                  {/* Arrowhead */}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-gray-700">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              )}

              {/* Text Content */}
              <h4 className="text-lg md:text-xl font-bold text-white mb-3">
                {step.title}
              </h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed md:pr-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
