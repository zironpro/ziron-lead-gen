export function Transformation() {
  return (
    <section className="bg-gray-50 py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[2px] w-12 bg-[#FF6B00]"></div>
          <h3 className="text-[#FF6B00] font-bold text-sm tracking-widest uppercase">
            Before & After
          </h3>
          <div className="h-[2px] w-12 bg-[#FF6B00]"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 tracking-tight">
          See The Transformation
        </h2>

        {/* Comparison Card Container */}
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-8 md:p-12 relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          
          {/* Before Column */}
          <div className="w-full md:w-5/12 flex flex-col items-center text-center">
            <h4 className="text-[#FF4A4A] text-xl font-bold mb-2">BEFORE</h4>
            <p className="text-gray-500 text-sm mb-8 h-10">
              Low engagement <br /> No consistent leads
            </p>
            
            {/* Fake IG Grid (Before) */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden w-full max-w-[260px] mx-auto shadow-sm mb-8">
              <div className="flex items-center justify-between p-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <div className="w-16 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="w-4 h-4 text-gray-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-0.5 bg-gray-100">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-200 relative">
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">Avg. Monthly Leads</div>
            <div className="text-4xl font-extrabold text-gray-900">5 - 8</div>
          </div>

          {/* Curved Arrow */}
          <div className="hidden md:flex absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-24 items-center justify-center text-gray-800">
            <svg viewBox="0 0 100 50" fill="none" className="w-full h-auto drop-shadow-sm overflow-visible">
              <path 
                d="M10,40 Q50,0 90,35" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                fill="none" 
                strokeLinecap="round" 
              />
              <path 
                d="M80,35 L90,35 L88,25" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
          
          {/* Mobile Arrow */}
          <div className="md:hidden flex justify-center text-gray-800 my-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>

          {/* After Column */}
          <div className="w-full md:w-5/12 flex flex-col items-center text-center">
            <h4 className="text-[#22C55E] text-xl font-bold mb-2">AFTER</h4>
            <p className="text-gray-900 text-sm mb-8 font-medium h-10">
              High engagement <br /> Consistent inquiries
            </p>
            
            {/* Fake IG Grid (After) */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden w-full max-w-[260px] mx-auto shadow-xl shadow-green-500/5 mb-8 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between p-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-[2px]">
                    <div className="w-full h-full bg-[#0B1221] rounded-full border-[1.5px] border-white"></div>
                  </div>
                  <div className="w-16 h-2 bg-gray-900 rounded"></div>
                </div>
                <div className="w-4 h-4 text-gray-900">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-0.5 bg-gray-100">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-800 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-80"></div>
                    <div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-white/30 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">Avg. Monthly Leads</div>
            <div className="text-4xl font-extrabold text-[#22C55E]">80+</div>
          </div>

        </div>
      </div>
    </section>
  );
}
