'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import nextConfig from '../next.config.mjs';

const basePath = nextConfig.basePath || '';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Company Info */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4 space-x-3">
              <Image
                src={`${basePath}/assets/chessman-logo.svg`}
                alt="Chessman Solutions Logo"
                width={40}
                height={40}
                className="h-40 w-auto"
                unoptimized
              />
              <span className="text-xl font-semibold text-white">Chessman Solutions</span>
            </div>
            <p className="text-sm text-gray-200">Navigating elder care! guidance and support.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#company" className="text-gray-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-sm text-gray-300">
          &copy; {currentYear} Chessman Solutions, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;