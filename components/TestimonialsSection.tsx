'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; // Import quote icons
import nextConfig from '../next.config.mjs'; // Corrected path

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const basePath = nextConfig.basePath || ''; // Get basePath

// --- Add StarIcon and Rating Components ---
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`w-5 h-5 ${filled ? 'text-primary' : 'text-gray-300 dark:text-gray-500'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Rating = ({ score }: { score: number }) => (
  <div className="flex items-center mb-4"> {/* Added margin-bottom */}
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} filled={i < score} />
    ))}
  </div>
);
// --- End StarIcon and Rating Components ---


// Update testimonials data to include rating
const testimonials = [
    {
        id: 1,
        name: "John Doe",
        message: "Chessman Solutions provided exceptional care for my mother. Their team was compassionate and professional.",
        image: "/assets/customers/1.png",
        rating: 5 // Added rating
    },
    {
        id: 2,
        name: "Jane Smith",
        message: "I can't thank Chessman Solutions enough for their support during a difficult time. Highly recommend!",
        image: "/assets/customers/2.png",
        rating: 5 // Added rating
    },
    {
        id: 3,
        name: "Emily Johnson",
        message: "The staff at Chessman Solutions truly cares about their clients. They made a significant difference in our lives.",
        image: "/assets/customers/3.png",
        rating: 5 // Added rating
    }
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // --- GSAP useEffect remains the same ---
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
  // --- End GSAP useEffect ---


  return (
    // Add scroll-mt here
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-24 bg-card-light dark:bg-card-dark overflow-hidden scroll-mt-20 md:scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Use theme colors for text */}
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-light dark:text-text-dark invisible translate-y-[50px]">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={el => { cardsRef.current[index] = el; }}
              // Apply new styling similar to roofing project, using theme colors
              className="bg-background-light dark:bg-background-dark p-6 md:p-8 rounded-xl shadow-lg border border-border-light dark:border-border-dark
                         flex flex-col items-center text-center
                         transform transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl
                         invisible translate-y-[50px]"
            >
              {/* Customer Image and Info Section */}
              <div className="mb-5 flex flex-col items-center"> {/* Reduced mb slightly */}
                 {/* Adjusted ring/bg colors for theme */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-primary/10 dark:bg-primary/20 ring-2 ring-primary/30 dark:ring-primary/40 mb-3">
                  <Image
                    src={`${basePath}${testimonial.image}`}
                    alt={testimonial.name}
                    fill
                    sizes="96px"
                    className="object-cover" // Use cover for potentially non-square images
                    unoptimized
                  />
                </div>
                {/* Use theme text colors */}
                <p className="font-semibold text-lg text-text-light dark:text-text-dark">{testimonial.name}</p>
                {/* Optional: Add location if available */}
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p> */}
              </div>

              {/* Rating */}
              <Rating score={testimonial.rating} />

              {/* Quote Section */}
              <div className="relative flex-grow mt-2"> {/* Reduced mt slightly */}
                {/* Adjusted quote icon colors */}
                <FaQuoteLeft className="absolute -top-2 -left-2 text-3xl text-gray-300 dark:text-gray-600 opacity-50" />
                {/* Use theme text colors */}
                <blockquote className="text-gray-700 dark:text-gray-300 italic text-base px-4 z-10">
                  {testimonial.message}
                </blockquote>
                {/* Adjusted quote icon colors */}
                <FaQuoteRight className="absolute -bottom-2 -right-2 text-3xl text-gray-300 dark:text-gray-600 opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;