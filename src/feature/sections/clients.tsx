import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function Clients() {
  const clientLogos = [
    { name: "100 Power", src: "/assets/clients/100-power.png" },
    { name: "Direct LS", src: "/assets/clients/direct-ls.svg" },
    { name: "M2Mtek", src: "/assets/clients/m2mtek.png" },
    { name: "Maxline", src: "/assets/clients/maxline.png" },
    { name: "MC", src: "/assets/clients/mc.svg" },
    { name: "Piptan", src: "/assets/clients/piptan.png" },
    { name: "Qordz", src: "/assets/clients/qordz.svg" },
    { name: "Simply KF", src: "/assets/clients/simply-kf.png" },
    { name: "Smart Kitchen", src: "/assets/clients/smart-kitchen.png" },
    { name: "Sphere IT", src: "/assets/clients/sphere-it.svg" },
  ];

  return (
    <section className="bg-white py-12 md:py-20 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h4 className="text-center text-sm font-medium text-gray-500 mb-10">
          Trusted by 100+ Businesses Across UAE
        </h4>
        
        <div className="relative">
          <Carousel 
            autoScroll={true}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {clientLogos.map((logo, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="flex items-center justify-center p-2 h-20 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image 
                      src={logo.src} 
                      alt={logo.name} 
                      width={160} 
                      height={80} 
                      className="w-auto h-8 sm:h-10 object-contain" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
