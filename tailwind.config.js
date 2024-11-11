/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
      },
      keyframes: {
        'tracking-in-expand-fwd': {
          '0%': {
            letterSpacing: '-0.5em',
            transform: 'translateZ(-700px)',
            opacity: '0',
          },
          '40%': {
            opacity: '0.6',
          },
          '100%': {
            transform: 'translateZ(0)',
            opacity: '1',
          },
        },
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'tracking-in-expand-fwd': 'tracking-in-expand-fwd 0.9s ease-out 1s alternate both',
        'scroll': 'scroll 20s linear infinite', // Add the scrolling animation
      },
    },
  },
  plugins: [],
};
