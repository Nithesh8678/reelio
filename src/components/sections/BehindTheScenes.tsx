"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { behindTheScenesClips } from "@/content/site-content";

export function BehindTheScenes() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeClip = useMemo(() => {
    if (activeIndex === null) {
      return null;
    }
    return behindTheScenesClips[activeIndex] ?? null;
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => {
          if (prev === null) {
            return 0;
          }
          return (prev + 1) % behindTheScenesClips.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => {
          if (prev === null) {
            return 0;
          }
          return (prev - 1 + behindTheScenesClips.length) % behindTheScenesClips.length;
        });
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 14% 12%, rgba(227,30,36,0.2), transparent 36%), radial-gradient(circle at 86% 80%, rgba(34,211,238,0.16), transparent 38%), linear-gradient(to bottom, rgba(255,255,255,0.03), transparent 24%)",
        }}
      />

      <div className="container relative mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-primary"
            >
              Behind The Scenes
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className="text-4xl font-heading font-bold uppercase leading-[0.92] tracking-[0.02em] text-white md:text-6xl"
            >
              WATCH THE
              <span className="mt-1 block italic text-primary">REAL BUILD</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="mt-6 max-w-[34ch] text-sm leading-relaxed text-white/72 md:text-base"
            >
              Two short clips, looped like a live storyboard. This section is designed to feel collectible and replayable,
              with a quick fullscreen mode for an immersive view.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Short Clips
              </span>
              <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Real Process
              </span>
              <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Fullscreen Viewer
              </span>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {behindTheScenesClips.map((clip, index) => (
              <motion.button
                key={clip.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden border border-white/15 bg-black/50 text-left"
                aria-label={`Open ${clip.title} in fullscreen`}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 12% 14%, ${clip.accent}30, transparent 40%)`,
                  }}
                />

                <div className="relative aspect-[9/16] overflow-hidden">
                  <video
                    src={clip.src}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 border border-white/20 bg-black/65 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
                    Clip {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/25 bg-black/70 text-white/90">
                    <Play className="h-4 w-4" />
                  </div>
                </div>

                <div className="relative border-t border-white/10 p-5">
                  <h3 className="text-lg font-heading font-bold uppercase tracking-[0.14em] text-white md:text-xl">{clip.title}</h3>
                  <p className="mt-2 text-sm text-white/76">{clip.subtitle}</p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-white/56">{clip.vibe}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden border border-white/10 bg-black/40 py-3">
          <div className="marquee-track flex min-w-max items-center gap-2 px-4 sm:px-6">
            {Array.from({ length: 4 }).flatMap((_, loopIndex) =>
              ["Behind The Scenes", "Reelio Process", "Set Energy", "Creative Direction", "Live Storyboard"].map(
                (item, itemIndex) => (
                  <span
                    key={`${item}-${loopIndex}-${itemIndex}`}
                    className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/60"
                  >
                    {item}
                    <span className="text-primary/85">•</span>
                  </span>
                )
              )
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeClip && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] bg-black/90 p-4 backdrop-blur-sm md:p-8"
          >
            <div className="mx-auto flex h-full w-full max-w-6xl flex-col border border-white/10 bg-black">
              <div className="flex-none flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-6 md:py-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">Behind The Scenes</p>
                  <h4 className="mt-1 text-base font-heading font-bold uppercase tracking-[0.16em] text-white md:text-lg">
                    {activeClip.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) => {
                        if (prev === null) {
                          return 0;
                        }
                        return (prev - 1 + behindTheScenesClips.length) % behindTheScenesClips.length;
                      })
                    }
                    className="flex h-10 w-10 items-center justify-center border border-white/15 bg-black/70 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                    aria-label="Previous clip"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) => {
                        if (prev === null) {
                          return 0;
                        }
                        return (prev + 1) % behindTheScenesClips.length;
                      })
                    }
                    className="flex h-10 w-10 items-center justify-center border border-white/15 bg-black/70 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                    aria-label="Next clip"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    className="flex h-10 w-10 items-center justify-center border border-white/15 bg-black/70 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                    aria-label="Close viewer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid flex-1 min-h-0 gap-0 overflow-hidden md:grid-cols-12">
                <div className="border-b border-white/10 p-5 overflow-y-auto md:col-span-4 md:border-b-0 md:border-r md:p-6">
                  <div className="text-[11px] uppercase tracking-[0.26em] text-white/55">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(behindTheScenesClips.length).padStart(2, "0")}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-white/75">{activeClip.subtitle}</p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-white/58">{activeClip.vibe}</p>
                </div>

                <div className="relative h-full min-h-[48vh] bg-black md:col-span-8 md:min-h-0">
                  <video
                    key={activeClip.id}
                    src={activeClip.src}
                    controls
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
