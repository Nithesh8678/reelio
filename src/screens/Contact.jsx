import { PageTransition } from "@/components/layout/PageTransition";
import { Contact as ContactSection } from "@/components/sections/Contact";
export default function Contact() {
    return (<PageTransition>
      <div className="pt-32 min-h-screen flex flex-col">
        <ContactSection />
        
        {/* FAQ Section - Unique to Contact Page */}
        <section className="py-32 bg-reelio-dark border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-16 text-center">COMMON QUESTIONS</h2>
              
              <div className="space-y-12">
                {[
            { q: "How long does a typical project take?", a: "Most comprehensive digital strategies and production cycles take between 8-12 weeks from discovery to launch." },
            { q: "Do you work with startups?", a: "Yes, we have a specialized 'Ignition' program for high-growth startups looking to establish market dominance early." },
            { q: "What analytics tools do you use?", a: "We are platform-agnostic but specialize in GA4, Mixpanel, and custom data warehouse solutions." }
        ].map((faq, i) => (<div key={i} className="group">
                    <h4 className="text-xl font-heading font-bold text-primary mb-4">{faq.q}</h4>
                    <p className="text-white/50 leading-relaxed">{faq.a}</p>
                  </div>))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>);
}
