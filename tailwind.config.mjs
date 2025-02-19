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
        660: "600px", // Convert 161 to rem (161px / 4)
        522:"52px",
        500:"500px",
        530:"800px",
        520:"600px"
      },
      width: {
        161: "161px", // Custom width
        258: "258px",
        224: "224px",
        244:"244px",
        500:"500px",
        530:"600px"
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
      spacing: {
        230: "239px", // Custom margin-left (ms-230)
        100:"36%",
        130:"52%"
      },
      
    },
  },
  plugins: [],
};
