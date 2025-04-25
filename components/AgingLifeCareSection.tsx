import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import nextConfig from '../next.config.mjs'; // Import the config

const basePath = nextConfig.basePath || ''; // Get basePath

const AgingLifeCareSection = () => {
  return (
    <section id="aging-life-care" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Aging Life Care Association&trade;
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Image Column */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={`${basePath}/assets/ALCA_Infographic_OCT2015_FINAL_small.jpg`} // Add basePath
                alt="Aging Life Care Association Infographic"
                layout="fill"
                objectFit="cover"
                className="transform transition duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition duration-300"></div> {/* Subtle overlay */}
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-2">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              An Aging Life Care Professional&trade;, also known as a geriatric care manager, is a health and human services specialist who acts as a guide and advocate for families who are caring for older relatives or disabled adults. They are educated and experienced in any of several fields related to aging life care/care management, including, but not limited to nursing, gerontology, social work, or psychology, with a specialized focus on issues related to aging and elder care.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              They assist older adults and persons with disabilities in attaining their maximum functional potential. The individual’s independence is encouraged, while safety and security concerns are also addressed. Aging Life Care Professionals are able to address a broad range of issues related to the well-being of their client. They also have extensive knowledge about the costs, quality, and availability of resources in their communities.
            </p>

            {/* Read More Button */}
            <div className="mt-8 flex justify-center md:justify-start">
              <Link
                href="/aging-life-care" // Link to the new page
                className="bg-primary text-white font-semibold px-6 py-3 rounded-md shadow-md
                           hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900
                           transition duration-300 ease-in-out transform hover:scale-105"
              >
                Learn More About Aging Life Care
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgingLifeCareSection;