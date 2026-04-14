"use client";

import { Hero } from "@/components/sections/Hero";
import { PageTransition } from "@/components/layout/PageTransition";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      
      {/* Featured Work Section - Unique to Home */}
      <section className="py-32 bg-reelio-black">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">FEATURED <span className="text-primary italic">WORK</span></h2>
            <button className="group flex items-center gap-4 text-sm font-bold tracking-widest text-white/40 hover:text-primary transition-colors">
              VIEW ALL PROJECTS <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -20 }}
                className="group relative aspect-[16/10] overflow-hidden bg-reelio-dark"
              >
                <img
                  src={`https://picsum.photos/seed/work${i}/1200/800`}
                  alt="Project"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <span className="text-primary text-xs font-bold tracking-widest mb-4">DIGITAL CAMPAIGN</span>
                  <h3 className="text-4xl font-heading font-bold text-white mb-4">THE FUTURE OF REELIO</h3>
                  <p className="text-white/60 max-w-sm">A deep dive into the intersection of creativity and data-driven marketing.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
