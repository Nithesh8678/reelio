"use client";

import { motion } from "motion/react";
import { resourcesWorks } from "@/content/site-content";

export function Resources() {
  return (
    <section id="resources" className="py-32 bg-reelio-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-6">Our Works</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
            RECENT BUILDS & <span className="italic text-primary">CASE MOMENTS</span>
          </h3>
          <p className="text-white/55 leading-relaxed">
            A living snapshot of what we are producing across founder positioning, performance creative, and cinematic brand storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {resourcesWorks.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group cursor-pointer border border-white/10 bg-black/30 p-4"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-black/70 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-white/15">
                  {work.category}
                </div>
              </div>

              <div className="text-white/40 text-xs uppercase tracking-widest mb-3">{work.year}</div>
              <h4 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors leading-tight">
                {work.title}
              </h4>
              <p className="mt-4 text-white/65 leading-relaxed">{work.summary}</p>

              <div className="mt-6 w-12 h-1 bg-white/10 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
