/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'rgba(42, 42, 58, 0.6)',
        card: '#12121a',
        'card-hover': '#1a1a24',
        'foreground': '#e4e4ed',
        muted: '#8888a0',
        accent: '#6c5ce7',
        'accent-hover': '#7c6cf7',
        green: '#00d68f',
        amber: '#ffb800',
        red: '#ff4757',
        bg: '#0a0a0f',
      },
    },
  },
  plugins: [],
};
