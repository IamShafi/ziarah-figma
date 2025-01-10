import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        airbnbCereal: ["var(--font-airbnb-cereal)", "sans-serif"],
      },
      fontWeight: {
        'airbnbCereal-small': "400",
        'airbnbCereal-medium': "500",
        'airbnbCereal-bold': "700"
      }
    },
  },
  plugins: [],
} satisfies Config;
