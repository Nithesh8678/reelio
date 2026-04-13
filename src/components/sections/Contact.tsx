import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-reelio-black relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute -bottom-20 -right-20 text-[20rem] font-heading font-bold text-white/[0.02] select-none pointer-events-none">
        REELIO
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-6">Get in touch</h2>
            <h3 className="text-5xl md:text-8xl font-heading font-bold text-white mb-12 leading-none">
              READY TO <br />
              <span className="text-primary italic">REEL</span> IN <br />
              SUCCESS?
            </h3>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email us</div>
                  <div className="text-xl text-white font-medium">hello@reelio.agency</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Call us</div>
                  <div className="text-xl text-white font-medium">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Visit us</div>
                  <div className="text-xl text-white font-medium">77 Creative Way, NY 10013</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-reelio-dark p-12 border border-white/5"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</label>
                  <Input className="bg-transparent border-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-primary text-white px-0 h-12" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Email Address</label>
                  <Input className="bg-transparent border-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-primary text-white px-0 h-12" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Subject</label>
                <Input className="bg-transparent border-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-primary text-white px-0 h-12" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
                <Textarea className="bg-transparent border-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-primary text-white px-0 min-h-[150px] resize-none" placeholder="Tell us about your project..." />
              </div>

              <Button className="w-full bg-primary hover:bg-white text-white hover:text-black rounded-none h-16 text-lg font-bold transition-all duration-500">
                SEND MESSAGE
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
