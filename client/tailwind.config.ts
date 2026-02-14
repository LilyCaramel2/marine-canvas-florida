import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-ocean-blue': '#0B3C5D',
        'brand-nautical-red': '#C62828',
        'brand-sail-yellow': '#F2C94C',
        'light-canvas-white': '#FAFAF7',
        'light-rope-gray': '#6B7280',
        'dark-canvas-navy': '#071A2C',
        'dark-soft-off-white': '#E6EAF0',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'inter-regular': '400',
        'inter-medium': '500',
        'montserrat-medium': '500',
        'montserrat-semibold': '600',
      },
    },
  },
  plugins: [],
} satisfies Config
