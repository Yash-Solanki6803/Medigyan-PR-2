/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'medicine-background': 'url("/img/medicine-background.jpg")',
          'gradient-linear': 'linear-gradient(0deg,rgb(192, 217, 233) 0%, white 100%)',
      },
      colors:{
        // custom color with base :#1a83c9
        brand:{
          //keeping base color:#1a83c9
          50: '#e6f1f8',
          100: '#c0d9e9',
          200: '#9ac1da',
          300: '#74a9cb',
          400: '#4e91bc',
          500: '#2879ad',
          600: '#1a6391',
          700: '#144d71',
          800: '#0e3851',
          900: '#082331',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
