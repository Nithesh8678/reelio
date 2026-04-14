"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { Resources as ResourcesSection } from "@/components/sections/Resources";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { instagramUrl } from "@/content/site-content";

export default function Resources() {
  return (
    <PageTransition>
      <div className="pt-32">
        <ResourcesSection />

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
