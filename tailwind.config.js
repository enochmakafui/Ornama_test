module.exports = {
  content: [
    './index.html',  // Ensure Tailwind purges unused CSS
    './src/**/*.{js,html}',  // Your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
