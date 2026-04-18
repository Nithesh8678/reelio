"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { About as AboutSection } from "@/components/sections/About";
import { motion } from "motion/react";
import { Cog, Lightbulb, BrainCircuit, ClipboardCheck } from "lucide-react";
import { aboutCopy, aboutMetrics, corePhilosophy } from "@/content/site-content";

const philosophyIconMap = {
  engine: Cog,
  precision: Lightbulb,
  intelligence: BrainCircuit,
  outcome: ClipboardCheck,
};

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32">
        <AboutSection />

        <section className="border-t border-white/5 bg-reelio-black py-32">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 md:grid-cols-12 md:items-start">
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                className="border border-white/10 bg-white/[0.03] p-8 md:col-span-7 md:p-10"
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Full-cycle partner</p>
                <p className="text-2xl font-heading font-bold leading-tight text-white md:text-4xl">
                  {aboutCopy.fullCycle}
                </p>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.1 }}
                className="border border-white/10 bg-white/[0.02] p-8 md:col-span-5 md:p-10"
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">How Reelio started</p>
                <p className="text-white/70 leading-relaxed">{aboutCopy.origin}</p>
              </motion.article>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {aboutMetrics.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="border border-white/10 bg-reelio-dark px-6 py-7"
                >
                  <p className="mb-2 text-4xl font-heading font-bold text-white">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.26em] text-white/45">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/5 bg-reelio-dark py-32">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 12% 10%, rgba(34,211,238,0.18), transparent 38%), radial-gradient(circle at 88% 80%, rgba(251,113,133,0.18), transparent 40%)",
            }}
          />

          <div className="container relative mx-auto px-6">
            <div className="mb-14 max-w-3xl">
              <p className="mb-5 text-sm font-bold tracking-[0.4em] text-primary uppercase">Core Philosophy</p>
              <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight text-white">
                THE SYSTEM THAT POWERS
                <span className="block italic text-primary">REELIO EXECUTION</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {corePhilosophy.map((item, i) => {
                const Icon = philosophyIconMap[item.id as keyof typeof philosophyIconMap] ?? Cog;

                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: i * 0.1 }}
                    className="relative overflow-hidden border border-white/10 bg-black/35 p-8 md:p-10"
                    style={{ boxShadow: `inset 0 0 0 1px ${item.accent}4D` }}
                  >
                    <div className="mb-6 inline-flex items-center justify-center border p-3" style={{ borderColor: `${item.accent}88` }}>
                      <Icon className="h-6 w-6" style={{ color: item.accent }} />
                    </div>
                    <h3 className="mb-4 text-3xl font-heading font-bold text-white">{item.title}</h3>
                    <p className="leading-relaxed text-white/75">{item.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
