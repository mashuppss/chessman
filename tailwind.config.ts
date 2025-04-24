import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Ensure this is set to 'class'
  theme: {
    extend: {
      colors: {
        // Chessman primary color
        primary: '#cc9a26',
        // Define card, border, and potentially adjusted background/text colors
        // Using names from your example but potentially different values for Chessman theme
        'background': {
          light: '#ffffff', // White
          dark: '#111827', // Darker Gray (adjust if needed)
        },
        'text': {
          light: '#1f2937', // Dark Gray
          dark: '#f9fafb', // Light Gray
        },
        'card': {
            light: '#f9fafb', // Very Light Gray (slightly off-white)
            dark: '#1f2937', // Dark Gray (matching dark text)
        },
        'border': {
            light: '#e5e7eb', // Light Gray Border
            dark: '#374151', // Medium Gray Border
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure Inter is loaded or use existing font
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Add animation keyframes if needed (GSAP handles animations here)
    },
  },
  plugins: [],
}
export default config