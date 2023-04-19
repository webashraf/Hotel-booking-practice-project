/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#0D0D0D",

        secondary: "#1A1919",

        accent: "#262626",

        neutral: "#000000",

        "base-100": "#FFFFFF",

        info: "#0070F3",

        success: "#21CC51",

        warning: "#FF6154",

        error: "#DE1C8D",
      },
    },
  ],
  plugins: [require("daisyui")],
};
