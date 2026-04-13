import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-reelio-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-heading font-bold tracking-tighter text-white">
                REELIO<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-white/40 max-w-sm leading-relaxed">
              We are a digital agency that believes in the power of data-driven creativity. Our mission is to help brands reel in their audience through impactful content and strategic marketing.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About us", "Offerings", "Resources", "Contact us"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "")}`} className="text-white/40 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Social</h4>
            <div className="flex gap-6">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="text-white/20 text-xs tracking-widest uppercase">
            © 2026 REELIO AGENCY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-12 text-white/20 text-xs tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
