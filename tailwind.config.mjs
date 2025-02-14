/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: "#741739",
      },
      height: {
        btn: "54px", // Convert 161 to rem (161px / 4)
      },
      width: {
        161: "161px", // Custom width
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      fontSize: {
        btnText: ["18px", "120%"], // 18px font-size, 120% line-height
      },
      fontWeight: {
        bold: "700",
      },
    },
  },
  plugins: [],
};
