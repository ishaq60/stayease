export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "yeseva": ["Yeseva One", "serif"],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["luxury", "light", "dark"], // Optional: Set "luxury" as default
  },
};
