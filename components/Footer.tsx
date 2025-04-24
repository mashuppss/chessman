'use client'; // Add this directive at the top

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FaFacebookF },
    { name: 'LinkedIn', href: '#', icon: FaLinkedinIn },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#company' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    // Apply primary background and base light text color
    <footer className="bg-primary text-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info/Logo */}
           <div className="mb-6 md:mb-0">
             {/* White text for heading */}
             <h3 className="text-xl font-semibold mb-2 text-white">Chessman Solutions</h3>
             {/* Lighter text for paragraph */}
             <p className="text-sm text-gray-200">Expert Elder Care Guidance</p>
          </div>

          {/* Quick Links */}
          <div>
            {/* White text for heading */}
            <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {/* Lighter text for links, white on hover */}
                  <Link href={link.href} className="hover:text-white transition-colors duration-200 text-sm text-gray-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            {/* White text for heading */}
            <h4 className="text-lg font-semibold mb-3 text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Lighter text for icons, white on hover
                  className="text-gray-200 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
           <div>
            {/* White text for heading */}
            <h4 className="text-lg font-semibold mb-3 text-white">Newsletter</h4>
            {/* Lighter text for paragraph */}
            <p className="text-sm mb-3 text-gray-200">Stay updated with our latest news.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              {/* Adjusted input style for contrast */}
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow px-3 py-2 text-sm bg-white/10 border border-white/30 rounded-l-md focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-white/50 text-white placeholder-gray-300"
                aria-label="Newsletter email input"
              />
              {/* Adjusted button style for contrast */}
              <button
                type="submit"
                className="px-4 py-2 bg-white text-primary text-sm font-semibold rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* Adjusted border and text color */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-gray-200">
          <p>&copy; {currentYear} Chessman Solutions, LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;