/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0e1a',
        surface: '#0f172a',
        'surface-light': '#1e293b',
        primary: { DEFAULT: '#06b6d4', light: '#22d3ee', dark: '#0891b2' },
        secondary: { DEFAULT: '#f59e0b', light: '#fbbf24', dark: '#d97706' },
        accent: { DEFAULT: '#10b981', light: '#34d399', dark: '#059669' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
