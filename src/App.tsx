import { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring } from "motion/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Offerings } from "@/components/sections/Offerings";
import { Resources } from "@/components/sections/Resources";
import { Contact } from "@/components/sections/Contact";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "A" || (e.target as HTMLElement).tagName === "BUTTON") {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary mix-blend-difference pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
    />
  );
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading time for preloader
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-reelio-black text-white selection:bg-primary selection:text-white">
      <Preloader />
      <CustomCursor />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Hero />
        <About />
        <Offerings />
        <Resources />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  );
}
