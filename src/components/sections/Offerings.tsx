"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clapperboard,
  Mic2,
  Megaphone,
  Orbit,
  Radio,
  Sparkles,
  Speech,
  UserRound,
} from "lucide-react";
import { offeringsContent } from "@/content/site-content";

const iconMap = {
  pulse: Radio,
  feature: Clapperboard,
  voice: Mic2,
  catalyst: Megaphone,
  insights: Speech,
  persona: UserRound,
};

const orbLabels = ["Signal Scan", "Orbit Lock", "Creative Boost", "Launch Window"];

function withAlpha(hex: string, alpha: string) {
  if (hex.startsWith("#") && hex.length === 7) {
    return `${hex}${alpha}`;
  }

  return hex;
}

export function Offerings() {
  const [activeId, setActiveId] = useState(offeringsContent[0]?.id ?? "pulse");

  const activeOffering = useMemo(
    () => offeringsContent.find((offering) => offering.id === activeId) ?? offeringsContent[0],
    [activeId]
  );

  return (
    <section id="offerings" className="relative overflow-hidden bg-reelio-black py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(34,211,238,0.15), transparent 42%), radial-gradient(circle at 82% 20%, rgba(251,113,133,0.12), transparent 40%), radial-gradient(circle at 50% 85%, rgba(163,230,53,0.1), transparent 45%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />

      <div className="container relative mx-auto px-6">
        <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-primary">Orbital Offerings Deck</p>
            <h2 className="text-4xl font-heading font-bold leading-[0.88] text-white md:text-7xl">
              A COSMIC MENU OF
              <span className="block italic text-primary">GROWTH MACHINES</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm uppercase tracking-[0.24em] text-white/55">
            Select a node to open its mission protocol. Built for velocity, authority, and conversion.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <div className="grid gap-3">
              {offeringsContent.map((offering, index) => {
                const Icon = iconMap[offering.id as keyof typeof iconMap] ?? Sparkles;
                const isActive = offering.id === activeId;

                return (
                  <motion.button
                    key={offering.id}
                    type="button"
                    onClick={() => setActiveId(offering.id)}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden border border-white/10 px-5 py-4 text-left backdrop-blur-sm transition-colors duration-300"
                    style={{
                      backgroundColor: isActive ? withAlpha(offering.accent, "20") : "rgba(255,255,255,0.03)",
                      boxShadow: isActive ? `0 0 0 1px ${withAlpha(offering.accent, "80")}` : "none",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border"
                        style={{
                          borderColor: withAlpha(offering.accent, "80"),
                          backgroundColor: withAlpha(offering.accent, isActive ? "30" : "16"),
                        }}
                      >
                        <Icon className="h-4 w-4" style={{ color: offering.accent }} />
                      </div>
                      <div className="flex-1">
                        <p className="mb-1 text-[10px] uppercase tracking-[0.26em] text-white/50">
                          Node {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="text-lg font-heading font-bold text-white">{offering.title}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/55">{offering.label}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="relative lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeOffering ? (
                <motion.article
                  key={activeOffering.id}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  transition={{ duration: 0.35 }}
                  className="relative overflow-hidden border border-white/15 bg-reelio-dark/80 p-7 backdrop-blur-sm md:p-10"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${withAlpha(activeOffering.accent, "66")}`,
                  }}
                >
                  <div
                    className="pointer-events-none absolute -right-32 -top-28 h-72 w-72 rounded-full blur-3xl"
                    style={{ backgroundColor: withAlpha(activeOffering.accent, "4D") }}
                  />
                  <div className="pointer-events-none absolute -left-24 -bottom-24 h-60 w-60 rounded-full border border-white/10" />
                  <div className="pointer-events-none absolute left-[20%] top-[24%] h-52 w-52 rounded-full border border-white/10" />
                  <div className="pointer-events-none absolute left-[40%] top-[15%] h-80 w-80 rounded-full border border-white/8" />

                  <div className="relative z-10 grid gap-8 md:grid-cols-12 md:items-start">
                    <div className="md:col-span-7">
                      <div className="mb-5 inline-flex items-center gap-2 border border-white/15 bg-black/35 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/70">
                        <Orbit className="h-3.5 w-3.5" style={{ color: activeOffering.accent }} />
                        Mission Protocol Live
                      </div>
                      <h3 className="mb-4 text-3xl font-heading font-bold leading-tight text-white md:text-5xl">
                        {activeOffering.title}
                      </h3>
                      <p className="mb-5 max-w-2xl text-base leading-relaxed text-white/75">
                        {activeOffering.shortDescription}
                      </p>
                      <p className="max-w-2xl text-sm leading-relaxed text-white/62 md:text-base">
                        {activeOffering.longDescription}
                      </p>
                    </div>

                    <div className="md:col-span-5">
                      <div className="grid gap-3">
                        {orbLabels.map((label, i) => (
                          <div
                            key={label}
                            className="border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.22em] text-white/65"
                            style={{ backgroundColor: withAlpha(activeOffering.accent, i % 2 === 0 ? "1A" : "12") }}
                          >
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-2">
                    {activeOffering.bullets.map((item) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center gap-3 border border-white/10 px-4 py-3 text-sm text-white/85"
                        style={{ backgroundColor: withAlpha(activeOffering.accent, "14") }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: activeOffering.accent }} />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.article>
              ) : null}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {offeringsContent.slice(0, 3).map((offering, i) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/50">{offering.label}</p>
              <p className="mb-3 text-xl font-heading font-bold text-white">{offering.title}</p>
              <p className="text-sm leading-relaxed text-white/60">{offering.shortDescription}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
