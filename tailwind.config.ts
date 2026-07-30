import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
              padding: "1rem",
              screens: { "2xl": "1160px" },
    },
    extend: {
      colors: {
        bg: "#0E0E10",
                  surface: "#1A1A1D",
                  surface2: "#201A19",
                  border: "#2A2A2E",
                  ink: "#F5F5F2",
                  muted: "#9C9C9F",
                  accent: "#FF4B1F",
                  accentBtn: "#C93D0F",
                  pill: "#FFFBF5",
                  pillInk: "#111112",
          },
                fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
          },
                borderRadius: {
        lg: "16px",
                  xl: "20px",
          },
                keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
                      to: { transform: "translateX(-50%)" },
        },
                },
      animation: {
        marquee: "marquee 26s linear infinite",
          },
    },
},
  plugins: [require("tailwindcss-animate")],
    };

export default config;
