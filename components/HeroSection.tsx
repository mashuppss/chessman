'use client'; // Required for hooks like useEffect, useRef

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap'; // Import GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  // Refs for elements to animate
  const heroRef = useRef<HTMLElement>(null); // Ref for the section container
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Ensure GSAP animations run only on the client
    if (typeof window !== 'undefined') {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Initial state (optional, helps prevent flash of unstyled content)
      gsap.set([headlineRef.current, paragraphRef.current, buttonRef.current], { autoAlpha: 0, y: 30 });

      // Animation sequence
      tl.to(headlineRef.current, { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.3 })
        .to(paragraphRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.4") // Overlap start slightly
        .to(buttonRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3"); // Overlap start slightly
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section id="hero" ref={heroRef} className="relative flex items-center justify-center min-h-screen text-white">
      {/* Background Image */}
      <Image
        src="/assets/Heroimage.jpg"
        alt="Compassionate elder care support"
        layout="fill"
        objectFit="cover"
        quality={85}
        priority
        className="-z-10"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>

      {/* Content */}
      <div className="z-10 text-center px-4">
        <h1 ref={headlineRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-md opacity-0"> {/* Start hidden */}
          Navigating Elder Care
        </h1>
        <p ref={paragraphRef} className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow opacity-0"> {/* Start hidden */}
          Expert guidance and compassionate support for seniors and their families.
        </p>
        <button
          ref={buttonRef}
          className="bg-primary text-white font-semibold px-8 py-3 rounded-md shadow-lg
                     hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black
                     transition duration-300 ease-in-out transform hover:scale-105 opacity-0" // Start hidden
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Advice Today
        </button>
      </div>
    </section>
  );
};

export default HeroSection;