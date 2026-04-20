"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        const handleMouseOver = (e) => {
            const target = e.target;
            setIsHovering(target.tagName === "A" || target.tagName === "BUTTON");
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);
    return (<motion.div className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary mix-blend-difference pointer-events-none z-[9999] hidden md:block" animate={{
            x: position.x - 16,
            y: position.y - 16,
            scale: isHovering ? 2.5 : 1,
        }} transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}/>);
}
export function AppShell({ children }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 2500);
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        let rafId = 0;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        return () => {
            clearTimeout(timer);
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);
    return (<div className="bg-reelio-black text-white selection:bg-primary selection:text-white">
      <Preloader />
      <CustomCursor />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left" style={{ scaleX }}/>

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main key={pathname} initial={{ opacity: 0 }} animate={{ opacity: isLoaded ? 1 : 0 }} transition={{ duration: 1, delay: 0.5 }}>
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>);
}
