"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { existingCustomers } from "@/content/site-content";
export function Hero() {
    return (<section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"/>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"/>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 border border-primary/30 text-primary text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Digital Excellence Redefined
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-bold leading-[0.85] tracking-tighter text-white mb-12">
            WE CREATE <br />
            <span className="text-primary italic">DIGITAL</span> <br />
            IMPACT<span className="text-primary">.</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.32 }} className="mb-12">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/45">
              Existing customers
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {existingCustomers.map((customer) => (<div key={customer.name} className="border border-white/10 bg-white/[0.02] px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75" style={{ boxShadow: `inset 0 0 0 1px ${customer.accent}40` }}>
                  {customer.name}
                </div>))}
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/60 max-w-md leading-relaxed">
              Reelio is a full-service agency that blends creative content, strategic marketing, and deep analytics to propel your brand into the future.
            </motion.p>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <Link href="/offerings" className="inline-flex">
                <Button className="group bg-primary hover:bg-white text-white hover:text-black rounded-none h-20 px-12 text-lg font-bold transition-all duration-500">
                  OUR OFFERINGS
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform"/>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 rotate-90 mb-8">Scroll</span>
          <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent" />
        </motion.div> */}
    </section>);
}
