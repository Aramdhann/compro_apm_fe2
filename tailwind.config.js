/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#8EC352",
      secondary: "#FFBA26",
      dark_green: "#1A5632",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      dope: "#333333",
      abu: "#DEE2E6",
      gray: {
        200: "#e5e7eb",
      },
      red: "#EF4444",
      red_light: "#fca5a5",
      error: "#FFE5E5",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8EC352",
          secondary: "#FFBA26",
          accent: "#37cdbe",
          neutral: "#3d4451",
          dark_green: "#1A5632",
          transparent: "transparent",
          current: "currentColor",
          white: "#ffffff",
          dope: "#333333",
          abu: "#DEE2E6",
          "base-100": "#ffffff",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
  },
};
