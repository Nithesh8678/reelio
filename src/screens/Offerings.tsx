"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { Offerings as OfferingsSection } from "@/components/sections/Offerings";
import { motion } from "motion/react";

const steps = [
  {
    step: "01",
    title: "Signal Capture",
    desc: "We ingest your market pulse, audience behavior, and founder narrative into one command map.",
  },
  {
    step: "02",
    title: "Orbit Design",
    desc: "Creative systems are engineered with channel-specific arcs so every format amplifies the next.",
  },
  {
    step: "03",
    title: "Ignition",
    desc: "Campaigns, content, and paid loops launch in synchronized waves to maximize relevance windows.",
  },
  {
    step: "04",
    title: "Gravity Control",
    desc: "We tune retention, conversion, and authority scores continuously for compounding growth.",
  },
];

export default function Offerings() {
  return (
    <PageTransition>
      <div className="bg-reelio-black pt-28 md:pt-32">
        <OfferingsSection />

        <section className="relative overflow-hidden py-28 md:py-32">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 0%, rgba(227,30,36,0.22), transparent 42%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.16), transparent 46%)",
            }}
          />

          <div className="container relative mx-auto px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-primary">Launch Sequence</p>
              <h2 className="text-4xl font-heading font-bold leading-[0.9] text-white md:text-6xl">
                FROM FIRST SIGNAL TO
                <span className="block italic text-primary">MARKET GRAVITY</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm uppercase tracking-[0.22em] text-white/50">
                A high-precision workflow built to keep narrative, distribution, and performance in sync.
              </p>
            </div>

            <div className="relative mx-auto max-w-5xl">
              <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent md:left-1/2" />

              <div className="grid gap-8 md:gap-10">
                {steps.map((item, i) => {
                  const isRight = i % 2 === 1;

                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.45, delay: i * 0.08 }}
                      className={`relative md:flex ${isRight ? "md:justify-end" : ""}`}
                    >
                      <span className="absolute left-4 top-7 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_20px_rgba(227,30,36,0.8)] md:left-1/2" />

                      <article className="ml-10 border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:ml-0 md:w-[46%] md:p-7">
                        <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/55">Vector {item.step}</p>
                        <h3 className="mb-3 text-2xl font-heading font-bold text-white">{item.title}</h3>
                        <p className="leading-relaxed text-white/65">{item.desc}</p>
                      </article>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
