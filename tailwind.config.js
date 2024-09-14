/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
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
    },
    backgroundImage: {
      'portrait': "url('../public/IMG_1317.jpg')"
    }
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
  ],
}