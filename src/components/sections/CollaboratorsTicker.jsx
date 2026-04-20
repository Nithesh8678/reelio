"use client";
import { collaboratorTags } from "@/content/site-content";
export function CollaboratorsTicker() {
    const items = [...collaboratorTags, ...collaboratorTags];
    return (<section className="relative overflow-hidden border-y border-white/10 bg-reelio-dark/70 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-reelio-black to-transparent"/>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-reelio-black to-transparent"/>

      <div className="mb-3 flex items-center justify-center">
        <p className="text-[10px] uppercase tracking-[0.45em] text-white/40">Equipment Partners</p>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track flex min-w-max items-center gap-3 px-6">
          {items.map((item, index) => (<div key={`${item.name}-${index}`} className="rounded-full border px-4 py-2 text-xs font-bold tracking-[0.2em] uppercase text-white/90" style={{
                borderColor: `${item.accent}80`,
                backgroundColor: `${item.accent}20`,
                boxShadow: `inset 0 0 0 1px ${item.accent}30`,
            }}>
              {item.name}
            </div>))}
        </div>
      </div>
    </section>);
}
