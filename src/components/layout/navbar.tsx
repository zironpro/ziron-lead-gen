import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center h-full">
          <Image 
            src="/assets/logo.svg" 
            alt="Ziron Pro Logo" 
            width={605} 
            height={110} 
            className="w-40 sm:w-48 md:w-52 lg:w-60 h-auto object-contain object-left"
            priority
          />
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button 
            variant="outline" 
            className="hidden sm:flex rounded-full border-green-600/30 text-gray-800 hover:bg-green-50 hover:text-green-700 h-10 px-5 gap-2 transition-colors font-medium"
          >
            <Phone className="w-4 h-4 text-green-600" />
            WhatsApp Us
          </Button>
          
          <button className="p-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors rounded-md">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
  );
}
