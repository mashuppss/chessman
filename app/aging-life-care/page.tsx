import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import nextConfig from '../../next.config.mjs'; // Adjust path as needed

const basePath = nextConfig.basePath || '';

const AgingLifeCarePage = () => {
  const services = [
    "Advocacy", "Assessment", "Crisis Intervention", "Care Management",
    "Consultation", "Education", "Home Care", "Insurance",
    "Information/Referral", "Placement"
  ];

  return (
    <main className="bg-background-light dark:bg-gray-900 text-text-light dark:text-text-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Aging Life Care Association&trade;
        </h1>

        {/* Grid Layout: Sidebar + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Left Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Certification Image */}
            <div className="flex justify-center">
              <Image
                src={`${basePath}/assets/cert02.jpg`}
                alt="Certification Seal"
                width={150}
                height={150}
                className="object-contain rounded-md shadow-md"
                unoptimized
              />
            </div>

            {/* CEO Headshot */}
            <div className="flex justify-center">
              <Image
                src={`${basePath}/assets/headshot2.jpg`}
                alt="Valerie Chessman, CEO"
                width={180}
                height={180}
                className="object-cover rounded-full shadow-lg border-4 border-primary/50"
                unoptimized
              />
            </div>

            {/* CEO Details */}
            <div className="text-center md:text-left bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
              <p className="font-bold text-lg text-gray-800 dark:text-gray-100">Valerie Chessman, RN CCM</p>
              <p className="text-sm text-primary dark:text-secondary mb-3">Chessman Solutions - CEO</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">P.O. Box 917623</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Longwood, Fl. 32791</p>
              <p className="text-sm text-gray-600 dark:text-gray-300"><strong>Member Level:</strong> Advanced Professional</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3"><strong>Join Date:</strong> 02/03/2015</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Phone:</strong> <a href="tel:4076649054" className="hover:underline text-primary dark:text-secondary">(407) 664-9054</a>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Fax:</strong> (407) 875-0230
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 break-words">
                <strong>Email:</strong> <a href="mailto:valerie@chessmansolutions.com" className="hover:underline text-primary dark:text-secondary">valerie@chessmansolutions.com</a>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Chapter:</strong> Florida Chapter
              </p>
            </div>

            {/* Services List */}
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Areas of Expertise</h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            {/* Infographic */}
            <div className="flex justify-center">
              <Image
                src={`${basePath}/assets/ALCA_Infographic_OCT2015_FINAL_small.jpg`}
                alt="Aging Life Care Association Infographic"
                width={300} // Adjust width as needed
                height={450} // Adjust height based on aspect ratio
                className="object-contain rounded-md shadow-md"
                unoptimized
              />
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Introduction Section */}
            <section className="mb-12 prose prose-lg dark:prose-invert max-w-none">
              <p>
                An Aging Life Care Professional&trade;, also known as a geriatric care manager, is a health and human services specialist who acts as a guide and advocate for families who are caring for older relatives or disabled adults. They are educated and experienced in any of several fields related to aging life care/care management, including, but not limited to nursing, gerontology, social work, or psychology, with a specialized focus on issues related to aging and elder care.
              </p>
              <p>
                Aging Life Care Professionals assist older adults and persons with disabilities in attaining their maximum functional potential. The individual’s independence is encouraged, while safety and security concerns are also addressed. Aging Life Care Professionals are able to address a broad range of issues related to the well-being of their client. They also have extensive knowledge about the costs, quality, and availability of resources in their communities.
              </p>
              <p>
                Aging Life Care Professionals are members of the Aging Life Care Association&trade; (ALCA) and differ from Patient Advocates, Senior Advisors, Senior Navigators, and Elder Advocates. ALCA members must meet stringent education, experience, and certification requirements of the organization, and all members are required to adhere to a strict Code of Ethics and Standards of Practice.
              </p>
            </section>

            {/* What is an Aging Life Care Professional? */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                What is an Aging Life Care Professional&trade;?
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  An Aging Life Care Professional is dedicated to helping clients age well while also supporting quality of life for family members. This phase of a family’s journey together is often complicated, challenging, and stressful. Finding the right help can make a difference.
                </p>
                <p>
                  The expertise of Aging Life Care Professionals includes assessing problems and assisting with:
                </p>
                <ul>
                  <li>Health and disability</li>
                  <li>Financial concerns</li>
                  <li>Social and emotional needs</li>
                  <li>Safety and security</li>
                  <li>Legal matters</li>
                  <li>Family dynamics</li>
                </ul>
                <p>
                  With a specialized focus on issues related to aging and elder care, Aging Life Care Professionals provide a holistic, client-centered approach. They offer solutions, apply knowledge and experience, and tailor support for the individual. They serve as a guide and advocate for families navigating the complexities of care.
                </p>
              </div>
            </section>

            {/* How are they different? */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                How are Aging Life Care Professionals Different?
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Aging Life Care Professionals must meet rigorous requirements, including advanced education and experience in fields like gerontology, social work, nursing, or psychology. They are required to adhere to ALCA’s strict Code of Ethics and Standards of Practice. This commitment ensures a high level of professionalism and ethical conduct.
                </p>
                <p>
                  Unlike Senior Advisors or placement agencies whose focus might be limited or commission-based, Aging Life Care Professionals provide comprehensive, unbiased guidance tailored to the client's unique situation. Their holistic approach considers all aspects of a client's well-being, ensuring personalized and effective care plans.
                </p>
              </div>
            </section>

            {/* How do you select one? */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                How Do You Select an Aging Life Care Professional?
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  When selecting an Aging Life Care Professional, consider their credentials, experience, and approach. Look for ALCA members who hold relevant certifications (like CMC, C-ASWCM, or C-SWCM). Schedule consultations to discuss your needs and assess their communication style and compatibility with your family.
                </p>
                <p>
                  Key questions to ask include:
                </p>
                <ul>
                  <li>What are your qualifications and certifications?</li>
                  <li>How long have you been practicing?</li>
                  <li>What are your areas of expertise?</li>
                  <li>How do you communicate with clients and families?</li>
                  <li>What are your fees and payment structure?</li>
                </ul>
                <p>
                  Choosing the right professional is crucial for ensuring your loved one receives the best possible care and support.
                </p>
              </div>
            </section>

            {/* What are the benefits? */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                What are the Benefits of Using an Aging Life Care Professional?
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Working with an Aging Life Care Professional offers numerous benefits:
                </p>
                <ul>
                  <li>
                    <strong>Personalized Care:</strong> Tailored plans address the individual’s specific needs and preferences.
                  </li>
                  <li>
                    <strong>Expert Guidance:</strong> Navigate complex health, financial, and legal issues with professional support.
                  </li>
                  <li>
                    <strong>Continuity of Care:</strong> Ensure seamless transitions between different care settings and providers.
                  </li>
                  <li>
                    <strong>Cost-Effectiveness:</strong> Avoid unnecessary services and hospitalizations, potentially saving money in the long run.
                  </li>
                  <li>
                    <strong>Reduced Family Stress:</strong> Provide peace of mind for family caregivers, knowing their loved one is in capable hands.
                  </li>
                  <li>
                    <strong>Quality Control:</strong> Ongoing monitoring and advocacy ensure high standards of care.
                  </li>
                </ul>
                <p>
                  Ultimately, an Aging Life Care Professional helps enhance the quality of life for both the older adult and their family.
                </p>
              </div>
            </section>

            {/* Optional: Add back button or link */}
            <div className="text-center mt-16">
              <Link href="/" className="text-primary hover:underline">
                &larr; Back to Home
              </Link>
            </div>
          </div> {/* End Main Content Area */}

        </div> {/* End Grid Layout */}
      </div>
    </main>
  );
};

export default AgingLifeCarePage;