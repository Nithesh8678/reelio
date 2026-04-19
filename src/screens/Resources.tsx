"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { Resources as ResourcesSection } from "@/components/sections/Resources";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { instagramUrl } from "@/content/site-content";

export default function Resources() {
  return (
    <PageTransition>
      <div className="pt-32">
        <ResourcesSection />

        <section className="relative overflow-hidden border-y border-white/5 bg-reelio-black py-24 md:py-32">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 14% 18%, rgba(227,30,36,0.18), transparent 40%), radial-gradient(circle at 88% 72%, rgba(34,211,238,0.16), transparent 44%), linear-gradient(to bottom, rgba(255,255,255,0.03), transparent 30%)",
            }}
          />

          <div className="container relative mx-auto px-6">
            <div className="grid items-center gap-16 lg:grid-cols-12">
              <motion.article
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-left">
                  <div className="mb-6 flex items-center justify-center gap-4 lg:justify-start">
                    <span className="h-px w-12 bg-primary/80" />
                    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary">Production Equipment</p>
                  </div>

                  <h2 className="mx-auto max-w-[18ch] text-3xl font-heading font-bold leading-tight text-white md:text-5xl lg:mx-0">
                    Every frame we shoot is powered by professional-grade gear — because your brand deserves nothing less.
                  </h2>

                  <p className="mx-auto mt-8 max-w-[34ch] text-lg leading-relaxed text-white/80 lg:mx-0">
                    Top-tier gear. Scroll-stopping content. Real results for your brand.
                  </p>

                  <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start text-[11px] uppercase tracking-[0.22em] text-white/70">
                    <div className="border border-white/10 bg-white/[0.02] px-4 py-3">Cinematic Capture</div>
                    <div className="border border-white/10 bg-white/[0.02] px-4 py-3">Premium Lighting</div>
                    <div className="border border-white/10 bg-white/[0.02] px-4 py-3">Studio Audio</div>
                    <div className="border border-white/10 bg-white/[0.02] px-4 py-3">Brand Precision</div>
                  </div>
                </div>
              </motion.article>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65 }}
                className="relative lg:col-span-7"
              >
                <div className="relative mx-auto aspect-square w-full max-w-[760px]">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[2%] rounded-[2.75rem] border border-white/10"
                  />

                  <motion.div
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[8%] rounded-[2.5rem] border border-white/8"
                  />

                  <div className="absolute inset-[14%] overflow-hidden rounded-full border border-white/15 bg-black shadow-[0_0_90px_rgba(227,30,36,0.2)]">
                    <motion.img
                      src="/media-partner.PNG"
                      alt="Production equipment partner"
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-white/8" />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="absolute right-0 top-[14%] border border-white/15 bg-black/55 px-5 py-4 text-[11px] uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm"
                  >
                    Single Image
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute bottom-[14%] left-0 border border-primary/35 bg-primary/15 px-5 py-4 text-[11px] uppercase tracking-[0.24em] text-white"
                  >
                    Maximum Impact
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-7xl font-heading font-bold text-white mb-8 leading-none">
                FOLLOW THE <span className="italic">PROCESS.</span>
              </h2>
              <p className="text-xl text-white/80 mb-12">
                Behind-the-scenes drops, campaign breakdowns, and founder-led storytelling experiments.
              </p>

              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button className="bg-white text-primary hover:bg-reelio-black hover:text-white h-16 px-12 rounded-none font-bold text-lg transition-all duration-500 uppercase tracking-[0.22em]">
                  Follow on Instagram
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
