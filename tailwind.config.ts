import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.scss",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E0E7FF", // B100
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81", // B900
        },
        neutral: {
          100: "#F5F5F5", // W900
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717", // B900
        },
        white: {
          100: "#FFFFFF", // W100
          200: "#F8FAFC", // W400
        },
        semantic: {
          green: {
            100: "#D1FAE5", // G100
            200: "#A7F3D0",
            300: "#6EE7B7",
            400: "#34D399",
            500: "#10B981",
            600: "#059669",
            700: "#047857",
            800: "#065F46",
            900: "#064E3B", // G800
          },
          red: {
            100: "#FEE2E2", // R100
            200: "#FECACA",
            300: "#FCA5A5",
            400: "#F87171",
            500: "#EF4444",
            600: "#DC2626",
            700: "#B91C1C",
            800: "#991B1B",
            900: "#7F1D1D", // R800
          },
          yellow: {
            100: "#FEF9C3", // Y100
            200: "#FEF08A",
            300: "#FDE047",
            400: "#FACC15",
            500: "#EAB308",
            600: "#CA8A04",
            700: "#A16207",
            800: "#854D0E",
            900: "#713F12", // Y800
          },
        },
      },
      screens: {
        tablet: "768px",
        desktop: "1280px",
      },
      fontSize: {
        h1: ["40px", { fontWeight: "600" }],
        h2: ["32px", { fontWeight: "700" }],
        h3: ["24px", { fontWeight: "700" }],
        h4: ["18px", { fontWeight: "600" }],
        h5: ["16px", { fontWeight: "500" }],
        h6: ["14px", { fontWeight: "500" }],
        p1: ["14px", { lineHeight: "175%", fontWeight: "400" }],
        p1Medium: ["14px", { lineHeight: "175%", fontWeight: "500" }],
        l1: ["12px", { fontWeight: "400" }],
        l1Medium: ["12px", { fontWeight: "500" }],
      },
      spacing: {
        "1": "4px",
        "2": "6px",
        "3": "8px",
        "4": "12px",
        "5": "16px",
        "6": "24px",
        "7": "32px",
        "8": "40px",
        "9": "48px",
        "10": "56px",
        "11": "64px",
        "12": "72px",
        "13": "80px",
        "14": "88px",
        "15": "96px",
        "16": "104px",
        "17": "112px",
        "18": "120px",
        "19": "128px",
        "20": "136px",
        "21": "144px",
        "22": "152px",
        "23": "160px",
        "24": "168px",
      },
    },
  },
  plugins: [],
} satisfies Config;
