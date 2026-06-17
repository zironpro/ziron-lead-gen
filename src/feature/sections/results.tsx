import { Users, CircleDollarSign, TrendingUp, UserPlus } from "lucide-react";

export function Results() {
  return (
    <section className="bg-white pt-20 md:pt-28 pb-10 md:pb-14 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[2px] w-12 md:w-16 bg-[#FF6B00]"></div>
          <h2 className="text-gray-900 font-extrabold text-sm md:text-base tracking-widest uppercase">
            The Results
          </h2>
          <div className="h-[2px] w-12 md:w-16 bg-[#FF6B00]"></div>
        </div>

        {/* 2x2 Grid (Mobile) / 4-Col Grid (Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 gap-x-0 md:gap-x-0 mb-20 relative">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center px-2 md:px-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0B1221] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <Users className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-1 md:mb-2">87</div>
            <div className="text-[13px] md:text-sm font-semibold text-gray-900">Qualified Leads</div>
            <div className="text-[11px] md:text-xs text-gray-500 mt-1">in 30 Days</div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center px-2 md:px-6 relative">
            {/* Desktop Vertical Divider */}
            <div className="hidden md:block absolute left-0 top-4 bottom-4 w-[1px] bg-gray-100"></div>
            {/* Mobile Vertical Divider */}
            <div className="absolute left-0 md:hidden top-2 bottom-2 w-[1px] bg-gray-100"></div>
            
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0B1221] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <CircleDollarSign className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-1 md:mb-2">AED 7.45</div>
            <div className="text-[13px] md:text-sm font-semibold text-gray-900">Cost Per Lead</div>
            <div className="text-[11px] md:text-xs text-gray-500 mt-1 leading-tight">(Reduced by 46%)</div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center px-2 md:px-6 relative pt-12 md:pt-0">
            {/* Mobile Horizontal Divider */}
            <div className="md:hidden absolute top-0 left-4 right-4 h-[1px] bg-gray-100"></div>
            {/* Desktop Vertical Divider */}
            <div className="hidden md:block absolute left-0 top-4 bottom-4 w-[1px] bg-gray-100"></div>

            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0B1221] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-1 md:mb-2">+310%</div>
            <div className="text-[13px] md:text-sm font-semibold text-gray-900">Increase in Reach</div>
            <div className="text-[11px] md:text-xs text-transparent mt-1 select-none">spacer</div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center px-2 md:px-6 relative pt-12 md:pt-0">
            {/* Mobile Horizontal Divider */}
            <div className="md:hidden absolute top-0 left-4 right-4 h-[1px] bg-gray-100"></div>
            {/* Mobile Vertical Divider */}
            <div className="absolute left-0 md:hidden top-14 bottom-2 w-[1px] bg-gray-100"></div>
            {/* Desktop Vertical Divider */}
            <div className="hidden md:block absolute left-0 top-4 bottom-4 w-[1px] bg-gray-100"></div>

            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0B1221] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <UserPlus className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-1 md:mb-2">23</div>
            <div className="text-[13px] md:text-sm font-semibold text-gray-900">New Customers</div>
            <div className="text-[11px] md:text-xs text-gray-500 mt-1">Converted</div>
          </div>

        </div>



      </div>
    </section>
  );
}
