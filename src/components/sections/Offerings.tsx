import { motion } from "motion/react";
import { Video, BarChart3, Megaphone, Globe, Zap, Target } from "lucide-react";

const offerings = [
  {
    title: "Content Production",
    description: "Cinematic storytelling that captures attention and builds brand authority across all platforms.",
    icon: Video,
  },
  {
    title: "Performance Marketing",
    description: "Data-driven campaigns designed to maximize conversion and scale your business rapidly.",
    icon: Target,
  },
  {
    title: "Advanced Analytics",
    description: "Deep-dive insights into your customer behavior to drive informed strategic decisions.",
    icon: BarChart3,
  },
  {
    title: "Digital Strategy",
    description: "Comprehensive roadmaps for your brand's digital evolution and market dominance.",
    icon: Zap,
  },
  {
    title: "Social Media Growth",
    description: "Organic and paid strategies to build thriving communities around your brand.",
    icon: Megaphone,
  },
  {
    title: "Web Experiences",
    description: "High-performance, interactive websites that convert visitors into loyal customers.",
    icon: Globe,
  },
];

export function Offerings() {
  return (
    <section id="offerings" className="py-32 bg-reelio-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-6">Our Expertise</h2>
            <h3 className="text-4xl md:text-7xl font-heading font-bold text-white leading-none">
              SOLUTIONS THAT <br />
              <span className="text-primary italic">DRIVE</span> GROWTH.
            </h3>
          </div>
          <p className="text-white/40 max-w-xs text-sm uppercase tracking-widest leading-relaxed">
            We don't just provide services; we build engines for sustainable digital success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {offerings.map((offering, i) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-reelio-black p-12 hover:bg-reelio-dark transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
              
              <offering.icon className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h4 className="text-2xl font-heading font-bold text-white mb-4 uppercase tracking-tight">
                {offering.title}
              </h4>
              <p className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                {offering.description}
              </p>
              
              <div className="mt-12 flex items-center gap-2 text-xs font-bold tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                LEARN MORE <div className="w-8 h-[1px] bg-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
