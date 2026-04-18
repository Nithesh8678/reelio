"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { offeringsContent } from "@/content/site-content";
import { Check } from "lucide-react";

export function Offerings() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="offerings" className="relative bg-reelio-black">
      {/* Sticky Background Image Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={activeIndex}
            src={offeringsContent[activeIndex].image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        
        {/* Grain Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-reelio-black via-reelio-black/50 to-reelio-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-reelio-black via-transparent to-transparent opacity-80" />
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10 -mt-[100vh] container mx-auto px-6">
        <div className="pt-[15vh] pb-[20vh]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-[20vh] max-w-4xl"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-primary">Orbital Offerings Deck</p>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-bold leading-[0.88] text-white">
              A COSMIC MENU OF
              <span className="block italic text-primary">GROWTH MACHINES</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-[40vh] pb-[20vh]">
            {offeringsContent.map((offering, i) => (
              <motion.div
                key={offering.id}
                onViewportEnter={() => setActiveIndex(i)}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                className="grid lg:grid-cols-12 gap-8 items-center"
              >
                {/* Spacer for alternating layout on desktop */}
                <div className={`hidden lg:block lg:col-span-5 ${i % 2 === 0 ? "order-first" : "order-last"}`} />
                
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-15% 0px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-7 relative ${i % 2 === 0 ? "order-last" : "order-first"}`}
                >
                  <div 
                    className="absolute -inset-6 border border-white/5 bg-black/40 backdrop-blur-xl pointer-events-none -skew-y-1 sm:-skew-y-2 opacity-50"
                  />
                  <div className="relative z-10 p-6 sm:p-10 border border-white/10 bg-black/50 backdrop-blur-md hover:border-white/20 transition-all duration-500 overflow-hidden group">
                    
                    {/* Hover Glow */}
                    <div 
                      className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                      style={{ backgroundColor: offering.accent }}
                    />
                    
                    <div className="flex items-start justify-between mb-8 pb-6 border-b border-white/10">
                      <div>
                        <h4 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-2">{offering.title}</h4>
                        <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase" style={{ color: offering.accent }}>
                          {offering.label}
                        </p>
                      </div>
                      <span className="text-4xl md:text-6xl font-heading font-bold text-white/5 opacity-50 select-none">
                        0{i + 1}
                      </span>
                    </div>
                    
                    <p className="text-lg sm:text-xl text-white/90 mb-6 font-medium leading-snug max-w-xl">
                      {offering.shortDescription}
                    </p>
                    <p className="text-white/60 leading-relaxed mb-10 text-sm sm:text-base max-w-xl">
                      {offering.longDescription}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                      {offering.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-white/70" />
                          </div>
                          <span className="text-sm text-white/75">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
