import React from 'react';
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AgingLifeCareSection from "../components/AgingLifeCareSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CompanySection from "../components/CompanySection";
import ContactForm from "../components/ContactForm"; // Import ContactForm

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AgingLifeCareSection />
      <TestimonialsSection />
      <CompanySection />
      <ContactForm /> {/* Add ContactForm */}
    </>
  );
}