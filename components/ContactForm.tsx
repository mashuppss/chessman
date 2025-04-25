'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Define validation schema with Zod
const FormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(), // Optional phone number
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Infer the type from the schema
type FormValues = z.infer<typeof FormSchema>;

// --- REPLACE WITH YOUR ACTUAL GOOGLE FORM DETAILS ---
const GOOGLE_FORM_ACTION_URL = 'YOUR_GOOGLE_FORM_ACTION_URL'; // Paste your Action URL here
const NAME_FIELD_ID = 'entry.XXXXXX'; // Paste Name field ID here
const EMAIL_FIELD_ID = 'entry.YYYYYY'; // Paste Email field ID here
const PHONE_FIELD_ID = 'entry.ZZZZZZ'; // Paste Phone field ID here (Make sure this field exists in your Google Form if not optional)
const MESSAGE_FIELD_ID = 'entry.WWWWWW'; // Paste Message field ID here
// -----------------------------------------------------

export default function ContactForm() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const formBoxRef = useRef(null);

  // GSAP Scroll Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Title and Text
      gsap.from([titleRef.current, textRef.current], {
        autoAlpha: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });
      // Animate Form Box
      gsap.from(formBoxRef.current, {
        autoAlpha: 0,
        y: 50,
        duration: 1,
        delay: 0.2, // Slightly delay form appearance
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmissionStatus('submitting');
    setSubmissionMessage('');

    const formData = new FormData();
    formData.append(NAME_FIELD_ID, data.name);
    formData.append(EMAIL_FIELD_ID, data.email);
    if (data.phone && PHONE_FIELD_ID !== 'entry.ZZZZZZ') { // Only append if phone exists and ID is set
        formData.append(PHONE_FIELD_ID, data.phone);
    }
    formData.append(MESSAGE_FIELD_ID, data.message);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      setSubmissionStatus('success');
      setSubmissionMessage('Thank you! Your message has been sent successfully.');
      reset();

      setTimeout(() => {
          setSubmissionStatus('idle');
          setSubmissionMessage('');
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus('error');
      setSubmissionMessage('An error occurred. Please try again later.');
    }
  };

  // Define input classes using Chessman theme colors
  const inputClasses = "w-full p-3 rounded-md border bg-background-light dark:bg-gray-700 text-text-light dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition duration-300 ease-in-out";
  const borderClasses = "border-gray-300 dark:border-gray-600";
  // Focus glow using primary color (#cc9a26) - adjust RGB values if primary changes
  const focusClasses = "focus:border-primary dark:focus:border-primary focus:shadow-[0_0_0_2px_rgba(204,154,38,0.5)] dark:focus:shadow-[0_0_0_2px_rgba(204,154,38,0.5)]";
  const errorClasses = "border-red-500 dark:border-red-400 focus:shadow-[0_0_0_2px_rgba(239,68,68,0.5)] dark:focus:shadow-[0_0_0_2px_rgba(248,113,113,0.5)]";

  return (
    // Add scroll-mt here
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-background-light dark:bg-gray-900 overflow-hidden scroll-mt-20 md:scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Use theme text colors */}
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-center mb-4 text-text-light dark:text-white invisible">
          Contact Us for Support
        </h2>
        {/* Use theme text colors */}
        <p ref={textRef} className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto invisible">
          Have questions or need assistance? Fill out the form below, and we'll be in touch promptly.
        </p>
        {/* Use theme card/border colors */}
        <div ref={formBoxRef} className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 invisible">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Full Name"
                {...register('name')}
                className={`${inputClasses} ${errors.name ? errorClasses : `${borderClasses} ${focusClasses}`}`}
                aria-invalid={errors.name ? "true" : "false"}
                disabled={submissionStatus === 'submitting'}
              />
              {errors.name && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                {...register('email')}
                className={`${inputClasses} ${errors.email ? errorClasses : `${borderClasses} ${focusClasses}`}`}
                aria-invalid={errors.email ? "true" : "false"}
                disabled={submissionStatus === 'submitting'}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email.message}</p>}
            </div>

            {/* Phone Field (Optional) */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone <span className="text-xs text-gray-500">(Optional)</span></label>
              <input
                id="phone"
                type="tel"
                placeholder="(123) 456-7890"
                {...register('phone')}
                className={`${inputClasses} ${errors.phone ? errorClasses : `${borderClasses} ${focusClasses}`}`}
                aria-invalid={errors.phone ? "true" : "false"}
                disabled={submissionStatus === 'submitting'}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.phone.message}</p>}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                placeholder="How can we help you?"
                rows={5}
                {...register('message')}
                className={`${inputClasses} ${errors.message ? errorClasses : `${borderClasses} ${focusClasses}`}`}
                aria-invalid={errors.message ? "true" : "false"}
                disabled={submissionStatus === 'submitting'}
              />
              {errors.message && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.message.message}</p>}
            </div>

            {/* Submit Button - Use theme primary color */}
            <div>
              <button
                type="submit"
                disabled={submissionStatus === 'submitting'}
                className={`w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow hover:opacity-90 transition-opacity duration-200 flex items-center justify-center ${submissionStatus === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {submissionStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>

            {/* Submission Status Message */}
            {submissionMessage && (
              <div className={`mt-4 text-center text-sm p-3 rounded-md ${
                submissionStatus === 'success' ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100' : // Adjusted dark mode success colors
                submissionStatus === 'error' ? 'bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100' : '' // Adjusted dark mode error colors
              }`}>
                {submissionMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}