"use client";

import { motion } from "motion/react";
import { aboutCopy, aboutMetrics } from "@/content/site-content";

export function About() {
  return (
    <section id="about" className="py-32 bg-reelio-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-6">Who we are</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              CREATIVENESS + NUMBERS.
              <span className="block italic text-primary">RELEVANCE OVER VIRALITY.</span>
            </h3>
            <p className="text-lg text-white/70 leading-relaxed mb-6 max-w-2xl">
              {aboutCopy.intro}
            </p>
            <p className="text-lg text-white/62 leading-relaxed mb-12 max-w-2xl">
              {aboutCopy.supporting}
            </p>
            
            <div className="grid grid-cols-2 gap-12">
              {aboutMetrics.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl font-heading font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 border border-primary/20 -translate-x-6 translate-y-6" />
            <img
              src="https://picsum.photos/seed/agency/800/800"
              alt="Reelio Agency"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
