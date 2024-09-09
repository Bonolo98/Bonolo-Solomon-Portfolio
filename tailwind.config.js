/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      prata: ['prata', 'serif']
    },
    colors: {
      'cyan':'#06b6d4',
      'white':'#f8fafc',
      'black':'#0a0a0a',
      'gray':'#9ca3af',
      'dark-gray':'#4b5563'
    }
  },
  plugins: [
    require('daisyui'),
  ],
}