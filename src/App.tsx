import React, { useEffect } from 'react';
import Lenis from 'lenis';

// Component imports
import { Loader } from './components/Loader';
import { ProgressBar } from './components/ProgressBar';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { ProjectList } from './components/ProjectList';
import { FreeTemplates } from './components/FreeTemplates';
import { Experience } from './components/Experience';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fff3e6] text-[#141010] relative selection:bg-[#d4261c] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Scroll Progress Bar at the top */}
      <ProgressBar />

      {/* Custom Spring Cursor (no blend mode, plain primary red) */}
      <Cursor />

      {/* Monogram Fullscreen Loader with Slide-Up Exit */}
      <Loader />

      {/* Floating Pill Navbar with Hide on Scroll Down */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Infinite Scrolling Tilted Keyword Marquee */}
        <Marquee />

        {/* About Section with Big Typography & Stats */}
        <About />

        {/* 12-Column Bento Grid of Services with 3D TiltCards */}
        <Services />

        {/* Black Rounded Tech Stack Section with Jumping Chips */}
        <TechStack />

        {/* Numbered Project Catalog with Cursor Preview on Desktop */}
        <ProjectList />

        {/* Free Themes & Website Templates Product Catalog */}
        <FreeTemplates />

        {/* Experience Section with Red Hover Lifting Cards */}
        <Experience />

        {/* Giant Let's Work Together CTA with Magnetic Buttons */}
        <CTA />
      </main>

      {/* Black Rounded-Top Editorial Footer with Giant Brand Name */}
      <Footer />
    </div>
  );
}

