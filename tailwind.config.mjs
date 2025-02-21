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
        danger:"#fc0303"
      },
      height: {
        btn: "54px", // Convert 161 to rem (161px / 4)
        660: "600px", // Convert 161 to rem (161px / 4)
        522:"52px",
        500:"500px",
        530:"800px",
        520:"600px",
        56:"56px",
        63:"63px",
        400:"40px",
      },
      width: {
        161: "161px", // Custom width
        258: "258px",
        224: "224px",
        244:"244px",
        500:"500px",
        530:"600px",
        137:"137px",
        241:"241px",
        135:"135px",
        313:"313px",
        208:"208px",
        360:"340px"
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      fontSize: {
        btnText: ["18px", "120%"], // 18px font-size, 120% line-height
        32:"32px",
        20:"20px"
      },
      fontWeight: {
        bold: "700",
      },
      spacing: {
        230: "10px", // Custom margin-left (ms-230)
        100:"36%",
        130:"52%"
      },
      
    },
  },
  plugins: [],
};
