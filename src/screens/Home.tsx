"use client";

import { Hero } from "@/components/sections/Hero";
import { CollaboratorsTicker } from "@/components/sections/CollaboratorsTicker";
import { Testimonials } from "@/components/sections/Testimonials";
import { PageTransition } from "@/components/layout/PageTransition";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { homeWorks } from "@/content/site-content";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <CollaboratorsTicker />
      
      <section className="py-32 bg-reelio-black">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="mb-6 text-sm font-bold tracking-[0.4em] text-primary uppercase">Selected Work</h2>
              <h3 className="text-4xl md:text-7xl font-heading font-bold leading-none text-white">
                STORIES BUILT TO
                <span className="block italic text-primary">MOVE MARKETS</span>
              </h3>
            </div>
            <button className="group flex items-center gap-4 text-sm font-bold tracking-[0.28em] text-white/50 uppercase hover:text-primary transition-colors">
              Explore all case studies
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-12">
            {homeWorks.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.14, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className={`group relative overflow-hidden border border-white/10 bg-reelio-dark ${
                  i === 0 ? "md:col-span-7 aspect-[16/11]" : "md:col-span-5 aspect-[16/10]"
                } ${i === 2 ? "md:col-span-12 aspect-[21/9]" : ""}`}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute left-0 top-0 m-6 inline-flex items-center gap-3 bg-black/50 px-4 py-2 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-[11px] uppercase tracking-[0.24em] text-white/80">{work.category}</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <div className="mb-3 text-[11px] uppercase tracking-[0.3em] text-white/60">{work.year}</div>
                  <h4 className="mb-4 text-3xl md:text-4xl font-heading font-bold text-white">{work.title}</h4>
                  <p className="max-w-2xl text-white/75 leading-relaxed">{work.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </PageTransition>
  );
}
