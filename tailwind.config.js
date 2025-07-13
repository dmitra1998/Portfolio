import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  plugins: [typography],
};

export default config;