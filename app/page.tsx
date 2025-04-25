import React from 'react';
import HeroSection from '@/components/HeroSection';
import CertificationsBar from '@/components/CertificationsBar';
import ServicesSection from '@/components/ServicesSection';
import CompanySection from '@/components/CompanySection';
import AgingLifeCareSection from '@/components/AgingLifeCareSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm'; // Changed from ContactSection

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <CertificationsBar />
      <ServicesSection />
      <CompanySection />
      <AgingLifeCareSection />
      <TestimonialsSection />
      <ContactForm /> {/* Changed from ContactSection */}
    </main>
  );
}