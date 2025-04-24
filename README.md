# Chessman Solutions Website

A modern, responsive website for Chessman Solutions, an elder care company, built with Next.js, Tailwind CSS, and GSAP. Inspired by minimalist and premium design aesthetics.

## Features

*   Sleek, professional design with dark/light mode.
*   Multiple sections: Hero, Services, Aging Life Care, Testimonials, Company, Contact.
*   Smooth animations using GSAP (on Hero and Services sections).
*   Dark/Light mode toggle with persistence (`next-themes`).
*   Fully responsive design for mobile, tablet, and desktop.
*   Contact form integrated with Google Forms.
*   Sticky header with mobile navigation.
*   Iconography using `react-icons`.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (v14+ with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
*   **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (Version >= 18.x recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository (or ensure you are in the project directory):
    ```bash
    # cd /path/to/chessman-solutions-website
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    # yarn install
    ```

### Running the Development Server

1.  Start the development server:
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
2.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
# yarn build
```

This will generate the production-ready files in the `.next` directory.

## Deployment

This project is set up for standard Next.js deployment.

1.  Build the project using `npm run build`.
2.  The output in the `.next` folder can then be deployed to hosting providers that support Next.js applications, such as:
    *   [Vercel](https://vercel.com/) (Recommended for Next.js)
    *   [Netlify](https://www.netlify.com/)
    *   Other Node.js hosting environments.

For manual deployment (e.g., to GitHub Pages), you might need to configure Next.js for static export (`output: 'export'` in `next.config.mjs`) if the application doesn't rely heavily on server-side features used at runtime. Consult the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for details specific to your target platform.

## Configuration

### Google Forms Integration

The contact form (`components/ContactForm.tsx`) is designed to submit data to a Google Form. You **must** configure it with your own form details:

1.  Create a Google Form with fields for Name, Email, Phone (optional), and Message.
2.  Follow the instructions in the comments within `components/ContactForm.tsx` to:
    *   Find your Google Form's **Action URL**.
    *   Find the unique **Field IDs** (`entry.XXXXXX`) for each input field by inspecting the live Google Form.
3.  Replace the placeholder values for `GOOGLE_FORM_ACTION_URL`, `NAME_FIELD_ID`, `EMAIL_FIELD_ID`, `PHONE_FIELD_ID`, and `MESSAGE_FIELD_ID` in the component file.

## Project Structure

*   `app/`: Contains the core application routing (App Router), layout, pages, and global styles.
*   `components/`: Reusable React components used across different pages/sections.
*   `public/`: Static assets like images and fonts.
*   `styles/`: Global CSS files.
*   Configuration files (`next.config.mjs`, `tailwind.config.ts`, `tsconfig.json`, `package.json`).