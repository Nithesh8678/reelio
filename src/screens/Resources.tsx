"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { Resources as ResourcesSection } from "@/components/sections/Resources";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { equipmentShowcase, instagramUrl } from "@/content/site-content";

export default function Resources() {
  return (
    <PageTransition>
      <div className="pt-32">
        <ResourcesSection />

        <section className="border-t border-white/5 bg-reelio-black py-28 md:py-32">
          <div className="container mx-auto px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-primary">Production Equipment</p>
              <h2 className="text-3xl font-heading font-bold leading-tight text-white md:text-5xl">
                Every frame we shoot is powered by professional-grade gear — because your brand deserves nothing less.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {equipmentShowcase.map((item, i) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1 }}
                  className="group overflow-hidden border border-white/10 bg-reelio-dark"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-heading font-bold text-white">{item.name}</h3>
                    <p className="leading-relaxed text-white/65">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <p className="mx-auto mt-12 max-w-3xl text-center text-lg text-white/80">
              Top-tier gear. Scroll-stopping content. Real results for your brand.
            </p>
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
