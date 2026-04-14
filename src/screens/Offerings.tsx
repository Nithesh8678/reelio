"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { Offerings as OfferingsSection } from "@/components/sections/Offerings";
import { motion } from "motion/react";

const steps = [
  { step: "01", title: "Discovery", desc: "Deep dive into your brand DNA and market landscape." },
  { step: "02", title: "Strategy", desc: "Crafting a data-backed roadmap for digital dominance." },
  { step: "03", title: "Execution", desc: "High-end production and performance marketing launch." },
  { step: "04", title: "Optimization", desc: "Continuous analysis and scaling for maximum ROI." },
];

export default function Offerings() {
  return (
    <PageTransition>
      <div className="pt-32">
        <OfferingsSection />

        <section className="py-32 bg-reelio-dark/80">
          <div className="container mx-auto px-6">
            <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-24 text-center">Our Process</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group overflow-hidden border border-white/10 bg-white/[0.02] p-7"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 mb-8 text-8xl font-heading font-bold text-white/10 group-hover:text-primary/35 transition-colors duration-500">
                    {item.step}
                  </div>
                  <h4 className="relative z-10 mb-4 text-2xl font-heading font-bold text-white">{item.title}</h4>
                  <p className="relative z-10 text-white/55 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
