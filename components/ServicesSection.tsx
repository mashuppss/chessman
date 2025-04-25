'use client'; // Required for hooks

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBriefcaseMedical, FaUserFriends, FaHandHoldingHeart, FaBalanceScale, FaShieldAlt, FaHome } from 'react-icons/fa';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

// Updated services data with longer descriptions
const services: Service[] = [
  { id: 1, title: 'RN Medical Guidance', description: 'Leverage the expertise of registered nurses for clear medical advice, medication management reviews, understanding diagnoses, and navigating complex healthcare decisions with confidence.', icon: FaBriefcaseMedical },
  { id: 2, title: 'Client Advocacy & Navigation', description: 'Receive dedicated support in communicating with healthcare providers, understanding treatment options, and navigating the complexities of the healthcare system to ensure your voice is heard.', icon: FaUserFriends },
  { id: 3, title: 'Family Support & Mediation', description: 'Comprehensive support services designed to assist families in managing care responsibilities, facilitating communication, and mediating discussions about care planning and decision-making.', icon: FaHandHoldingHeart },
  { id: 4, title: 'Home Care Coordination', description: 'Expert assistance in arranging, coordinating, and managing in-home care services, ensuring seamless integration with your lifestyle and medical needs for optimal comfort and safety.', icon: FaHome },
  { id: 5, title: 'Private Duty Referrals', description: 'Connecting you with vetted, high-quality private caregivers and agencies tailored to specific needs, ensuring reliable and compassionate personal care and companionship.', icon: FaShieldAlt },
  { id: 6, title: 'Facility Placement Assistance', description: 'Guidance through the process of selecting appropriate rehabilitation, assisted living, or long-term care facilities, including assessments, tours, and transition support.', icon: FaBalanceScale },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!titleRef.current || cardsRef.current.length === 0) return;

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
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden scroll-mt-20 md:scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-light dark:text-text-dark invisible translate-y-[50px]">
          Our Speciality Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => { cardsRef.current[index] = el; }}
              className="w-full max-w-sm min-h-[450px] bg-background-light dark:bg-background-dark rounded-xl shadow-lg border border-border-light dark:border-border-dark
                         transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl
                         flex flex-col overflow-hidden text-center
                         invisible translate-y-[50px]"
            >
              <div className="w-full h-48 bg-primary flex items-center justify-center">
                <service.icon className="w-20 h-20 text-white" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base flex-grow">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;