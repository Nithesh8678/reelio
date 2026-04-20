"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { offeringsContent, type OfferingItem } from "@/content/site-content";
import { ArrowUpRight, Check, X } from "lucide-react";

export function Offerings() {
  const [selectedOffering, setSelectedOffering] = useState<OfferingItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const modalEase = [0.16, 1, 0.3, 1] as const;
  const cardEase = [0.22, 1, 0.36, 1] as const;
  const modalTransition = shouldReduceMotion
    ? { duration: 0.18 }
    : { duration: 0.36, ease: modalEase };

  const panelInitial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.96 };
  const panelAnimate = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 };
  const panelExit = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 };

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedOffering(null);
      }
    };

    window.addEventListener("keydown", onEscape);

    if (selectedOffering) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [selectedOffering]);

  return (
    <section id="offerings" className="relative overflow-hidden bg-reelio-black py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 16% 14%, rgba(227,30,36,0.16), transparent 42%), radial-gradient(circle at 84% 78%, rgba(34,211,238,0.12), transparent 46%), linear-gradient(to bottom, rgba(255,255,255,0.03), transparent 28%)",
        }}
      />

      <div className="pointer-events-none absolute -left-16 top-36 hidden h-72 w-72 rounded-full bg-primary/12 blur-[96px] md:block" />
      <div className="pointer-events-none absolute -right-16 bottom-12 hidden h-72 w-72 rounded-full bg-cyan-400/8 blur-[96px] md:block" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={shouldReduceMotion ? { duration: 0.2 } : { duration: 0.6, ease: cardEase }}
          className="mx-auto mb-14 max-w-4xl text-center md:mb-16"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-primary">Orbital Offerings Deck</p>
          <h2 className="text-4xl font-heading font-bold leading-[0.9] text-white md:text-6xl lg:text-7xl">
            CHOOSE YOUR
            <span className="block italic text-primary">GROWTH MACHINE</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/65">
            Six focused service systems built for visibility, authority, and conversion. Tap any card for the full breakdown.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offeringsContent.map((offering, index) => (
            <motion.button
              key={offering.id}
              type="button"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.2 }
                  : { delay: index * 0.05, duration: 0.44, ease: cardEase }
              }
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              onClick={() => setSelectedOffering(offering)}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.02] text-left transition-colors duration-500 hover:border-white/30 will-change-transform"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle at 80% 18%, ${offering.accent}55, transparent 58%)` }}
              />

              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={offering.image}
                  alt={offering.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute left-4 top-4 border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/85">
                  0{index + 1}
                </div>
              </div>

              <div className="relative p-6 md:p-7">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: offering.accent }}>
                  {offering.label}
                </p>
                <h3 className="mb-3 text-2xl font-heading font-bold text-white">{offering.title}</h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-white/70">{offering.shortDescription}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/75 transition-colors group-hover:text-primary">
                  View Details
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedOffering ? (
          <>
            <motion.button
              type="button"
              aria-label="Close offering details"
              onClick={() => setSelectedOffering(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[90] bg-black/82"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              initial={panelInitial}
              animate={panelAnimate}
              exit={panelExit}
              transition={modalTransition}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 will-change-transform md:p-8"
            >
              <article className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden border border-white/15 bg-reelio-dark shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
                <button
                  type="button"
                  onClick={() => setSelectedOffering(null)}
                  className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center border border-white/15 bg-black/55 text-white/80 transition-colors hover:border-primary hover:text-primary"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-2">
                  <div className="relative min-h-[280px] lg:min-h-full">
                    <img
                      src={selectedOffering.image}
                      alt={selectedOffering.title}
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  </div>

                  <div className="relative p-6 sm:p-8 md:p-10">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: selectedOffering.accent }}>
                      {selectedOffering.label}
                    </p>
                    <h3 className="mb-4 text-3xl font-heading font-bold text-white sm:text-4xl">{selectedOffering.title}</h3>

                    <p className="mb-4 text-base leading-relaxed text-white/90">{selectedOffering.shortDescription}</p>
                    <p className="mb-8 text-sm leading-relaxed text-white/70 sm:text-base">{selectedOffering.longDescription}</p>

                    <div className="space-y-3">
                      {selectedOffering.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                            <Check className="h-3 w-3 text-white/80" />
                          </div>
                          <span className="text-sm text-white/80 sm:text-base">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="/contact"
                      className="mt-10 inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white/80 transition-colors hover:border-primary hover:text-primary"
                    >
                      Discuss This Offering
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
