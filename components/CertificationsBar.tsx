import React from 'react';
import Image from 'next/image';
import nextConfig from '../next.config.mjs';

const basePath = nextConfig.basePath || '';

const CertificationsBar = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-4 md:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4">
          {/* Left Certification */}
          <div className="flex justify-center"> {/* Removed md:justify-start */}
            <Image
              src={`${basePath}/assets/cert02.jpg`}
              alt="Certification Seal 2"
              width={100}
              height={100}
              className="h-16 md:h-20 w-auto object-contain"
              unoptimized
            />
          </div>

          {/* Phone Number - Remove "Call Us:" and increase font size */}
          <div className="text-center">
            <a
              href="tel:4076649054"
              className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary hover:underline"
            >
              407.664.9054
            </a>
          </div>

          {/* Right Certification */}
          <div className="flex justify-center"> {/* Removed md:justify-end */}
            <Image
              src={`${basePath}/assets/cert01.jpg`}
              alt="Certification Seal 1"
              width={100}
              height={100}
              className="h-16 md:h-20 w-auto object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsBar;