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

        {/* Process Section */}
        <section className="py-32 bg-reelio-dark">
          <div className="container mx-auto px-6">
            <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-24 text-center">Our Process</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((item, i) => (
                <div key={item.step} className="relative group">
                  <div className="text-8xl font-heading font-bold text-white/5 mb-8 group-hover:text-primary/20 transition-colors duration-500">
                    {item.step}
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-white mb-4">{item.title}</h4>
                  <p className="text-white/40 leading-relaxed">{item.desc}</p>
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
