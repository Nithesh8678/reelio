"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactDetails, whatsappUrl } from "@/content/site-content";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side rate limiting check
    const lastSubmitTime = localStorage.getItem("reelio_last_submit");
    if (lastSubmitTime && Date.now() - parseInt(lastSubmitTime) < 60000) {
      setErrorMessage("Please wait a minute before sending another message.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      // Honeypot trap: if filled, act like it succeeded to fool the bot
      if (formData.honeypot) {
        setStatus("success");
        return;
      }

      // We submit directly to Web3Forms from the client because Web3Forms blocks server-to-server 
      // requests via Cloudflare on free plans. The API key is safe to expose per Web3Forms docs.
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Contact Form Submission",
          message: formData.message,
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (err) {
        throw new Error("Received an invalid response from the server. Please check your API key.");
      }

      if (response.ok && data.success) {
        localStorage.setItem("reelio_last_submit", Date.now().toString());
        setStatus("success");
      } else {
        throw new Error(data.message || "Failed to submit form");
      }
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 bg-reelio-black relative overflow-hidden">
      {/* Decorative background text */}
      <div className="brand-wordmark absolute -bottom-20 -right-20 text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none">
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
                  <div className="text-xl text-white font-medium">{contactDetails.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Call us</div>
                  <div className="text-xl text-white font-medium">{contactDetails.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">WhatsApp</div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase text-primary hover:text-white transition-colors"
                  >
                    Go to WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Visit us</div>
                  <div className="text-xl text-white font-medium">{contactDetails.address}</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-reelio-dark border border-white/5 relative min-h-[600px] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-reelio-dark p-8 text-center"
                >
                  <div className="relative mb-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.5, 1.2], opacity: [0, 0.8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      className="absolute h-32 w-32 rounded-full bg-primary/20 blur-xl"
                    />
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
                      className="relative flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-black/50 backdrop-blur-md"
                    >
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute w-[1px] bg-primary/50"
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute h-[1px] bg-primary/50"
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.5, delay: 1.2 }}
                        className="h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_rgba(227,30,36,0.8)]"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="overflow-hidden">
                    <motion.h4
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="mb-4 text-3xl font-heading font-bold uppercase tracking-widest text-white md:text-4xl"
                    >
                      Signal <span className="italic text-primary">Locked</span>
                    </motion.h4>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className="text-xs uppercase tracking-[0.2em] text-white/50"
                  >
                    We'll get back to you shortly.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                  className="space-y-8 p-12"
                >
                  <input
                    type="text"
                    name="honeypot"
                    style={{ display: "none" }}
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errorMessage && (
                    <div className="text-red-500 text-xs font-bold uppercase tracking-widest mb-4">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</label>
                      <Input 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-transparent border-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-primary text-white px-0 h-12" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/40">Email Address</label>
                      <Input 
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-transparent border-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-primary text-white px-0 h-12" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Subject</label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-transparent border-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-primary text-white px-0 h-12" 
                      placeholder="Project Inquiry" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
                    <Textarea 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-transparent border-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-primary text-white px-0 min-h-[150px] resize-none" 
                      placeholder="Tell us about your project..." 
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-primary hover:bg-white text-white hover:text-black rounded-none h-16 text-lg font-bold transition-all duration-500 disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <Loader2 className="animate-spin w-5 h-5" />
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button type="button" className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-white rounded-none h-16 text-sm font-bold tracking-[0.22em] uppercase transition-all duration-500">
                      Continue on WhatsApp
                      <MessageCircle className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
