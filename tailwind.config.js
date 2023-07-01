import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: colors.black,
      current: 'currentColor',
      grey: colors.neutral, // aliased 'neutral' to 'grey'
      transparent: 'transparent',
      white: colors.white,
    },
    extend: {
      colors: {
        lemon: {
          '50': '#fffccc',
          '100': '#fffd99',
          '200': '#faff66',
          '300': '#eeff33',
          '400': '#ddff00',
          'DEFAULT': '#ddff00',
          '500': '#b1d911',
          '600': '#8bb31d',
          '700': '#698c22',
          '800': '#4a6621',
          '900': '#2e401a',
          '950': '#121a0c',
        },
      },
    },
  },
  plugins: [],
}
