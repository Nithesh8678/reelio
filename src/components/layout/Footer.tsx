"use client";

import { useState } from "react";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { contactDetails, socialUrls } from "@/content/site-content";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Offerings", href: "/offerings" },
  { name: "Our Creations", href: "/resources" },
  { name: "Contact us", href: "/contact" },
];

const socialItems = [
  { icon: Instagram, href: socialUrls.instagram, label: "Instagram" },
  { icon: Twitter, href: socialUrls.twitter, label: "Twitter" },
  { icon: Linkedin, href: socialUrls.linkedin, label: "LinkedIn" },
  { icon: Github, href: socialUrls.github, label: "GitHub" },
];

export function Footer() {
  const [logoReady, setLogoReady] = useState(true);

  return (
    <footer className="bg-reelio-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20 grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-8">
              {logoReady ? (
                <img
                  src="/brand/logo-text.png"
                  alt="Reelio"
                  className="h-10 md:h-11 w-auto object-contain transition-opacity duration-300 hover:opacity-80"
                  onError={() => setLogoReady(false)}
                />
              ) : (
                <span className="brand-wordmark text-2xl text-white">
                  Reelio<span className="text-primary">.</span>
                </span>
              )}
            </Link>
            <p className="text-white/40 max-w-sm leading-relaxed">
              We are a digital agency that believes in the power of data-driven creativity. Our mission is to help brands reel in their audience through impactful content and strategic marketing.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/65">
              <p className="uppercase tracking-[0.2em] text-white/40 text-xs">Contact</p>
              <p>{contactDetails.addressLine1}</p>
              <p>{contactDetails.addressLine2}</p>
              <p>{contactDetails.phone}</p>
              <p>{contactDetails.email}</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/40 hover:text-primary transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Social</h4>
            <div className="flex gap-6">
              {socialItems.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="text-white/20 text-xs tracking-widest uppercase">
            © 2026 <span className="brand-wordmark">Reelio</span> Agency. All rights reserved.
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
