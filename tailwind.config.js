module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], // For headings or logo text
        poppins: ['"Poppins"', 'sans-serif'], // For regular text like body, paragraphs
        roboto: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
