module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    animation: {
      fadeIn: 'fadeIn .75s ease-in-out',
    },
    keyframes: (theme) => ({
      fadeIn: {
        '0%': {opacity: 0},
        '100%': {opacity: 1},
      },
    }),
  },
  plugins: [],
}
