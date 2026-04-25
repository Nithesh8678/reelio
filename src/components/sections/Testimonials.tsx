"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/content/site-content";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent to-reelio-dark py-28 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(227,30,36,0.25), transparent 38%), radial-gradient(circle at 100% 100%, rgba(96,165,250,0.2), transparent 42%)",
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black)",
        }}
      />

      <div className="container relative mx-auto px-6">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-primary">What customers say</p>
            <h2 className="text-4xl font-heading font-bold leading-tight text-white md:text-6xl">
              PROOF THAT CREATIVE
              <span className="block italic text-primary">CAN DRIVE NUMBERS</span>
            </h2>
          </div>
          <Link
            href="/resources"
            className="group inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/75 transition-colors hover:border-primary hover:text-primary"
          >
            Explore Our Creations
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 bg-white/[0.03] p-6 md:p-7"
              style={{ boxShadow: `inset 0 0 0 1px ${item.accent}2A` }}
            >
              <div className="mb-6 text-4xl font-heading font-bold leading-none" style={{ color: item.accent }}>
                "
              </div>
              <p className="mb-8 text-white/75 leading-relaxed">{item.quote}</p>
              <div className="border-t border-white/10 pt-5">
                <p className="text-base font-semibold text-white">{item.author}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/55">
                  {item.role} - {item.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
