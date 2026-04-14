"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { Resources as ResourcesSection } from "@/components/sections/Resources";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Resources() {
  return (
    <PageTransition>
      <div className="pt-32">
        <ResourcesSection />

        {/* Newsletter Section */}
        <section className="py-32 bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-7xl font-heading font-bold text-white mb-8 leading-none">
                STAY AHEAD OF THE <span className="italic">CURVE.</span>
              </h2>
              <p className="text-xl text-white/80 mb-12">
                Get the latest insights on digital marketing and analytics delivered to your inbox weekly.
              </p>
              
              <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <Input 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-16 rounded-none px-8 text-lg focus-visible:ring-white" 
                  placeholder="Enter your email" 
                />
                <Button className="bg-white text-primary hover:bg-reelio-black hover:text-white h-16 px-12 rounded-none font-bold text-lg transition-all duration-500">
                  SUBSCRIBE
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
