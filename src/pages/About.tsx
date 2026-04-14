"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { About as AboutSection } from "@/components/sections/About";
import { motion } from "motion/react";

const values = [
  { title: "Boldness", desc: "We take risks where others see safety." },
  { title: "Precision", desc: "Data is our compass, creativity is our engine." },
  { title: "Impact", desc: "We don't just create; we move the needle." },
];

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32">
        <AboutSection />
        
        {/* Values Section */}
        <section className="py-32 bg-reelio-black border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-16">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative"
                >
                  <span className="text-[8rem] font-heading font-bold text-white/[0.03] absolute -top-20 -left-10 select-none">
                    0{i + 1}
                  </span>
                  <h4 className="text-3xl font-heading font-bold text-primary mb-6">{value.title}</h4>
                  <p className="text-xl text-white/50 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Big Statement Section */}
        <section className="py-64 bg-primary flex items-center justify-center text-center overflow-hidden">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-[12rem] font-heading font-bold text-white leading-none tracking-tighter"
          >
            WE ARE <br />
            <span className="italic">REELIO.</span>
          </motion.h2>
        </section>
      </div>
    </PageTransition>
  );
}
