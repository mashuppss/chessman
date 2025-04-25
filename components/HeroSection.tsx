'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import nextConfig from '../next.config.mjs'; // Corrected path

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const basePath = nextConfig.basePath || ''; // Get basePath

const HeroSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to([titleRef.current, subtitleRef.current, buttonRef.current], {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-primary">
      {/* Background Image - Change objectFit to contain */}
      <Image
        src={`${basePath}/assets/HeroImage.png`} // Updated path to PNG
        alt="Compassionate elder care support"
        layout="fill"
        objectFit="contain" // Change this from "cover"
        priority
      />
      {/* Overlay - Adjust opacity for better visibility of bg-primary */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      {/* Content */}
      <div className="relative z-20 px-4">
        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-md opacity-0 translate-y-[50px]">
          Navigating Elder Care
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow opacity-0 translate-y-[50px]">
          Expert guidance and compassionate support for seniors and their families.
        </p>
        <button
          ref={buttonRef}
          className="bg-white text-primary font-semibold px-8 py-3 rounded-md shadow-lg
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary
                     transition duration-300 ease-in-out transform hover:scale-105
                     opacity-0 translate-y-[50px]"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Advice Today
        </button>
      </div>
    </section>
  );
};

export default HeroSection;