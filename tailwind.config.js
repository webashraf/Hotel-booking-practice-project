/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#f9bf68",

        secondary: "#c0ef62",

        accent: "#e2a6fc",

        neutral: "#291F29",

        "base-100": "#2D3948",

        info: "#1DAAE2",

        success: "#159367",

        warning: "#FCCE4F",

        error: "#FB6094",
      },
    },
  ],
  plugins: [require("daisyui")],
};
