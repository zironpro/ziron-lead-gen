import { Users, FileX, CalendarMinus, Target } from "lucide-react";

export function Challenge() {
  const items = [
    {
      icon: <Users className="w-6 h-6 text-gray-800" strokeWidth={1.5} />,
      title: "Low Engagement",
      description: "Very low likes, comments & reach"
    },
    {
      icon: <FileX className="w-6 h-6 text-gray-800" strokeWidth={1.5} />,
      title: "No Quality Leads",
      description: "No inquiries or property requests"
    },
    {
      icon: <CalendarMinus className="w-6 h-6 text-gray-800" strokeWidth={1.5} />,
      title: "Inconsistent Posting",
      description: "Random posting with no strategy"
    },
    {
      icon: <Target className="w-6 h-6 text-gray-800" strokeWidth={1.5} />,
      title: "Competitors Ahead",
      description: "Competitors were getting all the leads"
    }
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px]">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16 md:mb-20">
          <h3 className="text-[#FF6B00] font-bold text-xs md:text-sm tracking-widest uppercase mb-4">
            The Challenge
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            They Had a Great Business,<br className="hidden md:block" /> But No Leads From Social Media.
          </h2>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[1.5px] border-gray-200 flex items-center justify-center mb-5 md:mb-6 shadow-sm">
                {item.icon}
              </div>
              <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
                {item.title}
              </h4>
              <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed md:pr-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
