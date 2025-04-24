'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        message: "Chessman Solutions provided exceptional care for my mother. Their team was compassionate and professional.",
        image: "/assets/testimonial1.jpg"
    },
    {
        id: 2,
        name: "Jane Smith",
        message: "I can't thank Chessman Solutions enough for their support during a difficult time. Highly recommend!",
        image: "/assets/testimonial2.jpg"
    },
    {
        id: 3,
        name: "Emily Johnson",
        message: "The staff at Chessman Solutions truly cares about their clients. They made a significant difference in our lives.",
        image: "/assets/testimonial3.jpg"
    }
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(titleRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(cardsRef.current.filter(el => el !== null), {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white invisible translate-y-[50px]">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={el => { cardsRef.current[index] = el; }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 invisible translate-y-[50px]"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#cc9a26]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;