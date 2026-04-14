"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { About as AboutSection } from "@/components/sections/About";
import { motion } from "motion/react";
import { whatsappUrl } from "@/content/site-content";

const values = [
  {
    title: "Boldness",
    kicker: "Lead Value",
    desc: "We move before consensus. Boldness is how we unlock category attention for brands that want to lead, not follow.",
  },
  {
    title: "Precision",
    kicker: "Execution Standard",
    desc: "Every frame, headline, and CTA is mapped to a measurable objective. Art direction with analytical intent.",
  },
  {
    title: "Impact",
    kicker: "Business Outcome",
    desc: "Creative only counts when it changes outcomes. We optimize for influence, conversion, and long-term brand equity.",
  },
];

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32">
        <AboutSection />

        <section className="border-t border-white/5 bg-reelio-black py-32">
          <div className="container mx-auto px-6">
            <div className="mb-16 max-w-3xl">
              <p className="mb-5 text-sm font-bold tracking-[0.4em] text-primary uppercase">Manifesto</p>
              <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight text-white">
                BUILT FOR BRANDS THAT
                <span className="block italic text-primary">REFUSE AVERAGE</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-12">
              {values.map((value, i) => {
                const isLead = i === 0;

                return (
                  <motion.article
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: i * 0.12 }}
                    className={`relative overflow-hidden border border-white/10 p-8 md:p-10 ${
                      isLead
                        ? "md:col-span-7 bg-gradient-to-br from-primary/20 via-primary/8 to-transparent"
                        : "md:col-span-5 bg-white/[0.02]"
                    }`}
                  >
                    <div className="mb-5 text-[11px] uppercase tracking-[0.28em] text-white/60">{value.kicker}</div>
                    <h3 className={`mb-6 font-heading font-bold ${isLead ? "text-5xl md:text-6xl text-white" : "text-3xl text-primary"}`}>
                      {value.title}
                    </h3>
                    <p className={`leading-relaxed ${isLead ? "max-w-xl text-white/85 text-lg" : "text-white/70"}`}>
                      {value.desc}
                    </p>

                    {isLead ? (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-3 border border-primary/60 px-5 py-3 text-xs font-bold uppercase tracking-[0.28em] text-white transition-colors hover:bg-primary"
                      >
                        Talk on WhatsApp
                      </a>
                    ) : null}
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-16 grid gap-6 border-t border-white/10 pt-12 md:grid-cols-3">
              {[
                "Strategy in 48h, not 4 weeks",
                "Creative systems, not one-off campaigns",
                "Performance visibility from day one",
              ].map((line, idx) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-sm uppercase tracking-[0.22em] text-white/60"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
