'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';
import nextConfig from '../next.config.mjs';

const basePath = nextConfig.basePath || '';
const HEADER_HEIGHT_MOBILE = 64; // h-16 = 4rem = 64px
const HEADER_HEIGHT_DESKTOP = 80; // h-20 = 5rem = 80px

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#company' },
    { name: 'Aging Life Care', href: '/aging-life-care' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isMobile = window.innerWidth < 768;
    if (isOpen && isMobile) {
      setIsOpen(false); // Close mobile menu if open
    }

    // Check if it's an internal hash link
    if (href.startsWith('/#')) {
      // Check if we are currently on the root page (considering basePath)
      const rootPath = basePath ? `${basePath}/` : '/';
      const currentPath = window.location.pathname;

      if (currentPath === rootPath || currentPath === '/') { // Check both '/' and '/basePath/'
        // We are on the homepage, handle scroll manually
        event.preventDefault(); // Prevent default only if scrolling manually
        const id = href.substring(2);
        const element = document.getElementById(id);

        if (element) {
          const headerHeight = isMobile ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT_DESKTOP;
          const elementTopRelativeToDocument = window.scrollY + element.getBoundingClientRect().top;
          const targetScrollPosition = elementTopRelativeToDocument - headerHeight - 10;

          window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth',
          });
        } else {
          console.warn(`Element with ID "${id}" not found for scrolling.`);
        }
      }
      // If NOT on the root path, do nothing here.
      // Allow the default Link behavior to navigate to the root path first.
      // The browser will then handle the hash scroll, respecting scroll-mt.
    }
    // For non-hash links (like '/' or '/aging-life-care'),
    // do nothing here, allow the Next.js Link component to handle navigation normally.
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-3" prefetch={false} onClick={(e) => handleLinkClick(e, '/')}>
            <Image
              src={`${basePath}/assets/chessman-logo.svg`}
              alt="Chessman Solutions Logo"
              width={100}
              height={100}
              className="h-20 w-auto"
              unoptimized
            />
            <span className="text-xl font-semibold text-white hidden sm:inline">Chessman Solutions</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-100 hover:text-white transition-colors duration-200"
              onClick={(e) => handleLinkClick(e, link.href)}
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-primary absolute top-full left-0 right-0 shadow-md pb-4`}>
        <div className="flex flex-col items-center space-y-4 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-100 hover:text-white transition-colors duration-200"
              onClick={(e) => handleLinkClick(e, link.href)}
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;