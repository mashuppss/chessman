import React from 'react';
import Image from 'next/image'; // Use Next.js Image for optimization

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
            {/* Placeholder for high-resolution image */}
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/assets/ALCA_Infographic_OCT2015_FINAL_small.jpg" // Updated image path
                alt="Aging Life Care Association Infographic" // Updated alt text
                layout="fill"
                objectFit="cover"
                className="transform transition duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition duration-300"></div> {/* Subtle overlay */}
            </div>
          </div>

          {/* Content and Certifications Column */}
          <div className="md:col-span-2">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              An Aging Life Care Professional&trade;, also known as a geriatric care manager, is a health and human services specialist who acts as a guide and advocate for families who are caring for older relatives or disabled adults. They are educated and experienced in any of several fields related to aging life care/care management, including, but not limited to nursing, gerontology, social work, or psychology, with a specialized focus on issues related to aging and elder care.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              They assist older adults and persons with disabilities in attaining their maximum functional potential. The individual’s independence is encouraged, while safety and security concerns are also addressed. Aging Life Care Professionals are able to address a broad range of issues related to the well-being of their client. They also have extensive knowledge about the costs, quality, and availability of resources in their communities.
            </p>

            {/* Certification Images */}
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Certification 1 */}
              <div className="relative w-24 h-24 group transition duration-300 ease-in-out hover:opacity-80 cursor-pointer">
                <Image
                  src="/assets/cert01.jpg" // Updated image path
                  alt="Certification 1"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              {/* Certification 2 */}
              <div className="relative w-24 h-24 group transition duration-300 ease-in-out hover:opacity-80 cursor-pointer">
                <Image
                  src="/assets/cert02.jpg" // Updated image path
                  alt="Certification 2"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgingLifeCareSection;