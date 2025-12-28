module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // CITS Brand Colors
        primary: '#F36C21',
        'primary-hover': '#E05F1D',
        // Optional: soft accent (for highlights)
        // 'primary-soft': '#FFF1E8',
        'primary-soft': '#FFE2D1', // visible on white
        'primary-tint': '#FFD1B8', // for highlights/badges

        secondary: '#1F3A5F',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
