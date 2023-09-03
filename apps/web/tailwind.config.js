const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
    // "../../packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  presets: [sharedConfig],
};