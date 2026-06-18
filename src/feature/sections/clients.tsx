"use client";

import Image from "next/image"
import { motion } from "motion/react"
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
    <section className="py-8 md:py-12 border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.h4 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold tracking-wider text-slate-400 mb-8"
        >
          Trusted by 100+ Businesses Across UAE
        </motion.h4>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <Carousel 
            autoScroll={true}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full mask-image-fade"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {clientLogos.map((logo, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="flex items-center justify-center p-4 h-24 rounded-lg border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all duration-300 group cursor-default">
                    <Image 
                      src={logo.src} 
                      alt={logo.name} 
                      width={160} 
                      height={80} 
                      className="w-auto h-8 sm:h-10 object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .mask-image-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />
    </section>
  )
}
