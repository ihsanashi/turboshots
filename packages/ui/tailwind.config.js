const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  content: [
    "./**/*.{js,ts,jsx,tsx}"
  ],
  // prefix ui lib classes to avoid conflicting with the app
  prefix: "ui-",
  presets: [sharedConfig],
};