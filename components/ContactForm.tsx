'use client'; // Needed for useState and event handlers

import React, { useState, FormEvent } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // --- REPLACE WITH YOUR ACTUAL GOOGLE FORM DETAILS ---
  const GOOGLE_FORM_ACTION_URL = 'YOUR_GOOGLE_FORM_ACTION_URL'; // Paste your Action URL here
  const NAME_FIELD_ID = 'entry.XXXXXX'; // Paste Name field ID here
  const EMAIL_FIELD_ID = 'entry.YYYYYY'; // Paste Email field ID here
  const PHONE_FIELD_ID = 'entry.ZZZZZZ'; // Paste Phone field ID here
  const MESSAGE_FIELD_ID = 'entry.WWWWWW'; // Paste Message field ID here
  // -----------------------------------------------------

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Check if placeholder URL is still present
    if (GOOGLE_FORM_ACTION_URL === 'YOUR_GOOGLE_FORM_ACTION_URL') {
      console.error("Google Form URL not configured in ContactForm.tsx");
      setSubmitStatus('error');
      alert("Form submission is not configured correctly. Please contact support."); // User-friendly message
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare data in the format Google Forms expects (URL encoded)
    const googleFormData = new FormData();
    googleFormData.append(NAME_FIELD_ID, formData.name);
    googleFormData.append(EMAIL_FIELD_ID, formData.email);
    googleFormData.append(PHONE_FIELD_ID, formData.phone); // Include even if empty
    googleFormData.append(MESSAGE_FIELD_ID, formData.message);

    try {
      const response = await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors', // Important: Google Forms blocks CORS, 'no-cors' sends the request but doesn't read the response
        body: new URLSearchParams(googleFormData as any), // Convert FormData to URLSearchParams
      });

      // Since mode is 'no-cors', we can't check response.ok or status.
      // We optimistically assume success if the fetch doesn't throw an error.
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form

    } catch (error) {
      console.error('Error submitting to Google Form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Basic input styling with focus effect
  const inputStyle = `w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc9a26] focus:border-transparent transition duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400`;
  const errorStyle = 'text-red-500 text-sm mt-1';

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Get Advice Today
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`${inputStyle} ${errors.name ? 'border-red-500' : ''}`}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <p id="name-error" className={errorStyle}>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`${inputStyle} ${errors.email ? 'border-red-500' : ''}`}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <p id="email-error" className={errorStyle}>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className={`${inputStyle} ${errors.phone ? 'border-red-500' : ''}`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && <p id="phone-error" className={errorStyle}>{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="How can we help?"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`${inputStyle} ${errors.message ? 'border-red-500' : ''}`}
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            ></textarea>
            {errors.message && <p id="message-error" className={errorStyle}>{errors.message}</p>}
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-md
                         hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800
                         transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {submitStatus === 'success' && (
            <p className="text-center text-green-600 dark:text-green-400 mt-4">
              Thank you! Your message has been sent successfully.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-center text-red-500 dark:text-red-400 mt-4">
              Oops! Something went wrong. Please try again later or contact us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;