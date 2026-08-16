import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edf6f3',
          100: '#d6ebe4',
          200: '#afd7c9',
          300: '#7dbba5',
          400: '#47977c',
          500: '#287a60',
          600: '#1b624d',
          700: '#174f40',
          800: '#153f35',
          900: '#12342c',
        },
        accent: {
          50: '#eef4fa',
          100: '#d9e7f5',
          200: '#b8d2eb',
          300: '#8bb5dc',
          400: '#5791c8',
          500: '#3674b0',
          600: '#285c94',
          700: '#234b78',
          800: '#213f64',
          900: '#1f3654',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
