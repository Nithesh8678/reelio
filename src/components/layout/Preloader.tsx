"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [logoReady, setLogoReady] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-reelio-black flex flex-col items-center justify-center"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center"
            >
              {logoReady ? (
                <img
                  src="/brand/logo-text.png"
                  alt="Reelio"
                  className="w-[290px] md:w-[560px] h-auto"
                  onError={() => setLogoReady(false)}
                />
              ) : (
                <span className="brand-wordmark text-7xl md:text-[10rem] text-white">
                  Reelio<span className="text-primary">.</span>
                </span>
              )}
            </motion.div>
            
            <div className="absolute -bottom-12 left-0 w-full flex items-center justify-between px-2">
              <div className="text-xs font-bold tracking-[0.5em] text-white/40 uppercase">Loading</div>
              <div className="text-4xl font-heading font-bold text-primary">
                {Math.min(progress, 100)}%
              </div>
            </div>
          </div>

          <div className="absolute bottom-20 left-0 w-full px-12">
            <div className="h-[1px] w-full bg-white/10 relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
