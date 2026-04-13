import { motion } from "motion/react";

const articles = [
  {
    category: "Analytics",
    title: "The Future of First-Party Data in 2026",
    date: "March 12, 2026",
    image: "https://picsum.photos/seed/data/600/400",
  },
  {
    category: "Marketing",
    title: "Why Short-Form Video is Still King",
    date: "February 28, 2026",
    image: "https://picsum.photos/seed/video/600/400",
  },
  {
    category: "Strategy",
    title: "Scaling Your Brand Beyond the Algorithm",
    date: "January 15, 2026",
    image: "https://picsum.photos/seed/strategy/600/400",
  },
];

export function Resources() {
  return (
    <section id="resources" className="py-32 bg-reelio-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-6">Knowledge Hub</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
            INSIGHTS & <span className="italic text-primary">RESOURCES</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  {article.category}
                </div>
              </div>
              <div className="text-white/40 text-xs uppercase tracking-widest mb-4">{article.date}</div>
              <h4 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h4>
              <div className="mt-6 w-12 h-1 bg-white/10 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="text-sm font-bold tracking-[0.3em] text-white uppercase border-b border-primary pb-2 hover:text-primary transition-colors">
            VIEW ALL RESOURCES
          </button>
        </div>
      </div>
    </section>
  );
}
