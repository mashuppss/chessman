'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CompanySection = () => {
  const sectionRef = useRef(null);
  const ceoColRef = useRef(null);
  const missionRef = useRef(null);
  const approachRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ceoColRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(missionRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(approachRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="company" ref={sectionRef} className="py-16 md:py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About Chessman Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div ref={ceoColRef} className="md:col-span-1 text-center md:text-left invisible translate-y-[50px]">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-primary">
              <Image
                src="/assets/ceo.jpg"
                alt="Valerie Chessman, RN CCM - CEO of Chessman Solutions"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">
              Valerie Chessman, RN CCM
            </h3>
            <p className="text-lg text-[#cc9a26] font-medium mb-4">
              CEO & Founder
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              With extensive experience and a passion for eldercare, Valerie leads Chessman Solutions with dedication to client advocacy and building trusting relationships.
            </p>
          </div>

          <div className="md:col-span-2">
            <div ref={missionRef} className="mb-10 invisible translate-y-[50px]">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-l-4 border-primary pl-3">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Chessman Solutions strives to provide meaningful choices for elders and their families. These solutions offer long term balance vs. quick fixes, allowing us to help people with difficult medical decisions. We help people transition with dignity and peace.
              </p>
            </div>

            <div ref={approachRef} className="invisible translate-y-[50px]">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-l-4 border-primary pl-3">
                Our Approach
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                As part of the Cameron Group for over 6 years, an integral part of Valerie's career has been to advocate for clients. Having an incredible passion for eldercare, she learned the value of hard work, building relationships, and earning trust.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The care management style developed brings medical experiences that help guide Chessman Solutions, LLC, ensuring comprehensive and compassionate support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;