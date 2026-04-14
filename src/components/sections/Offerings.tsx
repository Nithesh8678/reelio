"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clapperboard, Mic2, Megaphone, Speech, Sparkles, UserRound } from "lucide-react";
import { offeringsContent } from "@/content/site-content";

const iconMap = {
  pulse: Sparkles,
  feature: Clapperboard,
  voice: Mic2,
  catalyst: Megaphone,
  insights: Speech,
  persona: UserRound,
};

export function Offerings() {
  const [activeId, setActiveId] = useState(offeringsContent[0]?.id ?? "pulse");

  const activeOffering = useMemo(
    () => offeringsContent.find((offering) => offering.id === activeId) ?? offeringsContent[0],
    [activeId]
  );

  return (
    <section id="offerings" className="py-32 bg-reelio-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-6">Our Offerings</h2>
            <h3 className="text-4xl md:text-7xl font-heading font-bold text-white leading-none">
              OFFERINGS BUILT TO <br />
              <span className="text-primary italic">SCALE AUTHORITY</span>.
            </h3>
          </div>
          <p className="text-white/40 max-w-xs text-sm uppercase tracking-widest leading-relaxed">
            Click any service card to open a detailed execution brief.
          </p>
        </div>

        <div className="grid border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {offeringsContent.map((offering, i) => {
            const Icon = iconMap[offering.id as keyof typeof iconMap] ?? Sparkles;
            const isActive = offering.id === activeId;

            return (
              <motion.button
                type="button"
                key={offering.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
                onClick={() => setActiveId(offering.id)}
                className="group relative overflow-hidden border-r border-b border-white/10 bg-reelio-black p-8 text-left transition-colors duration-300 hover:bg-reelio-dark md:p-10"
                style={{
                  boxShadow: isActive ? `inset 0 0 0 1px ${offering.accent}` : undefined,
                  backgroundImage: isActive
                    ? `linear-gradient(145deg, ${offering.accent}22, rgba(0,0,0,0) 45%)`
                    : undefined,
                }}
              >
                <div
                  className="absolute top-0 left-0 h-1 w-full"
                  style={{ backgroundColor: isActive ? offering.accent : `${offering.accent}66` }}
                />

                <Icon className="mb-7 h-9 w-9" style={{ color: offering.accent }} />

                <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-white/50">{offering.label}</p>
                <h4 className="mb-4 text-2xl font-heading font-bold text-white">{offering.title}</h4>
                <p className="leading-relaxed text-white/70">{offering.shortDescription}</p>

                <div className="mt-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.24em]" style={{ color: offering.accent }}>
                  View details
                  <span className="h-px w-8" style={{ backgroundColor: offering.accent }} />
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeOffering ? (
            <motion.div
              key={activeOffering.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.32 }}
              className="mt-10 border border-white/10 bg-reelio-dark p-8 md:p-10"
              style={{ boxShadow: `inset 0 0 0 1px ${activeOffering.accent}4D` }}
            >
              <div className="grid gap-10 md:grid-cols-12 md:items-start">
                <div className="md:col-span-5">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.3em]" style={{ color: activeOffering.accent }}>
                    Detailed Scope
                  </p>
                  <h5 className="mb-4 text-3xl md:text-4xl font-heading font-bold text-white">{activeOffering.title}</h5>
                  <p className="text-white/70 leading-relaxed">{activeOffering.longDescription}</p>
                </div>

                <div className="md:col-span-7">
                  <div className="grid gap-4 md:grid-cols-2">
                    {activeOffering.bullets.map((item) => (
                      <div
                        key={item}
                        className="border border-white/10 px-4 py-4 text-sm text-white/80"
                        style={{ backgroundColor: `${activeOffering.accent}1A` }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
